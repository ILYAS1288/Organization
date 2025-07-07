import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 ring-1 ring-gray-200">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Login to Your Account</h1>
        
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
              <FaUserAlt className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Forgot your password?{" "}
            <a href="#" className="text-indigo-600 hover:underline">Reset it</a>
          </p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
