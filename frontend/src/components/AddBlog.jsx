import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import axios from 'axios';  // Import axios

function AddBlog() {
    const [blog, setBlog] = useState({
        title: '',
        author: '',
        description: '',
        content: '',
        imageurl: '',
        publishDate: new Date().toISOString(), // Automatically set the publish date
    });

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.id]: e.target.value });
    };

    const addBlog = async () => {
        console.log("Add Blog Button Clicked!"); // Debugging log
        
        try {
            await axios.post("http://localhost:5000/blogs/", blog); // Adjust API URL if needed
            alert("Blog added successfully!");
        } catch (error) {
            console.error("Error adding blog:", error);
            alert("Failed to add blog");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <Link to='/' className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                <div className="flex">
                    <ChevronLeft /> <span>Back</span>
                </div>
            </Link>

            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Add New Blog</h2>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                        <input type="text" id="title" value={blog.title} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter title" />
                    </div>

                    <div>
                        <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
                        <input type="text" id="author" value={blog.author} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter author name" />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea id="description" value={blog.description} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter description"></textarea>
                    </div>

                    <div>
                        <label htmlFor="imageurl" className="block text-lg font-medium text-gray-700">Image URL</label>
                        <input type="text" id="imageurl" value={blog.imageurl} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter image URL" />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-lg font-medium text-gray-700">Content</label>
                        <textarea id="content" value={blog.content} onChange={handleChange} className="w-full p-3 h-40 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter content"></textarea>
                    </div>

                    <button onClick={()=>{addBlog()}} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;
