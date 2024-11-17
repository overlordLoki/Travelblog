import React from 'react';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaCopyright } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      {/* Separator Line */}
      <hr className="border-t border-gray-300 my-5" /> {/* Removed margin/padding between line and titles */}

      <footer className="bg-white pt-0 pb-8"> {/* Removed padding-top and kept padding-bottom */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0 flex-1">
            <h2 className="text-2xl font-bold">Thanks for visiting!</h2> {/* Increased font size */}
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  <FaInstagram className="inline-block mr-2" /> Instagram: @withleesa
                </a>
              </li>
              <li>
                <a href="mailto:contact@travelblog.com" className="hover:underline">
                  <FaEnvelope className="inline-block mr-2" /> Email: withleesa@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <FaMapMarkerAlt className="inline-block mr-2" /> Location: Wellington, New Zealand
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <FaCopyright className="inline-block mr-2" /> 2024 Out & About with Leesa
                </a>
              </li>
            </ul>
          </div>

          {/* Center Section with Updated Image */}
          <div className="relative flex-shrink-0 flex-grow-0 w-32 h-32 md:w-40 md:h-40">
            <img 
              src="src/assets/Mum.jpg"  // Updated image source
              alt="Logo"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full w-full h-full object-cover"
            />
          </div>

          {/* Right Section (Newsletter Form) */}
          <div className="text-center md:text-right w-full md:w-1/3 flex-1 ml-4 md:ml-8">
            <h2 className="text-2xl font-bold">Newsletter</h2> {/* Increased font size */}
            <p className="mt-2 text-sm">Sign up for new posts from my travels!</p>
            <form className="mt-4 space-y-4">
              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-2 py-1 mb-0 border text-sm"
              />
              {/* Name Input and Sign Up Button side by side */}
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-1/2 px-2 py-1 mb-0 border text-sm"
                />
                <button 
                  type="submit" 
                  className="w-1/2 bg-gray-800 text-white px-2 py-1 hover:bg-gray-700 text-xs"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
