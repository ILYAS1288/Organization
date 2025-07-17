import React from 'react'

export default function AdminUser() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Admin User Page</h1>
            <p className="text-center text-gray-600">This is the admin user page where you can manage users.</p>
            <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">User Management</h2>
                <p className="text-gray-700 mb-6">Here you can view, edit, or delete users.</p>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="w-full bg-gray-200 text-gray-700">
                            <th className="py-3 px-6 text-left">User ID</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>

                        </tr>
                        
                    </thead>

                </table>
                <tbody>
                 
                    <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">John Doe</td>
                        <td className="py-4 px-6">John@gmail.com</td>
                        <td className="py-4 px-6">
                            <button className="text-indigo-600 hover:text-indigo-800">Edit</button>
                        </td>
                        <td className="py-4 px-6">
                            <button className="text-red-600 hover:text-red-800">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </div>

        </div>
    )
}
