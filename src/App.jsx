import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      {/* Global WhatsApp Floating Button */}
      <div className="position-fixed d-flex flex-column align-items-center" style={{ bottom: '30px', right: '30px', zIndex: 9999 }}>
          <div className="bg-dark text-white small fw-bold px-3 py-1 rounded-pill mb-2 shadow" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>Talk to us?</div>
          <a href="https://wa.me/919984971256" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center shadow-lg text-white rounded-circle text-decoration-none hover-scale" style={{ width: '65px', height: '65px', background: '#25D366' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '2rem' }}></i>
          </a>
      </div>
    </>
  );
}

export default App;
