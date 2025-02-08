import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThumbsUp, Trash2 } from 'lucide-react';

function CommentSection({ blogId, comments }) {
    const [newComment, setNewComment] = useState("");
    const [username, setUsername] = useState("");  // To capture the username
    const [blogComments, setBlogComments] = useState(comments || []);
    const [loading, setLoading] = useState(false);  // Track loading state for comment submission

    useEffect(() => {
        if (blogId) {
            const fetchComments = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/blogs/${blogId}/comments`);
                    setBlogComments(response.data);
                } catch (error) {
                    console.error("Error fetching comments:", error);
                }
            };

            fetchComments();
        }
    }, [blogId, comments]);

    const handleCommentSubmit = async () => {
        const finalUsername = username.trim() ? username : "Anonymous"; // Set "Anonymous" if no username is provided

        if (newComment.trim()) {
            setLoading(true); // Set loading state to true

            try {
                const res = await axios.post(`http://localhost:5000/blogs/${blogId}/comments`, {
                    user: finalUsername,
                    comment: newComment,
                });

                setBlogComments((prevComments) => [...prevComments, res.data]);
                setNewComment(""); // Clear comment input
                setUsername(""); // Clear username input
            } catch (error) {
                console.error("Error submitting comment:", error);
            } finally {
                setLoading(false); // Set loading state back to false
            }
        }
    };

    const handleLikeComment = async (commentId) => {
        try {
            const res = await axios.put(`http://localhost:5000/blogs/${blogId}/comments/${commentId}/like`);
            console.log("Updated Likes:", res.data.likes);  // Log the updated likes count

            setBlogComments((prevComments) =>
                prevComments.map((comment) =>
                    comment._id === commentId ? { ...comment, likes: res.data.likes } : comment
                )
            );
        } catch (error) {
            console.error("Error liking comment:", error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`http://localhost:5000/blogs/${blogId}/comments/${commentId}`);
            setBlogComments((prevComments) =>
                prevComments.filter((comment) => comment._id !== commentId)
            );
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    return (
        <div className="mt-8 px-4 py-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="font-semibold text-2xl mb-4">Leave a Comment</h2>

            {/* Username and Comment Input */}
            <div className="flex items-center space-x-4 mb-6">
                <input
                    type="text"
                    className="w-1/4 p-2 border rounded-lg text-sm"
                    placeholder="Your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <textarea
                    className="flex-1 p-2 border rounded-lg text-sm h-10"
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    disabled={loading}
                >
                    {loading ? "Posting..." : "Post Comment"}
                </button>
            </div>

            {/* Display Comments */}
            <div className="mt-6 space-y-4">
                {blogComments.length > 0 ? (
                    blogComments.slice().reverse().map((comment) => (
                        <div key={comment._id} className="border-b py-4 flex justify-between items-start">
                            <div>
                                <div className="flex items-center space-x-2">
                                    <p className="font-semibold">Comment By {comment.user}</p>
                                    <p className="text-xs text-gray-500">{new Date(comment.date).toLocaleString()}</p>
                                </div>

                                <p>{comment.comment}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={() => handleLikeComment(comment._id)}
                                >
                                    <div className="flex">
                                        <ThumbsUp fill="blue" className="hover:cursor-pointer" />
                                        <span>{comment.likes || 0}</span>
                                    </div>
                                </button>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteComment(comment._id)}
                                >
                                    <Trash2 />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
}

export default CommentSection;
