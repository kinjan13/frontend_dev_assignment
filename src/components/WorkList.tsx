"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import workers from "@/data/workers.json";
import { WorkerType } from "@/types/worker";

export default function WorkersPage() {
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredWorkers = workers.filter(
    (w) => filter === "All" || w.serviceType === filter
  );

  return (
    <main className="min-h-screen bg-gray-100 p-10 pt-20">
      <h1 className="text-3xl font-bold text-center mb-10">Our Workers</h1>

      <div className="mb-6 flex justify-center gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="All">All</option>
          {Array.from(new Set(workers.map((w) => w.serviceType))).map(
            (type) => (
              <option key={type} value={type}>
                {type}
              </option>
            )
          )}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredWorkers.map((worker: WorkerType) => (
          <Link key={worker.id} href={`/workers/${worker.id}`}>
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center cursor-pointer hover:shadow-xl transition">
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
          </Link>
        ))}
      </div>
    </main>
  );
}
