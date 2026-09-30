import React from 'react';
import { Link } from 'react-router-dom';

// Mock user-specific data
const myBlogs = [
  { id: 1, title: "Mastering React and Tailwind", date: "Sep 25, 2026", status: "Published" },
  { id: 2, title: "Setting up Vite for the First Time", date: "Sep 24, 2026", status: "Draft" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
            + New Post
          </Link>
        </div>
        
        <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
          {myBlogs.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {myBlogs.map((blog) => (
                <li key={blog.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="mb-4 sm:mb-0">
                    <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                    <div className="text-sm text-gray-500 mt-1">
                      {blog.date} • <span className={blog.status === 'Published' ? 'text-green-600 font-medium' : 'text-yellow-600 font-medium'}>{blog.status}</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
                    <button className="text-red-600 hover:text-red-800 font-medium text-sm">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-10 text-center text-gray-500">
              You haven't written any blogs yet. Click "+ New Post" to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}