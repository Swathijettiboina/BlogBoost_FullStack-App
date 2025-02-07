const mongoose=require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    publishDate:{
        type:Date,
        required:true
    }
});

const blogModel= mongoose.model("Blogs", blogSchema);
module.exports=blogModel;