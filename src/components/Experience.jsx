const Experience = () => {
    const techStack = [
        { icon: 'fa-aws', name: 'AWS', color: '#FF9900' },
        { icon: 'fa-css3-alt', name: 'CSS3', color: '#2965f1' },
        { icon: 'fa-react', name: 'React.js', color: '#61DBFB' },
        { icon: 'fa-html5', name: 'HTML', color: '#e34c26' },
        { icon: 'fa-java', name: 'Java', color: '#f89820' },
        { icon: 'fa-js', name: 'Javascript', color: '#F0DB4F' },
        { icon: 'fa-node-js', name: 'Node.JS', color: '#3C873A' },
        { icon: 'fa-python', name: 'Python', color: '#4B8BBE' }
    ];

    return (
        <section id="experience" className="py-5">
            <div className="container py-5">
                <h2 className="section-title reveal">EXPERIENCE</h2>
                <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
                    {techStack.map((tech, i) => (
                        <div key={i} className={`col reveal stagger-${i + 1}`}>
                            <div className="p-4 rounded-4" style={{ transition: 'transform 0.3s', cursor: 'default' }}>
                                <i className={`fab ${tech.icon} display-2 mb-3`} style={{ color: tech.color }}></i>
                                <div className="fw-bold text-secondary">{tech.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
