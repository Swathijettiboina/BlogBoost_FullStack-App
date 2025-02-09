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

  // Duplicate blogs for seamless infinite scrolling
  const scrollingBlogs = [...featuredBlogs, ...featuredBlogs];

  return (
    <section className="py-10 px-6 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
        Great minds read alike! Here are the top 5 must-read blogs.
      </h2>

      {featuredBlogs.length > 0 ? (
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-x-6 flex-nowrap w-auto animate-scroll-continuous">
            {scrollingBlogs.map((blog, index) => (
              <div key={index} className="w-[320px] mx-auto h-[500px]">
              <BlogCard Id={blog._id} blog={blog} />
            </div>
            
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No blogs available.</p>
      )}
    </section>
  );
};

export default FeaturedBlogs;
