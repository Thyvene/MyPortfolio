import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'MMORPG Framework',
    description: 'A scalable and modular C++ framework for building MMORPGs with advanced networking capabilities',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
    tags: ['C++', 'Network Programming', 'Game Architecture', 'Visual Studio']
  },
  {
    title: 'Game Server Infrastructure',
    description: 'Highly available game server architecture with load balancing and automatic scaling',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    tags: ['C++', 'DevOps', 'Drone CI', 'Networking', 'MySQL DB']
  },
  {
    title: 'Combat / Spells System Development',
    description: 'Real-time combat system with skill-based mechanics and network synchronization',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600',
    tags: ['C++', 'Game Design', 'Physics']
  },
  {
    title: 'Infinite Runner',
    description: 'Infinite Runner is an endless runner game made with Unity engine, using a procedural algorithm to generate the map and put obstacles on it!',
    image: 'https://github.com/Thyvene/InfiniteRunner/blob/master/Assets/Sprites/Player/hero0_big.png',
    tags: ['C#', 'Game Design', 'Physics', 'Unity', 'Procedural Algorithm'],
    github: 'https://github.com/Thyvene/InfiniteRunner'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
