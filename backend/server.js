const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose=require("mongoose");
dotenv.config();
const app = express();

const router = require("./routers/blogRouter.js"); 
const blogModel = require("./models/blog.js");

const connectDB = require("./config/db.js");
connectDB();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get('/', (req, res) => {
    res.send("Welcome to Blog API");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});