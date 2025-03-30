import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="flex-grow relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600"
          alt="People communicating in sign language"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to SignForDeaf
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Transform sign language into speech and text instantly with our AI-powered translation system.
              Breaking communication barriers, one gesture at a time.
            </p>
            <Link 
              to="/signup" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;