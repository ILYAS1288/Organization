import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:3000/api/admin-users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: form.email, password: form.password }),
      });

      const contentType = res.headers.get('content-type');
      const isJSON = contentType && contentType.includes('application/json');
      const data = isJSON ? await res.json() : {};

      if (res.ok) {
        setMessage('Login successful!');
        // Optionally store token: localStorage.setItem('token', data.token);

        
      } else {
        setMessage(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Server error or connection failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 ring-1 ring-gray-200">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Login to Your Account</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
              <FaUserAlt className="text-gray-400 mr-3" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="flex items-center border rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>

          {message && (
            <p className={`text-center mt-2 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Forgot your password?{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Reset it
            </a>
          </p>
          <p className="mt-2">
            Don't have an account?{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
