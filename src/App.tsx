import React from 'react';
import { GameNavigation } from './components/GameNavigation';
import { GameHero } from './components/GameHero';
import { CharacterStats } from './components/stats/CharacterStats';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/game-theme.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <GameNavigation />
      <main>
        <GameHero />
        <CharacterStats />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;