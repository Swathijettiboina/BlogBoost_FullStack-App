const blogModel =require('../models/blog.js');
// Create a new blog
const creatBlog=async(req,res)=>{
    try{
        const blog = new blogModel({
            title:req.body.title,
            description:req.body.description,
            content:req.body.content,
            author:req.body.author,
            imageurl:req.body.imageurl,
            publishDate:req.body.publishDate
        });
        await blog.save();
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

// Get all blogs
const getAllBlogs=async(req,res)=>{ 
    try{
        const blogs=await blogModel.find();
        res.status(200).json(blogs);    
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

// get  a single blog by ID
const getBlogById=async(req,res)=>{
    try{
        const blog  = await blogModel.findById(req.params.id);
        res.status(200).json(blog);
    }catch(error){
        res.status(400).json({message:error.message});
    }   
}
// update the blog by ID
const updateBlog=async(req,res)=>{
    try{
        const blog = await blogModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(blog);
    }catch(error){
        res.status(400).json({message:error.message});
    }   
}
// delete the blog by ID
const deleteBlog=async(req,res)=>{
    try{
        const blog = await blogModel.findByIdAndDelete(req.params.id);
        res.status(200).json(blog);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

module.exports= { creatBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };