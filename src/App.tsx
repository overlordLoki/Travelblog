import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About';

const App: React.FC = () => (
  <Router>
    {/* Flex container to ensure layout structure */}
    <div className="flex flex-col min-h-screen items-center">
      {/* Condensed Content Wrapper with global text size for non-header text and dark grey color */}
      <div className="w-full max-w-4xl px-4 text-md text-gray-900"> {/* Dark grey text color */}
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
