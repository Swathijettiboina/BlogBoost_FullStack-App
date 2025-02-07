import { Search } from "lucide-react";
import React from "react";
import {Link} from "react-router";
const Header = () => {
  return (
    <div>
    <div className="flex justify-between bg-gray-100 p-2">
      <div className="flex justify-center italic items-center w-screen-full h-20 ">
        {/* <img className="w-20 h-20 rounded-[10px]" src='./assets/logo-blog-boost.webp' /> */}
        <p className="text-black text-5xl sans-serif font-bold">Blog Boost</p>
      </div>
      <div className="flex flex-row justify-between items-center gap-5 p-5 m-2 h-10 w-100 border-2 rounded-full">
        <input type="search"className="w-full m-0 rounded-full" placeholder="Search here" />
        <span className="hover:bg-gray-50 m-0 p-1 "><Search size={20} strokeWidth={1} absoluteStrokeWidth /></span>
      </div>
       <div className="flex flex-row justify-between items-center gap-5 p-5">
        <Link to="/" className="border-1 p-2 rounded-md hover:bg-gray-400">Home</Link>
        <Link to="/addblog" className="border-1 p-2 rounded-md hover:bg-gray-400">Add Blog</Link>
        <Link to="/about" className="border-1 p-2 rounded-md hover:bg-gray-400">About</Link>
        <Link to="/profile" className="border-1 p-2 rounded-md hover:bg-gray-400">Profile</Link>
      </div> 
    </div>
    </div>
  );
};

export default Header;