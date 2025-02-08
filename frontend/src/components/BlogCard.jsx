import { Heart, Eye, ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ Id, blog }) => {
  const navigate = useNavigate(); // Hook to navigate back

  return (
    <div className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-transform duration-400 hover:scale-105">
      {/* Blog Image */}
      <img
        src={blog.imageurl}
        alt="Blog Thumbnail"
        className="w-full h-52 object-cover rounded-t-2xl"
      />

      {/* Blog Content */}
      <div className="p-5 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
        <p className="text-gray-600 line-clamp-2">{blog.description}</p>

        {/* Author & Meta Info */}
        <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
          <p className="font-semibold">By {blog.author || "Unknown"}</p>
          <p>{new Date(blog.publishDate).toLocaleDateString() || "N/A"}</p>
        </div>

        {/* Views & Likes */}
        <div className="flex items-center justify-between mt-3 text-gray-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye /> {blog.views || 0}
            </span>
            <button className="flex items-center space-x-1">
              <Heart fill="red" className="text-red-500 fill-red-500" />
              <span>{blog.likeCount || 0} Likes</span>
            </button>
          </div>

          {/* Read More Button */}
          <Link to={`/blogs/read-blog/${Id}`} className="text-blue-600 flex font-semibold hover:underline">
            Read More
          </Link>          
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
