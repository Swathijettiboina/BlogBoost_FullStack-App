import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-blog-boost.webp";

const Header = () => {
  return (
    <header className="top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-md z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full border border-gray-500 shadow-lg"
            src={logo}
            alt="Blog Boost Logo"
          />
          <p className="text-white text-3xl font-bold italic tracking-tight">
            Blog Boost
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          {["Home", "Add Blog", "About", "Profile"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.replace(" ", "").toLowerCase()}`}
              className="text-gray-300 font-medium hover:text-white transition duration-300 transform hover:scale-110"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
