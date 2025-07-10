import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('There was an error submitting the form.');
    }
  };

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Message</label>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
          {success && <p className="text-green-600">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
}
