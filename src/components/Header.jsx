import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute('id'));
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

        sections.forEach(s => observer.observe(s));
        return () => sections.forEach(s => observer.unobserve(s));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top transition ${isScrolled ? 'bg-dark shadow' : 'bg-transparent'}`} style={{ backdropFilter: isScrolled ? 'none' : 'blur(10px)' }}>
            <div className="container">
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-3">
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'home' ? 'active text-white fw-bold' : ''}`} href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'about' ? 'active text-white fw-bold' : ''}`} href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About me</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'portfolio' ? 'active text-white fw-bold' : ''}`} href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'services' ? 'active text-white fw-bold' : ''}`} href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'experience' ? 'active text-white fw-bold' : ''}`} href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>Experience</a>
                        </li>
                    </ul>
                    <a href="#contact" className="btn btn-primary px-4 rounded-pill" onClick={(e) => handleLinkClick(e, '#contact')}>Hire me</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
