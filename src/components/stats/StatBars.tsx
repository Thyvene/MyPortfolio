import React from 'react';
import { motion } from 'framer-motion';

export function StatBars({ stats }) {
  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={stat.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              <span>{stat.name}</span>
            </div>
            <span>{stat.value}%</span>
          </div>
          <motion.div 
            className="h-2 bg-gray-700 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <motion.div
              className={`h-full bg-${stat.color}-500`}
              initial={{ width: 0 }}
              animate={{ width: `${stat.value}%` }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.8 }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}