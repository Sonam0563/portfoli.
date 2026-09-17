import { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const projects = [
        {
            id: 1, category: 'mobile', tag: 'MOBILE APP', title: 'Attendance App',
            description: 'A smart mobile application for tracking and managing attendance efficiently with geofencing and real-time reporting features.',
            image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80', reverse: false
        },
        {
            id: 2, category: 'web', tag: 'WEB APP', title: 'DSCP Portal',
            description: 'A highly secure defence communication portal designed for encrypted, reliable, and real-time secure messaging and data exchange.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', reverse: true
        },
        {
            id: 3, category: 'live', tag: 'LIVE PROJECT', title: 'Versgen',
            description: 'An innovative web platform where expressive and poetic shayari videos are generated automatically with beautiful typographic animations.',
            link: 'https://versgen.tradefluenzaa.cloud/',
            image: '/versgen.jpeg', reverse: false
        },
        {
            id: 4, category: 'web', tag: 'WEB APP', title: 'Smart Diet',
            description: 'An intelligent nutrition assistant that suggests what to eat, tracks dietary habits, and provides healthy meal recommendations based on personal goals.',
            image: '/smart_diet_ui.png', reverse: true
        },
        {
            id: 5, category: 'uiux', tag: 'UI/UX DESIGN', title: 'Finance Dashboard UI',
            description: 'A sleek, dark-mode inspired financial dashboard designed to provide a comprehensive and intuitive overview of user spending and investments.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', reverse: false
        },
        {
            id: 6, category: 'uiux', tag: 'UI/UX DESIGN', title: 'Healthcare Booking UX',
            description: 'A seamless, user-centric booking flow designed for a healthcare provider application, reducing cognitive load and simplifying appointment scheduling.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', reverse: true
        },
        {
            id: 7, category: 'uiux', tag: 'UI/UX DESIGN', title: 'Landing Page Design',
            description: 'A clean, minimalist and highly convertible landing page designed for a SaaS product, focusing on clear typography and engaging micro-interactions.',
            image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80', reverse: false
        },
        {
            id: 8, category: 'live', tag: 'LIVE PROJECT', title: 'Dr. Sunit Urocare',
            description: 'A professional and modern website for a medical doctor (Urologist).',
            link: 'http://drsuniturocare.com/',
            image: '/dr_sunit.jpeg', reverse: false
        },
        {
            id: 9, category: 'live', tag: 'LIVE PROJECT', title: 'Dr. Shobhika',
            description: 'A dedicated medical portfolio and clinic website for a female doctor.',
            link: 'https://drshobhika.weblytechnolab.com/',
            image: '/dr_shobika.jpg', reverse: true
        },
        {
            id: 10, category: 'live', tag: 'LIVE PROJECT', title: 'Kamaliya',
            description: 'A high-converting landing page for an e-commerce shop.',
            link: 'https://kamalia.veronelab.com/',
            image: '/kamaliya.webp', reverse: false
        },
        {
            id: 11, category: 'live', tag: 'LIVE PROJECT', title: 'Tradefluenza',
            description: 'A dynamic and modern trading platform website,comprehensive trading platform with social networking, events, and detailed comparisons of prop firms and brokers.',
            link: 'https://tradefluenza.com/',
            image: '/tradefluenza.jpg', reverse: true
        }
    ];

    // Filter projects
    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    // Pagination logic
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Reset to page 1 when filter changes
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    return (
        <section id="portfolio" className="py-5">
            <div className="container py-5">
                <h2 className="section-title reveal text-center mb-5 text-white">PORTFOLIO</h2>

                <div className="d-flex justify-content-center flex-wrap gap-3 mb-5 reveal">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>All</button>
                    <button className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => handleFilterChange('mobile')}>Mobile App</button>
                    <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => handleFilterChange('web')}>Web App</button>
                    <button className={`filter-btn ${filter === 'uiux' ? 'active' : ''}`} onClick={() => handleFilterChange('uiux')}>UI/UX Design</button>
                    <button className={`filter-btn ${filter === 'live' ? 'active' : ''}`} onClick={() => handleFilterChange('live')}>Live Project</button>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 portfolio-carousel-mobile">
                    {currentProjects.map((project, i) => (
                        <div key={project.id} className="col" style={{ transitionDelay: `${(i % 3) * 0.1}s`, animation: 'fadeIn 0.5s ease-in-out' }}>
                            <div className="portfolio-card h-100 d-flex flex-column text-start">
                                <div className="portfolio-img-wrap position-relative">
                                    <img src={project.image} alt={project.title} className="portfolio-img img-fluid w-100" style={{ height: '240px', objectFit: 'contain', backgroundColor: 'var(--bs-dark)' }} />
                                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill fw-bold small shadow-sm" style={{ background: 'rgba(11, 15, 25, 0.85)', color: 'var(--bs-info)', border: '1px solid rgba(42,182,255,0.3)', backdropFilter: 'blur(5px)' }}>
                                        {project.tag}
                                    </div>
                                </div>
                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <h3 className="h4 fw-bold mb-3 text-white">{project.title}</h3>
                                    <p className="text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>{project.description}</p>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link text-white text-decoration-none fw-bold mt-auto d-inline-flex align-items-center gap-2">
                                            Visit Live Site <i className="fas fa-arrow-right"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="d-none d-md-flex justify-content-center align-items-center gap-3 mt-5">
                        <button
                            className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <div className="text-secondary fw-bold">
                            Page {currentPage} of {totalPages}
                        </div>

                        <button
                            className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
