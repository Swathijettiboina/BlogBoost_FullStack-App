import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const FeaturedBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/typeblogs?type=featured");
        setFeaturedBlogs(response.data);
      } catch (error) {
        console.error("Error fetching featured blogs:", error);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  return (
    <section className="py-10 px-6">
      

      <h2 className="text-3xl font-semibold text-center mb-6">🌟 Featured Blogs</h2>

      {featuredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
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

export default FeaturedBlogs;
