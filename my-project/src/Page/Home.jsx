import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      {/* Header */}
      <h1 className="mb-6 text-center text-3xl font-bold tracking-wide text-indigo-600 sm:text-4xl lg:text-5xl">
        Organization
      </h1>

      {/* Image */}
      <div className="w-full max-w-9xl overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
        <img
          src="./images/2.jpg"
          alt="Team working together at Organization"
          className="h-auto w-full object-cover"
        />
      </div>
    </main>
  );
}
