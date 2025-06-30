import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      {/* Header Section */}
      <div className="max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-indigo-700 sm:text-5xl lg:text-6xl">
          Welcome to Our Organization
        </h1>
        <p className="mb-6 text-lg text-gray-700 sm:text-xl">
          We empower communities and bring innovative solutions to life through teamwork,
          dedication, and technology. Join us to make a difference.
        </p>
        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-300">
        <img
          src="./images/2.jpg"
          alt="Team working together at Organization"
          className="w-full object-cover"
        />
      </div>
      
    </main>   
  );
}
