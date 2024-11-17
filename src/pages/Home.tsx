import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Title Section */}
      <section className="container mx-auto px-4 py-4">
        <h1 className="text-5xl text-center mb-1">Welcome!</h1>
        
        {/* Text Box Above the Image */}
        <div className="w-full px-4 py-4 mb-4">
          <p className="text-center">
            Welcome to Out & About with Leesa—a travel blog where you can explore amazing destinations, discover valuable tips, and read inspiring stories from around the world. Through photography and vivid narratives, I'll share my experiences traveling in luxury, immersing myself in art, culture, and new adventures. Your next journey awaits!
          </p>
        </div>

        {/* Image Container with Fixed 16:9 Aspect Ratio */}
        <div className="relative w-full pb-[56.25%] mb-0">
          <img 
            src="/src/assets/3.jpg" 
            alt="Introduction" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-sm">
            <span>01/01/2024</span>
            <span className="font-semibold">New Post</span>
            <span>#001</span>
          </div>
          <div className="mt-4 p-6 border shadow-lg bg-white">
            <h2 className="text-2xl font-bold">A Journey to the Alps</h2>

            {/* Image Container with Fixed 16:9 Aspect Ratio */}
            <div className="relative w-full pb-[56.25%]">
              <img 
                src="/src/assets/blog-image.jpg" 
                alt="Blog Thumbnail" 
                className="absolute top-0 left-0 w-full h-full object-cover mt-4"
              />
            </div>

            <p className="mt-4">
              Discover the stunning beauty of the Alps in our latest blog post. From serene landscapes to thrilling adventures...
            </p>
            <a 
              href="/blogs" 
              className="mt-4 inline-block font-semibold hover:underline"
            >
              See More...
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
