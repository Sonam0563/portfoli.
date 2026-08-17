const About = () => {
    return (
        <section id="about" className="py-5">
            <div className="container py-5">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-5 about-image reveal">
                        <div className="position-relative mx-auto" style={{ maxWidth: '320px' }}>
                            {/* Decorative background blur */}
                            <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle" style={{ background: 'var(--bs-primary)', filter: 'blur(60px)', opacity: '0.3', zIndex: 0 }}></div>
                            
                            {/* Outer Frame */}
                            <div className="p-2 rounded-circle shadow-lg position-relative mx-auto" style={{ zIndex: 1, border: '2px dashed rgba(42, 182, 255, 0.5)', background: 'rgba(255,255,255,0.02)', aspectRatio: '1/1' }}>
                                {/* Image Container */}
                                <div className="rounded-circle overflow-hidden position-relative w-100 h-100" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <img 
                                        src="/WhatsApp Image 2026-06-22 at 10.51.15.jpeg" 
                                        alt="Candidate Profile Photo" 
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'center 20%' }} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 about-content reveal">
                        <h2 className="section-title text-start mb-4">ABOUT ME</h2>
                        <p className="text-secondary mb-4 fs-5" style={{ lineHeight: 1.8 }}>
                            Focused on developing web applications with experience across frontend development, backend services, API integration, and MySQL database management. Skilled in building responsive and scalable solutions while contributing to different stages of the development lifecycle.
                        </p>
                        
                        <div className="mt-5 mb-4">
                            <h3 className="h5 fw-bold mb-4 text-white">What I Do</h3>
                            <div className="row g-4">
                                <div className="col-md-6 d-flex align-items-start gap-3">
                                    <div className="text-info mt-1"><i className="fas fa-laptop-code fs-4"></i></div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Frontend Engineering</h4>
                                        <p className="text-secondary small mb-0">Building responsive, accessible, and dynamic user interfaces using React and modern CSS frameworks.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-start gap-3">
                                    <div className="text-info mt-1"><i className="fas fa-server fs-4"></i></div>
                                    <div>
                                        <h4 className="h6 fw-bold mb-1">Backend Services</h4>
                                        <p className="text-secondary small mb-0">Designing robust server-side logic, secure RESTful APIs, and efficient MySQL database architectures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-3 mt-4">
                            <a href="#contact" className="btn btn-primary px-4 py-2 rounded-3">Hire me</a>
                            <a href="/my_resume__1_.pdf" className="btn btn-outline-primary px-4 py-2 rounded-3" download="my_resume__1_.pdf">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
