import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "../pages/HeroSection";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import RecentBlogs from "../pages/RecentBlogs";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-gray-300 to-purple-300 min-h-screen text-gray-900">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-6 lg:px-12 py-10 space-y-12">
        <FeaturedBlogs />
        <RecentBlogs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
