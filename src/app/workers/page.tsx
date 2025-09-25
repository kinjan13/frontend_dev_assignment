"use client";

import React from "react";
import WorkerCard from "@/components/WorkerCard";
import workers from "@/data/workers.json";

export default function WorkersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Workers</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </main>
  );
}
