import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 sm:px-6 lg:px-12 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 leading-tight">
            Empowering Change Through Innovation
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Welcome to <span className="font-semibold text-indigo-600">Our Organization</span> —
            where creativity meets purpose. We bring together passionate individuals, cutting-edge technology,
            and community-driven goals to create lasting impact.
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Whether it’s education, tech solutions, or social innovation, we help build a brighter future for all. 
            Join us on a mission that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-4 focus:ring-indigo-300">
              Learn More
            </button>
            <button className="rounded-full border border-indigo-600 px-8 py-3 text-lg font-semibold text-indigo-600 hover:bg-indigo-50 transition focus:outline-none focus:ring-4 focus:ring-indigo-200">
              Join Us
            </button>
          </div>
        </motion.div>

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

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Community Impact",
            icon: <FaUsers className="text-4xl text-indigo-600 mb-4" />,
            text: "We empower local communities with education, tools, and support for lasting progress."
          },
          {
            title: "Innovation Driven",
            icon: <FaLightbulb className="text-4xl text-indigo-600 mb-4" />,
            text: "Innovation is at our core — solving modern challenges with creative tech solutions."
          },
          {
            title: "Global Reach",
            icon: <FaGlobe className="text-4xl text-indigo-600 mb-4" />,
            text: "Our initiatives span across regions, connecting people with purpose on a global scale."
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-gray-200 text-center"
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
