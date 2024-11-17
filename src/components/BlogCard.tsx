interface BlogCardProps {
  title: string;
  image: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, description }) => (
  <div className="p-4 border rounded-lg shadow-lg">
    {/* Image with fixed width and height */}
    <img
      src={image}
      alt={title}
      className="w-full h-60 object-cover rounded-md" // Fixed height with object-cover for consistency
    />
    <h3 className="text-xl font-bold mt-2">{title}</h3>
    <p className="mt-1 text-gray-600">{description}</p>
  </div>
);

export default BlogCard;
