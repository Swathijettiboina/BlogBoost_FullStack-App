import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import axios from 'axios';

function AddBlog() {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: '',
        author: '',
        description: '',
        content: '',
        imageurl: '',
        category: '',
        tags: '',
        publishDate: new Date().toISOString(),
        readCount: 0,
        likeCount: 0,
        views: 0,
        comments: []
    });

    const categories = [
        "Technology", "Health", "Finance", "Education",
        "Lifestyle", "Entertainment", "Business", "Science",
        "Travel", "Food"
    ];    

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.id]: e.target.value });
    };

    const addBlog = async () => {
        try {
            await axios.post("http://localhost:5000/blogs/", blog);
            alert("Blog added successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error adding blog:", error);
            alert("Failed to add blog");
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center p-4 relative"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1600x900/?blog,writing')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative w-full max-w-4xl bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 p-8 rounded-lg shadow-lg text-gray-100">
                <Link to='/' className="absolute top-4 left-4 bg-gray-800 text-blue-200 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                    <div className="flex items-center">
                        <ChevronLeft /> <span className="ml-2">Back</span>
                    </div>
                </Link>
                <h2 className="text-4xl font-extrabold text-center mb-6 text-white">Add New Blog</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="title" className="block text-lg font-semibold text-blu-300">Title</label>
                        <input type="text" id="title" value={blog.title} onChange={handleChange} className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Enter title" />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-lg font-semibold text-gray-300">Author</label>
                        <input type="text" id="author" value={blog.author} onChange={handleChange} className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Enter author name" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-lg font-semibold text-gray-300">Description</label>
                        <textarea id="description" value={blog.description} onChange={handleChange} className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Enter description"></textarea>
                    </div>
                    <div>
                        <label htmlFor="imageurl" className="block text-lg font-semibold text-gray-300">Image URL</label>
                        <input type="text" id="imageurl" value={blog.imageurl} onChange={handleChange} className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Enter image URL" />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-lg font-semibold text-gray-300">Category</label>
                        <select id="category" value={blog.category} onChange={handleChange} className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400">
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="content" className="block text-lg font-semibold text-gray-300">Content</label>
                        <textarea id="content" value={blog.content} onChange={handleChange} className="w-full p-3 h-40 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Enter content"></textarea>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="tags" className="block text-lg font-semibold text-gray-300">Tags</label>
                        <input type="text" id="tags" value={blog.tags} onChange={handleChange} className="w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Enter tags (comma separated)" />
                    </div>
                    <div className="col-span-2">
                        <button onClick={addBlog} className="w-full bg-pink-100 text-black py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;
