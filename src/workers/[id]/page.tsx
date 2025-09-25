"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import workers from "@/data/workers.json";
import { WorkerType } from "@/types/worker";

interface Props {
  params: { id: string };
}

export default function WorkerDetails({ params }: Props) {
  const worker: WorkerType | undefined = workers.find(
    (w) => w.id === Number(params.id)
  );

  if (!worker) return notFound();

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-start p-10 pt-24">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md">
        <Image
          src={worker.image}
          alt={worker.name}
          width={300}
          height={300}
          className="rounded-t-2xl w-full object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{worker.name}</h2>
          <p className="text-gray-600 mb-2">{worker.serviceType}</p>
          <p className="text-gray-800 font-semibold mb-4">₹{worker.price}/day</p>

          <ul className="mb-4 border rounded-lg divide-y divide-gray-200">
            <li className="p-2">Service Type: {worker.serviceType}</li>
            <li className="p-2">Daily Rate: ₹{worker.price}</li>
            <li className="p-2">Worker ID: {worker.id}</li>
          </ul>

          <div className="flex justify-between gap-4">
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to book ${worker.name} (${worker.serviceType}) for ₹${worker.price}/day`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 text-white text-center px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:test@example.com?subject=Booking Worker&body=I want to book ${worker.name} (${worker.serviceType}) for ₹${worker.price}/day`}
              className="flex-1 bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
