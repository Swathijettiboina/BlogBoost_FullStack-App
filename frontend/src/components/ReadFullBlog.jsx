import axios from "axios";
import { ChevronLeft, Eye, Heart, Edit, Trash, ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CommentSection from "./CommentSection";

function ReadFullBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const readingBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/blogs/${id}`);
        setBlog(res.data);
        setLiked(res.data.userLiked || false);
        await axios.put(`http://localhost:5000/blogs/${id}/increase-views`);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) readingBlog();
  }, [id]);

  if (loading) {
    return <h2 className="text-center text-gray-500">Loading blog...</h2>;
  }

  if (!blog) {
    return <h2 className="text-center text-gray-500">Blog not found</h2>;
  }

  const likeHandle = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/blogs/${id}/like`);
      setBlog((prev) => ({ ...prev, likeCount: res.data.likeCount }));
      setLiked(true);
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5000/blogs/${id}`);
        navigate("/all");
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-xl relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/all")}
          className="absolute top-3 left-3 bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Edit & Delete Buttons */}
        <div className="absolute top-4 right-4 flex space-x-3">
          <Link
            to={`/edit-blog/${id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-blue-600 transition"
          >
            <Edit size={16} />
            <span>Edit</span>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-red-600 transition"
          >
            <Trash size={16} />
            <span>Delete</span>
          </button>
        </div>

        {/* Blog Image */}
        <img
          src={
            blog.imageurl ||
            "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=b9S9F5NT9TWeFZE8XGGdIu3FucUa2Nm9MAXIgkj-FnA="
          }
          alt="Blog"
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-3">{blog.title}</h1>

        {/* Blog Metadata */}
        <div className="flex justify-between text-gray-600 text-sm mb-5">
          <p>
            By <span className="font-semibold">{blog.author || "Unknown"}</span>
          </p>

          <p>
            Published on{" "}
            {blog.publishDate
              ? new Date(blog.publishDate).toLocaleDateString()
              : "Unknown Date"}
          </p>
        </div>

        {/* Blog Content */}
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          {blog.content}
        </p>
        {/* Tags Section */}
        {blog.tags?.length > 0 && (
          <div className="mt-3 flex items-center  justify-center flex-wrap gap-2">
            {blog.tags
              .join(",") 
              .split(",")
              .map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-black text-xs font-semibold px-3 py-1 rounded-full"
                >
                  #{tag.trim()}
                </span>
              ))}
          </div>
        )}

        {/* Interaction Section */}
        <div className="flex items-center justify-between mt-6 text-gray-600">
          <button className="flex items-center space-x-2">
            <Eye size={16} className="text-gray-500" />
            <span>{blog.views || 0} Views</span>
          </button>
          <button onClick={likeHandle} className="flex items-center space-x-2">
            <Heart
              size={16}
              className={`hover:cursor-pointer transition duration-300 ${
                liked ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
            <span>{blog.likeCount || 0} Likes</span>
          </button>
        </div>

        {/* Comments Section */}
        <CommentSection blogId={id} comments={blog.comments} />
      </div>
    </div>
  );
}

export default ReadFullBlog;
