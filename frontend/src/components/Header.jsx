import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo Section */}
        <div className="flex items-center">
          <p className="text-blue-600 text-3xl font-bold">Blog Boost</p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-100">
          <input 
            type="search" 
            className="w-150 bg-transparent outline-none px-2" 
            placeholder="Search here" 
          />
          <span className="cursor-pointer hover:bg-gray-200 p-1 rounded-full">
            <Search size={20} strokeWidth={1} />
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-5">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition">Home</Link>
          <Link to="/addblog" className="text-gray-700 font-medium hover:text-blue-600 transition">Add Blog</Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition">About</Link>
          <Link to="/profile" className="text-gray-700 font-medium hover:text-blue-600 transition">Profile</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
