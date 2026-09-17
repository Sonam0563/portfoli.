import { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.target;
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwrf9YAQXLl_gw55wjSnYuEyCWDZU5FsBCapuguPfDAew6T-n4JUGUclsZXgGNZuht-/exec';
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
            .then(() => {
                alert('Message sent successfully!');
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Oops! Something went wrong. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-5">
            <div className="container py-5">
                <div className="row g-5 rounded-5 p-4 p-md-5" style={{ background: 'rgba(18, 25, 43, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(15px)' }}>
                    <div className="col-lg-5 contact-info reveal">
                        <h2 className="mb-4 fw-bolder section-title">CONTACT</h2>
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center justify-content-center rounded-circle fs-4 text-info" style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.1)' }}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <div className="fw-bold">Drop a Line</div>
                                    <div className="text-secondary small">msonam189@gmail.com</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center justify-content-center rounded-circle fs-4 text-info" style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.1)' }}>
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <div className="fw-bold">24/7 Service</div>
                                    <div className="text-secondary small">+91 9984971256</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center justify-content-center rounded-circle fs-4 text-info" style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.1)' }}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <div className="fw-bold">Location</div>
                                    <div className="text-secondary small">Lucknow, India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 contact-form reveal">
                        <form id="contact-form" name="submit-to-google-sheet" onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                            <input type="text" name="Name" className="form-control form-control-lg contact-input" placeholder="Your Name" required />
                            <input type="email" name="Email" className="form-control form-control-lg contact-input" placeholder="Your Email" required />
                            <textarea name="Message" className="form-control form-control-lg contact-input" placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit" className="btn btn-lg align-self-start px-5 mt-2 fw-bold text-dark shadow" id="submit-btn" disabled={isSubmitting} style={{ background: 'linear-gradient(90deg, #fff, var(--bs-info))', border: 'none', borderRadius: '30px' }}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
