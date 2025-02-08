const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    imageurl: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
    category: { type: String, required: true },
    tags: { type: [String], default: [] }, 
    likeCount: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    comments: [{ 
        user: String, 
        comment: String, 
        date: { type: Date, default: Date.now } 
    }] 
});

const blogModel = mongoose.model("Blogs", blogSchema);
module.exports = blogModel;
