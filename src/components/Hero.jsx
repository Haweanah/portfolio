//import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero () {
    return (
        <div className="hero" id="hero">
            <div className="hero-left">
                <p className="hero-tag">
                👋 Hi, I'm
                </p>
                <h1 className="name">
                    Hauwa Abdulkadir
                </h1>
                <p className="para-top">
                    Software Engineer | AI Enthusiast | Microbiologist
                     </p>
                    <p className="para-bottom">
                       I'm a Microbiologist turned Software Engineer passionate about building technology that solves real-world problems.
                    </p>
                    <p className="para-bottom">
                        Using <span className="tech">React,</span> <span className="tech">Javascript,</span> <span className="tech">Python</span> and <span className="tech">Flask,</span> I create modern web applications with a focus on healthcare, food safety, and water quality solutions.
                    </p>
                    <div className="hero-links">
                       
                            <a href="#contact" className="btn-primary">Let's Talk</a>
                           
                           <a href="#projects" className="btn-secondary">View my Work</a>
                    </div>
                    <div className="social-links">
                    <a href="https://github.com/Haweanah">
                    </a>

                    <a href="https://linkedin.com/in/https://www.linkedin.com/in/hauwa-abdulkadir-6281b72bb/">
                       {/* <FaLinkedin />*/}
                    </a>

                    <a href="mailto:ahauwa48@yahoo.com">
                       {/* <FaEnvelope />*/}
                    </a>
                    </div>
            </div>
            <div className="hero-right">
                <img src="/images/frontview.png" alt="profile photo" />
            </div>
        </div>
    )
}