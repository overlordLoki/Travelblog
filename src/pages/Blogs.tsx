import React from 'react';
import BlogCard from '../components/BlogCard';

const Blogs: React.FC = () => {
  const blogs = [
    {
      title: 'Explore Paris',
      image: '/path/to/paris.jpg',
      description: 'Discover the beauty of the Eiffel Tower and more!',
    },
    {
      title: 'Visit Tokyo',
      image: '/path/to/tokyo.jpg',
      description: 'Experience the vibrant culture of Japan\'s capital city.',
    },
    {
      title: 'Discover New York',
      image: '/path/to/ny.jpg',
      description: 'The city that never sleeps awaits you!',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
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
