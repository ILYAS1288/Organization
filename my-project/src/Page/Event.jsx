import React, { useState } from 'react';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaTrash } from 'react-icons/fa';

export default function Event() {
  const [events, setEvents] = useState([
    { id: 1, title: 'React Basics Workshop', icon: <FaChalkboardTeacher /> },
    { id: 2, title: 'Advanced JavaScript', icon: <FaBook /> },
    { id: 3, title: 'Graduation Ceremony', icon: <FaGraduationCap /> },
  ]);

  const [newEvent, setNewEvent] = useState('');

  const handleAdd = async () => {
    
    if (newEvent.trim() === '') return;  

    try {
      const res = await fetch('http://localhost:3000/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newEvent }),
      });

      const data = await res.json();

      if (res.ok) {
        const id = data.id || Date.now(); 
        const icons = [<FaChalkboardTeacher />, <FaBook />, <FaGraduationCap />];
        const icon = icons[Math.floor(Math.random() * icons.length)];
        setEvents([...events, { id, title: newEvent, icon }]);
        setNewEvent('');
      } else {
        console.error('Failed to add event:', data.message);
      }
    } catch (error) {
      console.error('Error while adding event:', error);
    }
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Educational Events</h1>

      {/* Add Event  */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4">
        <input
          type="text"
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Add a new educational event"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          onClick={handleAdd}
        >
          Add Event
        </button>
      </div>

{/* after add event save the page screen */}
      {/* Grid Layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <div className="flex items-center gap-3 text-indigo-600 text-xl">
              <span>{event.icon}</span>
              <span className="text-gray-800 text-base font-medium">{event.title}</span>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(event.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}


      </div>
    </div>
  );
}
