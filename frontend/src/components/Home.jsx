import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "../pages/HeroSection";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import RecentBlogs from "../pages/RecentBlogs";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-gray-100 to-purple-100 text-gray-900">
      <Header />
      <HeroSection />

      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-6 rounded-lg shadow-lg space-y-16">
      <div>
    <div className="mt-10">
      <FeaturedBlogs />
    </div>
  </div>
 
  <div>
    <div className="mt-10">
      <RecentBlogs />
    </div>
  </div>

  
</section>


      <Footer />
    </div>
  );
};

export default Home;
