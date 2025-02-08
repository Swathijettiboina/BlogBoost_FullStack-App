const Blog = require('../models/blog'); // Import the blog model

// Get all comments for a specific blog
const getComments = async (req, res) => {
    try {
        const { blogId } = req.params; // Get blogId from URL params
        const blog = await Blog.findById(blogId); // Find the blog by ID

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Return all comments associated with the blog
        res.status(200).json(blog.comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ message: "Error fetching comments" });
    }
};

// Post a new comment to a blog
const postComment = async (req, res) => {
    try {
        const { blogId } = req.params; // Get blogId from URL params
        const { comment, user } = req.body; // Get comment and user data from request body

        const blog = await Blog.findById(blogId); // Find the blog by ID
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Create a new comment object
        const newComment = {
            user: user || 'Anonymous', // Default to 'Anonymous' if no user
            comment: comment,
            date: new Date(),
            likes: 0,
        };

        // Add the new comment to the blog's comments array
        blog.comments.push(newComment);
        await blog.save(); // Save the updated blog document

        res.status(201).json(newComment); // Respond with the new comment
    } catch (error) {
        console.error("Error posting comment:", error);
        res.status(500).json({ message: "Error posting comment" });
    }
};

// Like a specific comment
const likeComment = async (req, res) => {
    try {
        const { blogId, commentId } = req.params; // Get blogId and commentId from URL params
        const blog = await Blog.findById(blogId); // Find the blog by ID
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Find the comment in the blog's comments array
        const comment = blog.comments.id(commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Increment the like count
        comment.likes += 1;
        await blog.save(); // Save the updated blog document

        // Return the updated likes count in the response
        res.status(200).json({ likes: comment.likes });
    } catch (error) {
        console.error("Error updating like count:", error);
        res.status(500).json({ message: 'Error updating like count' });
    }
};


// Delete a specific comment
const deleteComment = async (req, res) => {
    try {
        const { blogId, commentId } = req.params; // Get blogId and commentId from URL params

        const blog = await Blog.findById(blogId); // Find the blog by ID
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Find and remove the comment from the blog's comments array
        const commentIndex = blog.comments.findIndex(comment => comment._id.toString() === commentId);
        if (commentIndex === -1) {
            return res.status(404).json({ message: "Comment not found" });
        }

        blog.comments.splice(commentIndex, 1); // Remove the comment
        await blog.save(); // Save the updated blog document

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Error deleting comment" });
    }
};

module.exports = {
    getComments,
    postComment,
    likeComment,
    deleteComment
};
