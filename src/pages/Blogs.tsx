import React from 'react';
import BlogCard from '../components/BlogCard';
import mockBlogs from '../data/mockBlogs'; // Import the shared data

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockBlogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
