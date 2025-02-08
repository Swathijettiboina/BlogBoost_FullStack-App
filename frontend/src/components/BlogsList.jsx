import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto relative">

        {/* Back Button (Top Left) */}
        <Link
          to="/"
          className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition flex items-center"
        >
          <ChevronLeft /> <span className="ml-1">Back</span>
        </Link>

        {/* Add Blog Button (Top Right) */}
        <Link
          to="/addblog"
          className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Add Blog
        </Link>

        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Explore Our Blogs
        </h1>

        {blogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} Id={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No blogs available.</p>
        )}
      </div>

      {/* Join Community Section */}
      <section className="py-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-16 rounded-lg shadow-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-4">Join Our Blogging Community</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Are you a writer? Do you have a story or idea to share with the world? 
            We welcome guest contributors to submit their posts and become part of our growing blog community.
          </p>
          <Link 
            to="/addblog" 
            className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gray-200 transition"
          >
            Submit Your Post
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogsList;
