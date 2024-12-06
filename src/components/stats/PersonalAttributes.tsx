import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Swords, Sparkles, Scroll } from 'lucide-react';

export function PersonalAttributes() {
  const attributes = [
    {
      icon: Compass,
      label: 'Alignment',
      value: 'Chaotic Good',
      description: 'Creative but always aligned with values'
    },
    {
      icon: Swords,
      label: 'Class',
      value: 'Developer/Designer',
      description: 'Specialization in IT'
    },
    {
      icon: Sparkles,
      label: 'Special Skill',
      value: 'System Optimization',
      description: 'Mastery of complex systems'
    },
    {
      icon: Scroll,
      label: 'Current Quest',
      value: 'Emulation Project',
      description: 'Innovative system development'
    }
  ];

  return (
    <div className="pixel-borders p-6">
      <h2 className="text-2xl font-bold mb-4 terminal-text">Personal Attributes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {attributes.map((attr, index) => (
          <motion.div
            key={attr.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3 mb-2">
              <attr.icon className="w-6 h-6 text-[var(--primary)]" />
              <h3 className="font-bold">{attr.label}</h3>
            </div>
            <p className="text-lg font-semibold text-[var(--primary)]">{attr.value}</p>
            <p className="text-sm text-gray-400">{attr.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}