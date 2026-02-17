import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import CodeBackground from './components/CodeBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-purple-50/30">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <CodeBackground />
          <Hero />
        </section>
        
        <section id="services" className="py-24 bg-purple-100/20 relative">
          <Services />
        </section>

        <section id="location" className="py-24 bg-white relative">
          <CodeBackground />
          <Location />
        </section>
        
        <section id="contact" className="py-24 bg-purple-100/10 relative">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;