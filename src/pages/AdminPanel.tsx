import React, { useState } from "react";
import mockBlogs from '../data/mockBlogs';

const AdminPanel: React.FC = () => {
  const [blogs, setBlogs] = useState(mockBlogs);

  const handleDelete = (id: number) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>

      {/* Manage Existing Blogs */}
      <h2 className="text-2xl font-semibold mb-2">Manage Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border rounded shadow flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-sm">{blog.description}</p>
            </div>
            <button
              onClick={() => handleDelete(blog.id)}
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
