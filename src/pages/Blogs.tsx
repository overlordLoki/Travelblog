// Blogs.tsx

import React from 'react';
import BlogCard from '../components/BlogCard';
import mockBlogs from '../data/mockBlogs'; // Import mock data

const Blogs: React.FC = () => {
  // Sort blogs by ID in descending order (from highest to lowest)
  const sortedBlogs = [...mockBlogs].sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Map over the sorted blogs and render BlogCard for each */}
      {sortedBlogs.map(blog => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.image}
          description={blog.description}
          date={blog.date}
          id={blog.id}
        />
      ))}
    </div>
  );
};

export default Blogs;
