const Hero = () => {
    return (
        <section id="home" className="vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
            <div className="container position-relative" style={{ zIndex: 10 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10 hero-content reveal">
                        
                        {/* Availability Badge */}
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4 shadow-sm" style={{ background: 'rgba(42, 182, 255, 0.1)', border: '1px solid rgba(42, 182, 255, 0.2)' }}>
                            <span className="bg-info rounded-circle" style={{ width: '8px', height: '8px', boxShadow: '0 0 10px var(--bs-info)' }}></span>
                            <span className="text-info fw-semibold small letter-spacing-1">AVAILABLE FOR OPPORTUNITIES</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="fw-bolder mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.2, letterSpacing: '-1px' }}>
                            Building Scalable <br className="d-none d-sm-block" />
                            <span style={{ background: 'linear-gradient(90deg, #fff, var(--bs-info))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 40px rgba(42, 182, 255, 0.3)' }}>
                                Digital Experiences
                            </span>
                        </h1>

                        {/* Sub Headline */}
                        <p className="text-secondary fs-5 mb-5 mx-auto" style={{ maxWidth: '600px', lineHeight: 1.8 }}>
                            Full Stack Developer specializing in React, Node.js, and AWS. I help fast-growing startups and enterprises build performant, user-centric web and mobile applications.
                        </p>

                        {/* CTAs */}
                        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4">
                            <a href="#portfolio" className="btn btn-primary px-4 py-3 rounded-pill fw-bold w-100 d-flex justify-content-center align-items-center gap-2" style={{ maxWidth: '280px' }}>
                                View My Work <i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#contact" className="btn btn-outline-info px-4 py-3 rounded-pill fw-bold w-100" style={{ maxWidth: '280px' }}>
                                Contact Me
                            </a>
                            <a href="/my_resume__1_.pdf" className="text-secondary text-decoration-none fw-semibold ms-sm-3 mt-2 mt-sm-0 position-relative hover-underline text-center" download="my_resume__1_.pdf">
                                <i className="fas fa-file-download me-2"></i>Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative floating icons */}
                <div className="d-none d-lg-flex position-absolute top-0 start-0 translate-middle-y align-items-center justify-content-center rounded-circle bg-dark shadow-lg" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.05)', left: '10% !important', marginTop: '10%' }}>
                    <i className="fab fa-react fs-2 text-info"></i>
                </div>
                <div className="d-none d-lg-flex position-absolute bottom-0 end-0 align-items-center justify-content-center rounded-circle bg-dark shadow-lg" style={{ width: '60px', height: '60px', border: '1px solid rgba(255,255,255,0.05)', right: '15% !important', marginBottom: '5%' }}>
                    <i className="fab fa-node-js fs-3 text-success"></i>
                </div>
            </div>

            {/* Background Typography */}
            <div className="hero-bg-text">DEVELOPER</div>
        </section>
    );
};

export default Hero;
