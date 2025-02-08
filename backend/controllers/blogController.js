const blogModel = require('../models/blog.js');

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const blog = new blogModel({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            author: req.body.author,
            imageurl: req.body.imageurl,
            category: req.body.category,
            tags: req.body.tags,
            publishDate: req.body.publishDate || new Date().toISOString(),
            readCount: 0,
            likeCount: 0,
            views: 0,
            comments: []
        });

        await blog.save();
        res.status(201).json({ message: "Blog created successfully!", blog });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: "Invalid Blog ID", error: error.message });
    }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndDelete(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Increase views count when a blog is read
const increaseViews = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndUpdate(
            req.params.id,
            { $inc: { views: 1 } }, // Increment views count
            { new: true }
        );
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: "Error increasing views count", error: error.message });
    }
};

// Handle likes when the like button is clicked
const likeBlog = async (req, res) => {
    try {
        const blog = await blogModel.findByIdAndUpdate(
            req.params.id,
            { $inc: { likeCount: 1 } }, // Increment like count
            { new: true }
        );
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ message: "Error liking the blog", error: error.message });
    }
};

// Get blogs by category
const getBlogsByCategory = async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};

        if (category) {
            query.category = { $regex: new RegExp(category, "i") }; // Case-insensitive category filter
        }

        console.log("Query being used:", query); // Debugging output

        const blogs = await blogModel.find(query);

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs available in this category" });
        }

        res.status(200).json(blogs); // Return the blogs if found
    } catch (error) {
        console.error("Error fetching blogs by category:", error);
        res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
    }
};

// Get blogs by type (featured/latest)
const getBlogsByType = async (req, res) => {
    try {
        const { type } = req.query;
        let query = {};

        console.log("Query being used:", query); // Debugging output

        let blogs;
        if (type === "featured") {
            blogs = await blogModel.find(query).sort({ likeCount: -1, views: -1 }).limit(3); // Featured blogs sorted by likeCount and views
        } else if (type === "latest") {
            blogs = await blogModel.find(query).sort({ publishDate: -1 }).limit(3); // Latest blogs sorted by publishDate
        } else {
            blogs = await blogModel.find(query); // Default: Return all blogs if type is not "featured" or "latest"
        }

        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs available for this type" });
        }

        res.status(200).json(blogs); // Return the blogs if found
    } catch (error) {
        console.error("Error fetching blogs by type:", error);
        res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
    }
};


module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    increaseViews,
    likeBlog,
    getBlogsByType,
    getBlogsByCategory
};
