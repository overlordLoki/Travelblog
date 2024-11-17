import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className="bg-gray-100 py-6 px-4 text-center"> {/* Reduced py-10 to py-6 */}
        {/* Image outside the container to stretch, with rounded corners */}
        <div className="relative">
          <img 
            src="/src/assets/ab2.jpg" 
            alt="Introduction" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="container mx-auto mt-4">
          <h1 className="text-4xl mt-6">Welcome to Out & About with Leesa</h1>
          <p className="mt-4">
            Discover amazing destinations, tips, and stories from around the globe. 
            Your next adventure awaits!
          </p>
          <a 
            href="/about" 
            className="mt-4 inline-block bg-gray-800 text-white py-2 px-3 hover:bg-gray-700"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>01/01/2024</span>
            <span className="text-blue-600 font-semibold">New Post</span>
            <span>#001</span>
          </div>
          <div className="mt-4 p-6 border shadow-lg bg-white">
            <h2 className="text-2xl font-bold">A Journey to the Alps</h2>
            <img 
              src="/src/assets/blog-image.jpg" 
              alt="Blog Thumbnail" 
              className="w-full h-48 object-cover mt-4"
            />
            <p className="mt-4">
              Discover the stunning beauty of the Alps in our latest blog post. From serene landscapes to thrilling adventures...
            </p>
            <a 
              href="/blogs" 
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
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
