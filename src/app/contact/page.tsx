"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have questions or want to book a worker? Reach out to us:
        </p>
        <p className="text-gray-800 font-semibold">Email: support@solveease.com</p>
        <p className="text-gray-800 font-semibold">Phone: +91 12345 67890</p>
        <p className="text-gray-700 mt-4">
          Or use WhatsApp to quickly message us about your requirements.
        </p>
      </div>
    </main>
  );
}
