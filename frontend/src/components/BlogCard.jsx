import React from "react";

const BlogCard = ({ Id, blog }) => {
  return (
    <div key={Id} className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden m-3 hover:shadow-xl transition-shadow duration-300">
      {/* Blog Image */}
      <div className="md:w-1/3">
        <img src={blog.Image} alt="blog image" className="w-full h-48 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl" />
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.Title}</h2>
          <p className="text-gray-600 mb-4">{blog.Description}</p>
        </div>

        {/* Author & Date */}
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <p className="font-semibold">By {blog.Author || "Unknown"}</p>
          <p>{blog.PublishedDate || "Not Available"}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
