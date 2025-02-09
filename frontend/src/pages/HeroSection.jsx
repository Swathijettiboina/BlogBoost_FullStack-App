import { Repeat } from "lucide-react";
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
        backgroundImage: "url('https://t4.ftcdn.net/jpg/08/48/33/53/360_F_848335388_jD5aySbYZE78I6NNEmjPSk7QKqIkAMT5.jpg')",
        // backgroundRepeat:"repeat"
      }}
    >
      {/* Overlay for better text readability */}
      <div className=" bg-opacity-50 min-h-screen">

        {/* Trending Categories */}
        <section className="py-8 px-8 ">
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent relative z-10">
            Trending Categories: Explore New Worlds, No Passport Required!!!
          </h2>

          <div className="flex flex-wrap justify-center gap-6 relative z-0">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/categoryblogs?category=${category.toLowerCase()}`}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>
        {/* Hero Section */}
        <section className="flex items-center justify-center text-center h-[500px] px-6">
          <div className="bg-gray-400 bg-opacity-60 p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-snug">
              "Blogging is not just writing, it's sharing your voice with the world."
            </h1>
            <p className="mt-6 text-gray-700 text-2xl italic">
              Explore, Learn, and Inspire.
            </p>
            <Link to="/all">
              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Start Reading Blogs
              </button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HeroSection;
