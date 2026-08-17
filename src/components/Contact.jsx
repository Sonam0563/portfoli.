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
                <div className="row g-5 rounded-5 p-4 p-md-5" style={{ background: 'linear-gradient(135deg, rgba(93, 63, 255, 0.1), rgba(42, 182, 255, 0.1))', border: '1px solid var(--bs-border-color)', backdropFilter: 'blur(10px)' }}>
                    <div className="col-lg-5 contact-info reveal">
                        <h2 className="mb-4 fw-bold">CONTACT</h2>
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
                        <form id="contact-form" name="submit-to-google-sheet" onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                            <input type="text" name="Name" className="form-control form-control-lg bg-dark text-white border-secondary" placeholder="Name" required />
                            <input type="email" name="Email" className="form-control form-control-lg bg-dark text-white border-secondary" placeholder="Email" required />
                            <textarea name="Message" className="form-control form-control-lg bg-dark text-white border-secondary" placeholder="Message" rows="4" required></textarea>
                            <button type="submit" className="btn btn-dark btn-lg align-self-start px-5" id="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
