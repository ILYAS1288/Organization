import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* About Section */}
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">About Us</h2>
          <p className="text-sm text-gray-400">
            We are committed to empowering communities and delivering excellence in every
            project we take on.
          </p>
        </div>

       
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

       
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
          <p className="text-sm text-gray-400">Email: info@organization.com</p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Organization. All rights reserved.
      </div>
    </footer>
  );
}
