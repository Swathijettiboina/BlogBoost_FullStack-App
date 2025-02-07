import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-15 flex flex-col gap-5 justify-center">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard key={blog._id} Id={blog._id} blog={blog} />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogsList;
