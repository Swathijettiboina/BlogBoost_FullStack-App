import axios from 'axios';
import { ChevronLeft, Eye, Heart, Edit, Trash, ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function ReadFullBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        console.log("Blog ID from URL:", id);
        
        const readingBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);
                console.log("Fetched Blog Data:", res.data);
                setBlog(res.data);
                setLiked(res.data.userLiked || false); // Assuming backend sends userLiked field

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
        return <p className="text-center text-gray-500">Loading blog...</p>;
    }

    if (!blog) {
        return <p className="text-center text-gray-500">Blog not found</p>;
    }

    // Handle Like Button
    const likeHandle = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/blogs/${id}/like`);
            setBlog((prev) => ({ ...prev, likeCount: res.data.likeCount })); // Update likes count
            setLiked(true); // Toggle liked state
        } catch (error) {
            console.error("Error liking blog:", error);
        }
    };

    // // Handle Edit Button Click
    // const handleEdit = () => {
    //     navigate(`/edit-blog/${id}`);
    // };

    // Handle Delete Button Click
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await axios.delete(`http://localhost:5000/blogs/${id}`);
                navigate('/'); // Redirect to home after deleting
            } catch (error) {
                console.error("Error deleting blog:", error);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-5 mt-5 bg-white shadow-lg rounded-lg relative">
            {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-3 left-3 bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition">
        <ArrowLeft size={20} />
      </button>
            {/* Edit & Delete Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
                <Link  to={`/edit-blog/${id}`} className="bg-blue-500 text-white px-3 py-1 rounded flex items-center space-x-1 hover:bg-blue-600 transition">
                    <Edit size={16} />
                    <span>Edit</span>
                </Link>
                <button  onClick={handleDelete}  className="bg-red-500 text-white px-3 py-1 rounded flex items-center space-x-1 hover:bg-red-600 transition">
                    <Trash size={16} />
                    <span>Delete</span>
                </button>
            </div>

            <img 
                src={blog.imageurl || "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=b9S9F5NT9TWeFZE8XGGdIu3FucUa2Nm9MAXIgkj-FnA="} 
                alt="Blog"  className="w-full h-80 object-cover rounded-lg" />

            <h1 className="text-3xl font-bold text-gray-800 mt-5">{blog.title}</h1>

            <div className="flex justify-between text-gray-500 text-sm mt-2">
                <p>By <span className="font-semibold">{blog.author || "Unknown"}</span></p>
                <p>{blog.publishDate ? new Date(blog.publishDate).toLocaleDateString() : "Unknown Date"}</p>
            </div>

            <p className="text-gray-700 mt-5 leading-7">{blog.content}</p>

            <div className="flex items-center justify-between mt-5 text-gray-600">
                <button className='flex'><Eye/> {blog.views || 0} Views</button>
                <button onClick={likeHandle} className='flex items-center space-x-1'>
                    <Heart 
                        className={`hover:cursor-pointer transition duration-300 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                    />
                    <span>{blog.likeCount || 0} Likes</span>
                </button>
            </div>
        </div>
    );
}

export default ReadFullBlog;
