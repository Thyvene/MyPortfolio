import React from 'react';
import { Menu, Github, Mail, Gamepad } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center text-xl font-bold text-gray-900">
            <Gamepad className="mr-2" />
            Thyvene's Portfolio
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About me</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Thyvene" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="mailto:karim09197270@hotmail.fr" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}