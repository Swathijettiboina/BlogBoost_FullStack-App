import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Technology", "Health", "Finance", "Education",  
  "Lifestyle", "Entertainment", "Business", "Science",  
  "Travel", "Food"
];    

const HeroSection = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-screen text-white" 
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230801/pngtree-top-tips-to-make-money-blogging-image_12958761.jpg')"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="text-black bg-opacity-50 min-h-screen">

        {/* Trending Categories */}
        <section className="py-10 px-6">
          <h2 className="text-3xl text-black font-semibold text-center mb-6 ">
            🔥 Trending Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/categoryblogs?category=${category.toLowerCase()}`}
                className="bg-gray-200 px-6 py-3 rounded-lg text-lg font-semibold text-black hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>

        {/* Hero Section */}
        <section className="flex items-center justify-center text-center h-[450px]">
          <div className="bg-opacity-60 p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-black">
              "Blogging is not just writing, it's sharing your voice with the world."
            </h1>
            <p className="mt-4 text-black text-3xl italic">
              Explore, Learn, and Inspire.
            </p>
            <Link to="/all">
              <button className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Start Reading
              </button>
            </Link>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default HeroSection;
