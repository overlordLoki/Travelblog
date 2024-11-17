import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      {/* Title */}
      <h1 className="text-5xl text-center mb-1">About Me</h1>

      {/* Text Box Above the Image */}
      <div className="w-full px-4 py-4 mb-4">
        <p className="text-center">
          Hi, I’m Lisa, a solo traveler from New Zealand with a love for exploring the world through art, culture, and photography. Living overseas sparked my passion for travel, and I’ve since journeyed across the Middle East, Europe, the UK, and Asia, traveling in luxury while immersing myself in new experiences. Through this blog, I hope to inspire others—especially solo and women travelers—to embrace the adventure of traveling alone, offering tips and encouragement to make it possible. With photography as a key part of my journey, I aim to capture and share the beauty of the world, sparking wanderlust in fellow explorers and photography enthusiasts.
        </p>
      </div>

      {/* Image Container with Fixed 16:9 Aspect Ratio */}
      <div className="relative w-full pb-[56.25%] mb-4">
        <img
          src="/src/assets/4.jpg" // Path to the image
          alt="Travel Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
