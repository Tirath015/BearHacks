import React from 'react';

function Solutions() {
  return (
    <main className="flex-grow container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
        Our Solutions
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Real-time Sign Language Translation */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <a 
            href="https://youtu.be/GtCh8cw5P4Y?si=cQeZdintvXR9CNbh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition group"
          >
            <div className="aspect-video relative">
              <img
                src="https://img.youtube.com/vi/GtCh8cw5P4Y/maxresdefault.jpg"
                alt="Sign Language Translation Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Real-time Sign Language Translation
            </h2>
            <p className="text-gray-700">
              Watch our AI system translate sign language to text and speech in real-time, 
              making communication seamless and immediate. Perfect for everyday conversations 
              and professional settings.
            </p>
          </div>
        </div>

        {/* Text-to-Sign Language Conversion */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <a 
            href="https://youtu.be/ANXWjvh5__8?si=nstyF8GENyRB07YC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition group"
          >
            <div className="aspect-video relative">
              <img
                src="https://img.youtube.com/vi/ANXWjvh5__8/maxresdefault.jpg"
                alt="Text to Sign Language Conversion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Text-to-Sign Language Conversion
            </h2>
            <p className="text-gray-700">
              See how our technology converts written text into accurate sign language 
              representations, helping bridge the communication gap between hearing and 
              deaf communities.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Multi-language Support</h3>
          <p className="text-gray-700">
            Our solution supports multiple sign languages including ASL, BSL, and more, making it globally accessible.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Mobile Integration</h3>
          <p className="text-gray-700">
            Access our translation services on any mobile device, ensuring communication support wherever you go.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-lg hover:transform hover:scale-[1.02]">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Enterprise Solutions</h3>
          <p className="text-gray-700">
            Custom solutions for businesses and organizations to create more inclusive environments.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Solutions;