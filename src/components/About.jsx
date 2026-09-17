const About = () => {
    const journey = [
        { year: '2024', title: 'Started Building', desc: 'Started developing web applications and strengthening frontend and backend fundamentals.' },
        { year: '2025', title: 'Application Developer Intern', desc: 'Worked on real-world applications and gained experience with modern web development workflows.' },
        { year: '2026', title: 'Full-Stack Development', desc: 'Building complete web applications using React, Laravel, Node.js and modern databases.' },
        { year: 'Today', title: 'Still Building', desc: 'Continuously learning, experimenting and turning ideas into useful products.' }
    ];

    const whatIDo = [
        { title: 'Frontend Development', desc: 'Responsive and interactive interfaces using React, JavaScript, HTML and CSS.', icon: 'fa-desktop' },
        { title: 'Backend Development', desc: 'APIs, authentication, business logic and database-driven applications.', icon: 'fa-server' },
        { title: 'Full-Stack Development', desc: 'Complete applications from frontend interface to backend architecture.', icon: 'fa-layer-group' },
        { title: 'Problem Solving', desc: 'Breaking complex requirements into simple, maintainable solutions.', icon: 'fa-lightbulb' }
    ];

    const techStack = [
        { category: 'Frontend', tools: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
        { category: 'Backend', tools: ['Laravel', 'PHP', 'Node.js', 'Express.js'] },
        { category: 'Database', tools: ['MySQL', 'PostgreSQL', 'Neon'] },
        { category: 'Tools', tools: ['Git', 'GitHub', 'Docker', 'VS Code'] }
    ];

    return (
        <div className="about-page-sections text-white">

            {/* About Section */}
            <section id="about" className="py-5 mt-5">
                <div className="container py-5">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-5 reveal text-center text-lg-start">
                            <h2 className="display-5 fw-bolder mb-5 text-white" style={{ letterSpacing: '1px' }}>
                                A little about me.
                            </h2>
                            <div className="position-relative d-inline-block mx-auto mb-4 mb-lg-0">
                                <div className="position-absolute rounded-4" style={{ top: '15px', left: '15px', width: '100%', height: '100%', border: '2px solid var(--bs-info)', zIndex: 0, boxShadow: '0 0 15px rgba(42, 182, 255, 0.3)' }}></div>
                                <img src="/about_me.jpeg" alt="About Me" className="img-fluid rounded-4 position-relative shadow-lg" style={{ zIndex: 1, maxWidth: '280px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-7 reveal" style={{ transitionDelay: '0.2s' }}>
                            <p className="fs-5 text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                                I'm a developer who enjoys working across both frontend and backend development. My work involves designing interfaces, building APIs, working with databases and connecting everything into complete applications.
                            </p>
                            <p className="fs-5 text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                                I mainly work with technologies such as React, JavaScript, Laravel, PHP, Node.js, Express, MySQL and PostgreSQL.
                            </p>
                            <p className="fs-5 text-secondary mb-5" style={{ lineHeight: 1.8 }}>
                                For me, good development isn't only about writing code. It's about understanding the problem, creating a simple solution and building something people can actually use.
                            </p>
                            <div className="text-info fw-bold fs-5" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
                                Code. Create. Learn. Repeat.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Journey */}
            <section id="journey" className="py-5">
                <div className="container py-5">
                    <h2 className="section-title reveal">My Journey</h2>
                    <div className="position-relative ms-3 ms-md-5 mt-5 reveal" style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.1)' }}>
                        {journey.map((item, index) => (
                            <div key={index} className="position-relative mb-5 ps-4 ps-md-5 reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="position-absolute rounded-circle" style={{ width: '16px', height: '16px', left: '-9px', top: '5px', border: '3px solid var(--bs-body-bg)', background: 'var(--bs-info)', boxShadow: '0 0 10px rgba(42, 182, 255, 0.8)' }}></div>
                                <div className="text-info fw-bold mb-2">{item.year}</div>
                                <h3 className="h4 fw-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-secondary fs-6" style={{ maxWidth: '600px', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Do */}
            <section id="what-i-do" className="py-5">
                <div className="container py-5">
                    <h2 className="section-title reveal">What I Do</h2>
                    <div className="row g-4 mt-3">
                        {whatIDo.map((item, index) => (
                            <div key={index} className="col-md-6 reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <div className="card h-100 bg-transparent border-0">
                                    <div className="card-body p-4 rounded-4 d-flex flex-column h-100" style={{ background: 'rgba(18, 25, 43, 0.6)', border: '1px solid rgba(42, 182, 255, 0.2)' }}>
                                        <div className="mb-4 text-info"><i className={`fas ${item.icon} fs-2`}></i></div>
                                        <h3 className="h4 fw-bold mb-3 text-white">{item.title}</h3>
                                        <p className="text-secondary mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Numbers Section */}
            <section id="numbers" className="py-5">
                <div className="container py-5 my-md-4 rounded-5" style={{ background: 'rgba(18, 25, 43, 0.8)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div className="row g-4 text-center">
                        <div className="col-6 col-md-3 reveal">
                            <div className="display-4 fw-bolder text-info mb-2">10+</div>
                            <div className="text-secondary fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Projects Built</div>
                        </div>
                        <div className="col-6 col-md-3 reveal" style={{ transitionDelay: '0.1s' }}>
                            <div className="display-4 fw-bolder text-info mb-2">1+</div>
                            <div className="text-secondary fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Years Learning</div>
                        </div>
                        <div className="col-6 col-md-3 reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="display-4 fw-bolder text-info mb-2">15+</div>
                            <div className="text-secondary fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Technologies</div>
                        </div>
                        <div className="col-6 col-md-3 reveal" style={{ transitionDelay: '0.3s' }}>
                            <div className="display-4 fw-bolder text-info mb-2">&infin;</div>
                            <div className="text-secondary fw-semibold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Still Learning</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Section */}
            <section id="personal" className="py-5 mt-5">
                <div className="container py-5">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-5 reveal">
                            <h2 className="section-title text-start mb-4">Beyond the Code</h2>
                            <p className="fs-5 text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                                When I'm not coding, I'm usually learning something new, experimenting with an idea, improving an existing project, or exploring better ways to solve problems.
                            </p>
                            <p className="fs-5 fw-semibold text-white mb-5" style={{ lineHeight: 1.8 }}>
                                I believe the best developers never stop learning.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                {['Learning', 'Building', 'Exploring', 'Improving'].map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-transparent border rounded-pill text-info small fw-semibold" style={{ borderColor: 'var(--bs-info)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="rounded-4 overflow-hidden border p-1" style={{ borderColor: 'rgba(42, 182, 255, 0.3)', background: 'linear-gradient(135deg, rgba(93, 63, 255, 0.2), rgba(42, 182, 255, 0.2))' }}>
                                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" alt="Workspace" className="w-100 rounded-3" style={{ objectFit: 'cover', height: '350px', opacity: 0.8 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="cta" className="py-5">
                <div className="container py-5 my-5 text-center reveal">
                    <h2 className="display-4 fw-bolder mb-4 text-white" style={{ letterSpacing: '-1px' }}>
                        Have something worth building?
                    </h2>
                    <p className="fs-4 text-secondary mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                        Let's turn your idea into a clean, functional and meaningful digital experience.
                    </p>
                    <a href="#contact" className="btn btn-primary btn-lg px-5 py-3 fs-5 fw-bold mb-4 shadow-lg rounded-pill" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Let's Work Together &rarr;
                    </a>
                    <div className="mt-3">
                        <span className="text-secondary me-2">or say hello at</span>
                        <a href="mailto:msonam189@gmail.com" className="text-info fw-bold text-decoration-none hover-underline">msonam189@gmail.com</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
