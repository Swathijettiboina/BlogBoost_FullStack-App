import { ChevronLeft } from 'lucide-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: '',
        author: '',
        description: '',
        imageurl: '',
        category: '',
        content: '',
        tags: '',
    });

    const categories = ['Technology', 'Health', 'Lifestyle', 'Education', 'Business'];

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);
                setBlog(res.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        if (id) fetchBlog();
    }, [id]);

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.id]: e.target.value });
    };

    const updateBlog = async () => {
        try {
            await axios.put(`http://localhost:5000/blogs/${id}`, blog);
            alert('Blog updated successfully');
            navigate(`/blogs/read-blog/${id}`);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                <div className="flex">
                    <ChevronLeft /> <span>Back</span>
                </div>
            </button>
            

            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Edit Blog</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                        <input type="text" id="title" value={blog.title} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
                        <input type="text" id="author" value={blog.author} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea id="description" value={blog.description} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div>
                        <label htmlFor="imageurl" className="block text-lg font-medium text-gray-700">Image URL</label>
                        <input type="text" id="imageurl" value={blog.imageurl} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                        <textarea id="content" value={blog.content} onChange={handleChange} className="w-full p-3 h-40 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="tags" className="block text-lg font-medium text-gray-700">Tags</label>
                        <input type="text" id="tags" value={blog.tags} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="col-span-2">
                        <button onClick={updateBlog} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Update Blog</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
