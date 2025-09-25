"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SolveEase
        </Link>

        {/* Links with spacing */}
        <div className="flex space-x-10 text-lg font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Workers
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
