import React from 'react';

const skills = {
  'Game Development': ['C++', 'Game Architecture', 'Physics Engines', 'Graphics Programming', 'DirectX'],
  'Networking': ['TCP/IP', 'UDP', 'Network Programming', 'Client-Server Architecture', 'State Synchronization'],
  'Tools & IDE': ['Visual Studio', 'Drone CI', 'Git', 'CMake', 'Perforce'],
  'Additional': ['Game Design', 'Performance Optimization', 'Multithreading', 'Design Patterns', 'Agile']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}