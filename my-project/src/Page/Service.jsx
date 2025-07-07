import React from 'react';
import { FaChalkboardTeacher, FaBookOpen, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

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
  {
    id: 4,
    title: 'Career Counseling',
    description: 'Personalized guidance for education and jobs.',
    icon: <FaUserGraduate className="text-4xl text-indigo-600" />,
  },
];

export default function Service() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
