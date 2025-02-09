import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const RecentBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/typeblogs?type=latest");
        setFeaturedBlogs(response.data);
      } catch (error) {
        console.error("Error fetching featured blogs:", error);
      }
    };

    fetchFeaturedBlogs();
  }, []);


  return (
    
<section className="py-10 px-6">
      

      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-900 via-teal-600 to-blue-700 text-transparent bg-clip-text tracking-wide">
  Fresh off the press! Explore the latest blogs just for you.
</h2>

      {featuredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog._id} Id={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blogs available.</p>
      )}
    </section>
  );
};

export default RecentBlogs;
