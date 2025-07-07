import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Contact Us</h1>

      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-indigo-600 text-xl" />
            <span className="text-gray-700">+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <span className="text-gray-700">contact@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-indigo-600 text-xl" />
            <span className="text-gray-700">123 Education Rd, Lahore, Pakistan</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
