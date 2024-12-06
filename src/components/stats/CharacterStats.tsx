import React from 'react';
import { motion } from 'framer-motion';
import { CharacterVisual } from './CharacterVisual';
import { StatBars } from './StatBars';
import { PersonalAttributes } from './PersonalAttributes';
import { Brain, Lightbulb, Battery, Zap } from 'lucide-react';

export function CharacterStats() {
  const stats = [
    { name: 'Intelligence', value: 85, icon: Brain, color: 'blue' },
    { name: 'Creativity', value: 90, icon: Lightbulb, color: 'yellow' },
    { name: 'Endurance', value: 75, icon: Battery, color: 'green' },
    { name: 'Agility', value: 80, icon: Zap, color: 'purple' },
  ];

  return (
    <section className="game-section min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="pixel-borders p-6">
            <CharacterVisual />
          </div>
          
          <div className="space-y-8">
            <div className="pixel-borders p-6">
              <h2 className="text-2xl font-bold mb-4 terminal-text">Character Information</h2>
              <div className="space-y-2">
                <p>Age: 25</p>
                <p>Country: France</p>
                <p>Experience Level: 3 years</p>
              </div>
            </div>

            <div className="pixel-borders p-6">
              <h2 className="text-2xl font-bold mb-4 terminal-text">Stats</h2>
              <StatBars stats={stats} />
            </div>

            <PersonalAttributes />
          </div>
        </motion.div>
      </div>
    </section>
  );
}