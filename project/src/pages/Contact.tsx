import React from 'react';
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <main className="flex-grow container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600">Any question or remarks? Just write us a message!</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Contact Information */}
        <div className="bg-blue-600 rounded-3xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-12">Contact Information</h2>
          
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Mail className="h-6 w-6" />
              <span>hello@signfordeaf.com</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-auto">
            <img
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600"
              alt="Mobile phone showing sign language app"
              className="rounded-2xl w-full h-64 object-cover"
            />
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-blue-500 rounded-full hover:bg-blue-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <div>
              {/* Placeholder for reCAPTCHA */}
              <div className="mb-6">
                <div className="g-recaptcha border rounded w-fit"></div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;