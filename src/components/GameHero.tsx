import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Terminal, Code2 } from 'lucide-react';

export function GameHero() {
  return (
    <section className="game-section min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <Gamepad className="w-16 h-16 text-[var(--primary)]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 terminal-text">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              C++ Game Designer
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <Code2 className="w-6 h-6 text-[var(--primary)]" />
            <span className="text-xl">MMORPG Framework Developer</span>
            <Terminal className="w-6 h-6 text-[var(--primary)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center space-x-4"
          >
            <button className="game-button">View Projects</button>
            <button className="game-button">Start Quest</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}