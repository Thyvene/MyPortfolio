import React from 'react';
import { ArrowRight, Code2, Gamepad } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              C++ Game Designer
              <span className="block text-blue-600">MMORPG Framework Developer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specializing in building robust MMORPG frameworks and game systems using C++ and modern development practices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600&h=600"
              alt="Game Development Setup"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}