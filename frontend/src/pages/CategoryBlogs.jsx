import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const CategoryBlogs = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        if (!category) return;

        console.log("Fetching blogs for category:", category);
        const response = await axios.get("http://localhost:5000/categoryblogs", {
          params: { category: `${category}` },
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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text mb-10">
          Exploring {category}: Curated Reads for You
        </h1>

        {blogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} Id={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg mt-10">
            🚀 No blogs found in this category. Stay tuned for more updates!
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryBlogs;
