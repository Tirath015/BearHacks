import React, { useState } from 'react';

function About() {
  const [activeTab, setActiveTab] = useState('about');

  const content = {
    about: {
      title: 'About Us',
      content: 'We are a pioneering company in the field of sign language translation, leveraging cutting-edge AI technology to bridge communication gaps between the deaf and hearing communities. Our innovative solutions are designed to make communication more accessible and inclusive for everyone.'
    },
    mission: {
      title: 'Our Mission',
      content: 'Our mission is to break down communication barriers and create a more inclusive world where everyone can communicate freely, regardless of their hearing ability. We strive to develop innovative solutions that empower both deaf and hearing individuals to connect and understand each other better.'
    },
    vision: {
      title: 'Our Vision',
      content: 'We envision a world where communication knows no boundaries, where technology serves as a bridge between different communities, and where every person has equal access to information and interaction. Our goal is to be at the forefront of this transformation, leading the way in accessible communication technology.'
    }
  };

  return (
    <main 
      className="flex-grow min-h-screen bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1499159058454-75067059248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto py-16 px-4">
        {/* Top Navigation Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-xl'
                  : 'bg-white text-gray-800 hover:bg-blue-50'
              }`}
            >
              {content[tab].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl p-8 space-y-8">
            {/* Main content with different background */}
            <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
              <p className="text-xl text-gray-800 leading-relaxed">
                {content[activeTab].content}
              </p>
            </div>
            
            {/* Additional Content Based on Tab */}
            {activeTab === 'about' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg transition-all duration-300 hover:bg-green-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
                  <p className="text-gray-700">With years of experience in AI and machine learning, our team brings cutting-edge technology to sign language translation.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
                  <p className="text-gray-700">We've helped thousands of people communicate more effectively, breaking down barriers in schools, workplaces, and communities.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'mission' && (
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg transition-all duration-300 hover:bg-amber-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Develop accurate and real-time translation solutions</li>
                    <li>Make technology accessible to all communities</li>
                    <li>Foster inclusive communication environments</li>
                    <li>Support education and workplace integration</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-lg transition-all duration-300 hover:bg-teal-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
                  <p className="text-gray-700">Expanding our technology to support multiple sign languages and creating a global network of connected communities.</p>
                </div>
                <div className="bg-rose-50 p-6 rounded-lg transition-all duration-300 hover:bg-rose-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
                  <p className="text-gray-700">Continuously improving our AI algorithms and developing new tools to enhance communication accessibility.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;