import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate(); // Add this line

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://st2.depositphotos.com/1420973/6409/i/450/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg")' }}>
           
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Page Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-16 text-center">
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold mb-4 text-white">About Our Blog Boost</h1>
                        <p className="text-lg text-gray-200">A place to share stories, ideas, and information with the world.</p>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-16 text-center">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto">Our blog is dedicated to providing insightful content across various topics. We aim to engage readers with valuable, well-researched, and relatable articles on technology, lifestyle, health, and more. Whether you're looking for industry trends, personal stories, or expert tips, we have something for everyone.</p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                            <p className="text-gray-700">Our mission is to create a platform that empowers individuals to express their thoughts, share their knowledge, and contribute to meaningful conversations online.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                            <p className="text-gray-700">To become a leading online destination for diverse content, fostering a community of informed and engaged readers who are passionate about learning and sharing.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-16 text-center bg-blue-200">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
                        <p className="text-lg text-gray-700 mb-6">Are you a writer? Do you have a story or idea to share with the world? We welcome guest contributors to submit their posts and become part of our growing blog community.</p>
                        <Link to="/addblog" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">Submit Your Post</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
