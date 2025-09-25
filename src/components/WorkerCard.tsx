"use client";

import React from "react";
import Image from "next/image";

import { WorkerType } from "@/types/worker";

const WorkerCard: React.FC<{ worker: WorkerType }> = ({ worker }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full">
      {/* Image */}
      <div className="relative w-full h-48 md:h-auto md:w-48 flex-shrink-0">
        <Image
          src={worker.image}
          alt={worker.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h5 className="text-xl font-semibold mb-1">{worker.name}</h5>
          <p className="text-gray-600 mb-2">{worker.serviceType}</p>
          <p className="text-gray-800 font-bold">₹{worker.price}/day</p>
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to book ${worker.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:test@example.com?subject=Booking Worker&body=I want to book ${worker.name}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WorkerCard);
