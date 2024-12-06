import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Menu, X } from 'lucide-react';

export function GameNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Character Stats', href: '#about' },
    { name: 'Quest Log', href: '#projects' },
    { name: 'Skill Tree', href: '#skills' },
    { name: 'Message Board', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)] bg-opacity-95 pixel-borders">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Gamepad className="w-8 h-8 text-[var(--primary)]" />
            <span className="text-xl font-bold">Thyvene's GameDev Quest</span>
          </motion.a>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden text-[var(--text)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}