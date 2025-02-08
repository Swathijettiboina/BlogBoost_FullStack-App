import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <Link to='/' className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                <div className="flex">
                    <ChevronLeft /> <span>Back</span>
                </div>
            </Link>

            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Add New Blog</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                        <input type="text" id="title" value={blog.title} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter title" />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
                        <input type="text" id="author" value={blog.author} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter author name" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea id="description" value={blog.description} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter description"></textarea>
                    </div>
                    <div>
                        <label htmlFor="imageurl" className="block text-lg font-medium text-gray-700">Image URL</label>
                        <input type="text" id="imageurl" value={blog.imageurl} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter image URL" />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
                        <select id="category" value={blog.category} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="content" className="block text-lg font-medium text-gray-700">Content</label>
                        <textarea id="content" value={blog.content} onChange={handleChange} className="w-full p-3 h-40 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter content"></textarea>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="tags" className="block text-lg font-medium text-gray-700">Tags</label>
                        <input type="text" id="tags" value={blog.tags} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter tags (comma separated)" />
                    </div>
                    <div className="col-span-2">
                        <button onClick={addBlog} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;
