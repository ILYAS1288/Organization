import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const members = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'Project Manager',
    image: '/images/4.jpg',
  },
  {
    id: 2,
    name: 'Ali Raza',
    role: 'Full Stack Developer',
    image: '/images/4.jpg',
  },
  {
    id: 3,
    name: 'Fatima Noor',
    role: 'UI/UX Designer',
    image: '/images/4.jpg',
  },
  {
    id: 4,
    name: 'Usman Tariq',
    role: 'Mobile Developer',
    image: '/images/4.jpg',
  },
];

export default function Member() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">Our Team Members</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4 text-indigo-600 text-lg">
                <a href="#"><FaFacebookF className="hover:text-indigo-800" /></a>
                <a href="#"><FaTwitter className="hover:text-indigo-800" /></a>
                <a href="#"><FaLinkedinIn className="hover:text-indigo-800" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
