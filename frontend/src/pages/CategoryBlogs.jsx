import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const CategoryBlogs = () => {
  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category"); // Extract category from query parameters
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        if (!category) return; // Ensure category is present before making the request
        
        console.log("Fetching blogs for category:", category); 
       const response = await axios.get('http://localhost:5000/categoryblogs', {
          params: { category:`${category}` } // Sending category as query parameter
      });
        console.log("Blogs received:", response.data); 
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogsByCategory();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Blogs in {category}
        </h1>

        {blogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} Id={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No blogs found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
