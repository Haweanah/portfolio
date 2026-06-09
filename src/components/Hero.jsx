export default function Hero () {
    return (
        <div className="hero" id="hero">
            <div className="hero-left">
                <span className="name">
                    Hauwa Abdulkadir
                </span>
                <h1 className="para-top">
                    Software Engineer & AI Enthusiast
                     </h1>
                    <p className="para-bottom">
                       I'm a Microbiologist turned Software Engineer passionate about building technology that solves real-world problems.
                    </p>
                    <p className="para-bottom">
                        Using React, JavaScript, Python, and Flask, I create modern web applications with a focus on healthcare, food safety, and water quality solutions.
                    </p>
                    <div className="hero-links">
                       
                            <a href="#contact">Let's Talk</a>
                           
                           <a href="#projects">View my Work</a>
                    </div>
            </div>
            <div className="hero-right">
                <img src="/images/frontview.png" alt="profile photo" />
            </div>
        </div>
    )
}