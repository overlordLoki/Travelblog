// BlogCard.tsx

interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  date: string;
  id: number; // Add ID prop to pass the blog ID
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, description, date, id }) => {
  // Format the ID with leading zeros, ensuring it is 3 digits long
  const formattedId = String(id).padStart(3, '0');

  return (
    <div className="p-4 border shadow-lg relative">
      {/* Date and Blog Number above the image */}
      <div className="flex justify-between items-center text-xs mb-2">
        <span className="text-gray-500">{date}</span>
        <span className="text-gray-500">#{formattedId}</span>
      </div>

      {/* Image with fixed width and height */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Title */}
      <h3 className="text-xl font-bold mt-2">{title}</h3>

      {/* Description */}
      <p className="mt-1">{description}</p>
    </div>
  );
};

export default BlogCard;
