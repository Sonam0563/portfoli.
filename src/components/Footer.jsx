const Footer = () => {
    return (
        <footer className="footer py-4 mt-5 border-top border-secondary">
            <div className="container">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="text-secondary small">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
                        <a href="https://www.linkedin.com/in/msonam/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle" style={{ width: '35px', height: '35px', background: 'rgba(255, 255, 255, 0.1)', transition: 'all 0.3s' }}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
