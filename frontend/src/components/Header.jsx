import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo-blog-boost.webp';

const Header = () => {
  return (
    <header className="top-0 left-0 w-full bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-screen-xl mx-auto">

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img className="w-14 h-14 rounded-full" src={logo} alt="Blog Boost Logo" />
          <p className="text-gray-800 text-5xl font-bold italictracking-tight">Blog Boost</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/addblog"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 transform hover:scale-105"
          >
            Add Blog
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 transform hover:scale-105"
          >
            Profile
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
