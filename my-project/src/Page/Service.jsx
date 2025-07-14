import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBookOpen, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Online Classes',
    description: 'Live interactive classes by expert teachers.',
    icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
  },
  {
    id: 2,
    title: 'Digital Library',
    description: 'Access thousands of academic resources and eBooks.',
    icon: <FaBookOpen className="text-4xl text-indigo-600" />,
  },
  {
    id: 3,
    title: 'Coding Bootcamps',
    description: 'Hands-on training in web and software development.',
    icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
  },
];

export default function Service() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-indigo-700 mb-10"
      >
        Our Services
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
