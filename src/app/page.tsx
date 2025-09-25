"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define type for worker
type Worker = {
  id: number;
  name: string;
  serviceType: string;
  price: number;
  image: string;
};

export default function Home() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Fetch workers.json from public folder
  useEffect(() => {
    fetch("/data/workers.json")
      .then((res) => res.json())
      .then((data) => setWorkers(data))
      .catch((err) => console.error("Error loading workers:", err));
  }, []);

  const serviceTypes = ["All", ...new Set(workers.map((w) => w.serviceType))];

  const filteredWorkers = workers.filter((w) => {
    const matchesFilter = filter === "All" || w.serviceType === filter;
    const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Workers</h1>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/3"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/4"
        >
          {serviceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Worker Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              className="bg-white rounded-2xl shadow-lg p-4 text-center"
            >
              <Image
                src={worker.image}
                alt={worker.name}
                width={150}
                height={150}
                className="mx-auto rounded-full"
              />
              <h2 className="text-xl font-semibold mt-3">{worker.name}</h2>
              <p className="text-gray-600">{worker.serviceType}</p>
              <p className="text-gray-800 font-bold">₹{worker.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No workers found.
          </p>
        )}
      </div>
    </main>
  );
}
