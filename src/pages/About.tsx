import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to TravelBlog! We are passionate about exploring the world and sharing our adventures with you. Our mission is to inspire you to discover new destinations, cultures, and experiences. Whether you're looking for tips on planning your next trip or simply enjoy reading about exciting journeys, we've got you covered.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Follow us as we share our stories, tips, and travel guides to help you create unforgettable memories.
      </p>
    </div>
  );
};

export default About;
