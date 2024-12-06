import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Shield, Coffee, Wrench } from 'lucide-react';

export function CharacterVisual() {
  const tooltipClass = "absolute hidden group-hover:block bg-gray-900 text-white p-2 rounded-lg text-sm";

  return (
    <div className="relative aspect-square">
      <img 
        src="https://images.unsplash.com/photo-1642424067007-c9be0b7c8d36?auto=format&fit=crop&q=80&w=600&h=600" 
        alt="Minecraft-style character"
        className="w-full h-full object-contain"
      />
      
      {/* Equipment tooltips */}
      <motion.div 
        className="absolute top-1/4 right-1/4 group cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <Sword className="w-8 h-8 text-blue-500" />
        <div className={`${tooltipClass} -right-32`}>C++ Development</div>
      </motion.div>

      <motion.div 
        className="absolute top-1/3 left-1/2 group cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <Shield className="w-8 h-8 text-purple-500" />
        <div className={`${tooltipClass} -left-32`}>Unreal/Unity Engine</div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 right-1/2 group cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <Wrench className="w-8 h-8 text-gray-400" />
        <div className={`${tooltipClass} -right-32`}>Visual Studio</div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-1/4 group cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <Coffee className="w-8 h-8 text-red-500" />
        <div className={`${tooltipClass} -left-48 w-44`}>Coffee: +100% Productivity / +100% Resistance to Fatigue</div>
      </motion.div>
    </div>
  );
}