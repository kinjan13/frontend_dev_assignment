"use client"; // needed for client-side hooks like useSWR

// 1️⃣ Type definitions
interface Worker {
  id: number;
  name: string;
  serviceType: string;
  price: number;
  image: string;
}

interface WorkersResponse {
  ok: boolean;
  workers: Worker[];
}

// 2️⃣ Imports
import useSWR from "swr";
import WorkerCard from "@/components/WorkerCard";

// 3️⃣ Fetcher function
const fetcher = (url: string) => fetch(url).then(res => res.json());

// 4️⃣ Component
export default function WorkersPage() {
  const { data, error, isLoading } = useSWR<WorkersResponse>("/api/workers", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data?.ok) return <div>Failed to load workers</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-20">
      {data.workers.map((worker) => (
        <WorkerCard key={worker.id} worker={worker} />
      ))}
    </div>
  );
}
