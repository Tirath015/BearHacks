import React, { useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

function SignLanguage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play audio when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio autoplay failed:", error);
      });
    }
  }, []);

  return (
    <main className="flex-grow container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">
          Understanding Sign Language
        </h1>
        
        {/* Audio Player */}
        <div className="mb-12 bg-blue-50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-blue-600 text-2xl">🎧</span>
            <h2 className="text-2xl font-semibold text-blue-900">Listen to Introduction</h2>
          </div>
          
          <audio ref={audioRef} controls className="w-full mb-4 h-12">
            <source src="https://www2.cs.uic.edu/~i101/SoundFiles/introduction-to-sign-language.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          <div className="flex items-start gap-2 text-blue-600">
            <Info className="w-5 h-5 mt-0.5" />
            <p className="text-sm">
              This audio introduction provides a comprehensive overview of sign language, including its definition, 
              various types (ASL, BSL, Auslan, ISL, CSL), and its significance in deaf communication.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              What is Sign Language?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sign language is a sophisticated visual form of communication that uses hand gestures, facial expressions, 
              and body language to convey meaning. Unlike spoken languages, sign languages are three-dimensional, 
              utilizing space and movement to create grammar and meaning. Each sign language has its own unique 
              structure, grammar rules, and cultural context, making it as rich and complex as any spoken language.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Types of Sign Language
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">American Sign Language (ASL)</h3>
                <p className="text-gray-700">The primary sign language used in the United States and parts of Canada. 
                ASL has its own grammar structure distinct from English and is used by hundreds of thousands of people.</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">British Sign Language (BSL)</h3>
                <p className="text-gray-700">The sign language used in the United Kingdom, with its own vocabulary and 
                syntax different from both ASL and English.</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Australian Sign Language (Auslan)</h3>
                <p className="text-gray-700">The native sign language of the Australian deaf community, developed from 
                British Sign Language but evolved into its own distinct language.</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Indian Sign Language (ISL)</h3>
                <p className="text-gray-700">Used by the deaf community in India, ISL reflects the rich linguistic and 
                cultural diversity of the Indian subcontinent.</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Chinese Sign Language (CSL)</h3>
                <p className="text-gray-700">The standard sign language used in mainland China, with regional variations 
                and distinct grammatical features.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              The Importance of Sign Language
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sign language is not just a tool for communication; it's a fundamental human right that ensures deaf and 
              hard of hearing individuals can fully participate in society. It provides a means of expression, education, 
              and connection within both deaf and hearing communities. Learning sign language promotes inclusivity and 
              breaks down barriers between deaf and hearing individuals, creating a more accessible and understanding world.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default SignLanguage;