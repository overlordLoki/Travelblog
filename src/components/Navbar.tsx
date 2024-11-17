import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Logo, Website Title, and Navigation Links */}
      <div className="flex items-center px-4 py-1">
        {/* Website Title on the left */}
        <h1 className="text-xl flex-1">Out & About with Leesa</h1>

        {/* Navigation Links in the center */}
        <nav className="flex justify-center flex-1">
          {[
            { path: '/', label: 'Home' },
            { path: '/blogs', label: 'Travel' },
            { path: '/photos', label: 'Photos' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-4 text-[#252525] ${
                  isActive ? 'font-bold' : 'font-normal'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Logo on the right */}
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"  // Updated the path to logo.png
            alt="Logo"
            className="h-10 w-11"
          />
        </div>
      </div>

      {/* Line */}
      <div className="border-t border-gray-300"></div>
    </header>
  );
};

export default Navbar;
