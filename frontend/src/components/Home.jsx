import React from "react";
import Header from "./Header";
// import Blogs from "./Blogs";
import Footer from "./Footer";
import BlogsList from "./BlogsList";
const Home = () => {
  return (
    <>
      <Header />
      
      <div className="grid grid-rows-1">
        <BlogsList />
      </div>
      <div className="p-1 h-auto fixed bottom-0 bg-gray-200  w-full dark:bg-gray-800">
        <Footer />
      </div>
    </>
  );
};
export default Home;