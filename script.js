document.addEventListener('DOMContentLoaded', () => {

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('open');
        });

        // Close menu when a nav link is clicked
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navbar.classList.remove('open');
            });
        });
    }

    // Scroll Reveal — simple fade up on scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    // Apply reveal to key elements
    const revealSelectors = [
        '.hero-content',
        '.about-image', '.about-content',
        '.portfolio-section > h2', '.portfolio-filters',
        '.services-section > h2',
        '.experience-section > h2',
        '.contact-info', '.contact-form',
        '.view-all-container'
    ];

    revealSelectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) { el.classList.add('reveal'); revealObserver.observe(el); }
    });

    // Project cards with stagger
    document.querySelectorAll('.project-card').forEach((card, i) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${i * 0.1}s`;
        revealObserver.observe(card);
    });

    // Service cards with stagger
    document.querySelectorAll('.service-card').forEach((card, i) => {
        card.classList.add('reveal', `stagger-${i + 1}`);
        revealObserver.observe(card);
    });

    // Tech items with stagger
    document.querySelectorAll('.tech-item').forEach((item, i) => {
        item.classList.add('reveal', `stagger-${i + 1}`);
        revealObserver.observe(item);
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    }, { passive: true });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const el = document.querySelector(targetId);
            if (el) {
                window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                document.querySelectorAll('.navbar a').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Active nav tracking on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
    sections.forEach(s => navObserver.observe(s));

    // Form submission to Google Sheets
    const form = document.querySelector('#contact-form');
    const submitBtn = document.querySelector('#submit-btn');

    // REPLACE THIS URL with your deployed Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwrf9YAQXLl_gw55wjSnYuEyCWDZU5FsBCapuguPfDAew6T-n4JUGUclsZXgGNZuht-/exec';

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            // Change button text to show loading state
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
                .then(response => {
                    // With no-cors, we don't get readable response data, but if it didn't throw, we assume success.
                    alert('Message sent successfully!');
                    form.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('Oops! Something went wrong. Please try again.');
                })
                .finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
    const projectCards = document.querySelectorAll('.portfolio-grid .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});