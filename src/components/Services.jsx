const Services = () => {
    const services = [
        {
            icon: 'fa-code',
            title: 'Full Stack Web Development',
            description: 'End-to-end web applications using modern technologies. I build fast, scalable, and responsive web solutions tailored to your needs.',
            tags: ['React.js', 'Next.js', 'Laravel', 'Node.js', 'MySQL', 'Tailwind CSS']
        },
        {
            icon: 'fa-microchip',
            title: 'AI-Powered Applications',
            description: 'Building intelligent applications with LLMs, RAG pipelines, and semantic search to solve real-world problems and automate workflows.',
            tags: ['Python', 'LangChain', 'RAG', 'Gemini API', 'FAISS', 'Vector DB']
        },
        {
            icon: 'fa-tachometer-alt',
            title: 'REST API & Dashboard Development',
            description: 'Develop secure REST APIs, admin dashboards, and authentication systems that are scalable, reliable, and easy to maintain.',
            tags: ['REST API', 'Express.js', 'Laravel', 'JWT Auth', 'MySQL', 'Dashboard']
        }
    ];

    const processSteps = [
        { id: '01', title: 'Discuss', desc: 'Understand your requirements', icon: 'fa-comment-dots' },
        { id: '02', title: 'Plan', desc: 'Plan architecture & tech stack', icon: 'fa-lightbulb' },
        { id: '03', title: 'Build', desc: 'Develop with clean code', icon: 'fa-code' },
        { id: '04', title: 'Deploy', desc: 'Test, deploy & deliver on time', icon: 'fa-rocket' }
    ];

    const techStack = [
        { icon: 'fa-react', color: '#61DBFB' },
        { icon: 'fa-node-js', color: '#3C873A' },
        { icon: 'fa-js', color: '#F0DB4F' },
        { icon: 'fa-python', color: '#4B8BBE' },
        { icon: 'fa-laravel', color: '#FF2D20' },
        { icon: 'fa-aws', color: '#FF9900' },
        { icon: 'fa-git-alt', color: '#F1502F' },
        { icon: 'fa-html5', color: '#e34c26' },
        { icon: 'fa-css3-alt', color: '#2965f1' },
        { icon: 'fa-docker', color: '#0db7ed' }
    ];

    return (
        <section id="services" className="py-5" style={{ background: 'var(--bs-body-bg)' }}>
            <div className="container py-5">
                <div className="mb-5 reveal text-start">
                    <h2 className="display-4 fw-bold mb-3" style={{ background: 'none', WebkitTextFillColor: 'unset', color: 'var(--bs-body-color)', textShadow: 'none' }}>Services</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--bs-info)', marginBottom: '1.5rem' }}></div>
                    <p className="text-secondary fs-5">Solutions I build to help businesses and individuals transform ideas into powerful digital products.</p>
                </div>

                <div className="row g-4 mb-4">
                    {services.map((service, i) => (
                        <div key={i} className={`col-lg-4 reveal stagger-${i + 1}`}>
                            <div className="card h-100 p-4 border-0 rounded-4 shadow-sm d-flex flex-column" style={{ background: 'var(--bs-secondary)', border: '1px solid rgba(255, 255, 255, 0.05) !important' }}>
                                <div className="card-body p-0 d-flex flex-column flex-grow-1">
                                    <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: '50px', height: '50px', background: 'rgba(42, 182, 255, 0.1)' }}>
                                        <i className={`fas ${service.icon} text-info fs-4`}></i>
                                    </div>
                                    <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                                    <div style={{ width: '40px', height: '2px', background: 'var(--bs-primary)', marginBottom: '1rem' }}></div>
                                    <p className="text-secondary mb-4 flex-grow-1">{service.description}</p>
                                    
                                    <div className="d-flex flex-wrap gap-2 mt-auto">
                                        {service.tags.map((tag, j) => (
                                            <span key={j} className="badge rounded-pill fw-normal text-secondary px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row g-4">
                    <div className="col-lg-7 reveal stagger-4">
                        <div className="card h-100 p-4 border-0 rounded-4 shadow-sm" style={{ background: 'var(--bs-secondary)', border: '1px solid rgba(255, 255, 255, 0.05) !important' }}>
                            <div className="card-body p-0">
                                <h3 className="h5 fw-bold mb-5 text-center text-sm-start">My Process</h3>
                                <div className="d-flex flex-column flex-sm-row justify-content-between text-center position-relative">
                                    {/* Line connecting steps (desktop) */}
                                    <div className="d-none d-sm-block position-absolute top-50 start-0 end-0 translate-middle-y" style={{ height: '1px', borderTop: '2px dashed rgba(255,255,255,0.1)', zIndex: 0, marginTop: '-30px' }}></div>
                                    
                                    {/* Line connecting steps (mobile) */}
                                    <div className="d-block d-sm-none position-absolute start-50 top-0 bottom-0 translate-middle-x" style={{ width: '1px', borderLeft: '2px dashed rgba(255,255,255,0.1)', zIndex: 0 }}></div>
                                    
                                    {processSteps.map((step, i) => (
                                        <div key={i} className="d-flex flex-column align-items-center position-relative mb-5 mb-sm-0" style={{ zIndex: 1 }}>
                                            <div className="d-flex align-items-center justify-content-center rounded-circle text-white shadow" style={{ width: '60px', height: '60px', background: 'var(--bs-primary)', marginBottom: '1rem', border: '4px solid #12192b' }}>
                                                <i className={`fas ${step.icon} fs-4`}></i>
                                            </div>
                                            <div className="fw-bold mb-1 px-2" style={{ backgroundColor: '#12192b' }}>{step.id}. {step.title}</div>
                                            <div className="text-secondary small px-2" style={{ maxWidth: '140px', backgroundColor: '#12192b' }}>{step.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 reveal stagger-5 position-relative">
                        <div className="card h-100 p-4 border-0 rounded-4 shadow-sm" style={{ background: 'var(--bs-secondary)', border: '1px solid rgba(255, 255, 255, 0.05) !important' }}>
                            <div className="card-body p-0">
                                <h3 className="h5 fw-bold mb-4">Technologies I Work With</h3>
                                <div className="d-flex flex-wrap gap-3">
                                    {techStack.map((tech, i) => (
                                        <div key={i} className="d-flex align-items-center justify-content-center rounded-3 bg-dark" style={{ width: '60px', height: '60px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <i className={`fab ${tech.icon} fs-3`} style={{ color: tech.color }}></i>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
