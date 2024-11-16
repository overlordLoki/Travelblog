import BlogCard from '../components/BlogCard';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <BlogCard 
          title="Explore Paris"
          image="/path/to/image.jpg"
          description="Discover the beauty of the Eiffel Tower and more!"
        />
        <BlogCard 
          title="Visit Tokyo"
          image="/path/to/tokyo.jpg"
          description="Experience the vibrant culture of Japan's capital city."
        />
        <BlogCard 
          title="Discover New York"
          image="/path/to/ny.jpg"
          description="The city that never sleeps awaits you!"
        />
      </div>
    </div>
  );
};

export default Home;
