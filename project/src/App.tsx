import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hand as Hands } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import SignLanguage from './pages/SignLanguage';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Hands className="h-8 w-8" />
              <span className="text-xl font-bold">SignForDeaf</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="hover:text-blue-200 transition">About</Link>
              <Link to="/solutions" className="hover:text-blue-200 transition">Solutions</Link>
              <Link to="/sign-language" className="hover:text-blue-200 transition">Sign Language</Link>
              <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
              <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/sign-language" element={<SignLanguage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        {/* Footer - Reduced height */}
        <footer className="bg-blue-900 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <p className="text-blue-200 text-sm">
                  We're dedicated to making communication accessible for everyone through
                  innovative AI-powered sign language translation technology.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1">
                  <li><Link to="/" className="text-blue-200 hover:text-white transition text-sm">Home</Link></li>
                  <li><Link to="/about" className="text-blue-200 hover:text-white transition text-sm">About</Link></li>
                  <li><Link to="/solutions" className="text-blue-200 hover:text-white transition text-sm">Solutions</Link></li>
                  <li><Link to="/contact" className="text-blue-200 hover:text-white transition text-sm">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-blue-200 text-sm">
                  Email: contact@signfordeaf.com<br />
                  Phone: (555) 123-4567<br />
                  Address: 123 AI Street, Tech City, TC 12345
                </p>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-4 pt-4 text-center text-blue-200 text-sm">
              <p>&copy; 2024 SignForDeaf. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;