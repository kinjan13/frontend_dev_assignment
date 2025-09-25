import { NextResponse } from "next/server";
import workersData from "@/data/workers.json"; // inside src/data// Make sure this path is correct

export async function GET() {
  try {
    return NextResponse.json({ workers: workersData });
  } catch (err) {
    return NextResponse.json({ error: "Failed to load workers" }, { status: 500 });
  }
}
