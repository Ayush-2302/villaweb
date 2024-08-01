import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define menu items in an array
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-16 rounded-md w-auto" />
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white bg-gray-700 px-3 py-2 rounded-md shadow-md shadow-gray-500 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-700 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/signup">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md shadow-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600 transition-all duration-300 ease-in-out">
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md shadow-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-600 transition-all duration-300 ease-in-out">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <div className="px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-white bg-gray-700 px-3 py-2 rounded-md shadow-md shadow-gray-500 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-700 transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/signup">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md shadow-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600 transition-all duration-300 ease-in-out">
                Signup
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md shadow-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-600 transition-all duration-300 ease-in-out">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
