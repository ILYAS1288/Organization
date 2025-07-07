import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-6">
            Empowering Change Through Innovation
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-6">
            Welcome to <span className="font-semibold text-indigo-600">Our Organization</span> —
            where creativity meets purpose. We bring together passionate individuals, cutting-edge technology,
            and community-driven goals to create lasting impact.
          </p>
          <p className="text-gray-600 mb-6">
            Whether it’s education, tech solutions, or social innovation, we help build a brighter future for all. Join us on a mission that matters.
          </p>
          <button className="mt-4 rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-300"
        >
          <img
            src="./images/2.jpg"
            alt="Team working together at Organization"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </main>
  );
}
