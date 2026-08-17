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
            id: 3, category: 'web', tag: 'WEB APP', title: 'Versgen',
            description: 'An innovative web platform where expressive and poetic shayari videos are generated automatically with beautiful typographic animations.',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80', reverse: false
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
                <h2 className="section-title reveal">PORTFOLIO</h2>
                
                <div className="d-flex justify-content-center gap-3 mb-5 reveal">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>All</button>
                    <button className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => handleFilterChange('mobile')}>Mobile App</button>
                    <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => handleFilterChange('web')}>Web App</button>
                    <button className={`filter-btn ${filter === 'uiux' ? 'active' : ''}`} onClick={() => handleFilterChange('uiux')}>UI/UX Design</button>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {currentProjects.map((project, i) => (
                        <div key={project.id} className="col" style={{ transitionDelay: `${(i % 3) * 0.1}s`, animation: 'fadeIn 0.5s ease-in-out' }}>
                            <div className="card h-100 bg-transparent border-0">
                                <div className="card-body p-4 rounded-4 d-flex flex-column h-100" style={{ background: 'var(--bs-secondary)', border: '1px solid rgba(42, 182, 255, 0.2)' }}>
                                    <div className="p-1 rounded-3 mb-4" style={{ background: 'linear-gradient(135deg, var(--bs-info), transparent)' }}>
                                        <img src={project.image} alt={project.title} className="img-fluid rounded-3 w-100" style={{ height: '220px', objectFit: 'cover' }} />
                                    </div>
                                    <span className="text-info fw-semibold mb-2 d-block small" style={{ letterSpacing: '1px' }}>{project.tag}</span>
                                    <h3 className="h4 fw-bold mb-3">{project.title}</h3>
                                    <p className="text-secondary mb-4 flex-grow-1">{project.description}</p>
                                    <a href="#" className="text-white text-decoration-none fw-bold mt-auto d-inline-flex align-items-center gap-2">
                                        Read more <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
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
