import React from 'react';
import { Github, Linkedin, Mail, Gamepad } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Gamepad className="mr-2" size={24} />
              <h3 className="text-2xl font-bold">Thyvene's Portfolio</h3>
            </div>
            <p className="text-gray-400">Crafting immersive MMORPG experiences</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Thyvene" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:karim09197270@hotmail.fr" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thyvene's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}