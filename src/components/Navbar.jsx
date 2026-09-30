import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
              CodeMax Blog
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </Link>
            <Link to="/create" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Create Blog
            </Link>
            
            <div className="border-l border-gray-300 h-6 mx-2"></div>
            
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Login
            </Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Register
            </Link>
          </div>

          {/* Hamburger Icon Button (Visible only on mobile) */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Dashboard
          </Link>
          <Link to="/create" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Create Blog
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="block py-2 bg-blue-600 text-white text-center rounded-lg font-medium">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}