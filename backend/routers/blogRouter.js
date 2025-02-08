const express = require('express');
const blogController = require('../controllers/blogController.js');

const router = express.Router();

// Get blogs by type (featured/latest)
router.get('/typeblogs', blogController.getBlogsByType);


// catogory blogs
router.get('/categoryblogs',blogController.getBlogsByCategory);

// Get all blogs (without filters)
router.get('/all', blogController.getAllBlogs);

// Get a single blog by ID
router.get('/blogs/:id', blogController.getBlogById);

// Create a new blog
router.post('/blogs', blogController.createBlog);

// Update a blog by ID
router.put('/blogs/:id', blogController.updateBlog);

// Delete a blog by ID
router.delete('/blogs/:id', blogController.deleteBlog);

// Increase views count
router.put('/blogs/:id/increase-views', blogController.increaseViews);

// Like a blog
router.put('/blogs/:id/like', blogController.likeBlog);

module.exports = router;
