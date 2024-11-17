import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Logo and Website Title */}
      <div className="flex justify-between items-center px-4 py-1">
        {/* Logo on the far left */}
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"  // Updated the path to logo.png
            alt="Logo"
            className="h-10 w-11"
          />
        </div>

        {/* Website Title on the far right */}
        <h1 className="text-2xl text-gray-800">Out & About with Leesa</h1>
      </div>

      {/* Line */}
      <div className="border-t border-gray-300"></div>

      {/* Navigation Links */}
      <nav className="flex justify-between px-4 py-2">
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/blogs', label: 'Travel' },
          { path: '/photos', label: 'Photos' },
          { path: '/something', label: 'Something' },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-[#252525] px-2 ${
                isActive ? 'font-bold' : 'font-normal'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
