import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ProjectSection from './components/ProjectSection';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';
import './App.css';

// Subtle reveal-on-scroll: adds a class when elements enter the viewport.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal--in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="section" id="work">
          <div className="container">
            <SectionHeader
              label="Selected Work"
              title="Selected Work"
              sub="A few systems I've built across AI, software development and intelligent applications."
            />
          </div>
          {projects.map((p) => (
            <ProjectSection key={p.id} project={p} />
          ))}
        </section>

        <CurrentlyBuilding />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
