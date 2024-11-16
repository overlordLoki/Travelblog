interface BlogCardProps {
    title: string;
    image: string;
    description: string;
  }
  
  const BlogCard: React.FC<BlogCardProps> = ({ title, image, description }) => (
    <div className="p-4 border rounded-lg shadow-lg">
      <img src={image} alt={title} className="rounded-md" />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
  
  export default BlogCard;
  