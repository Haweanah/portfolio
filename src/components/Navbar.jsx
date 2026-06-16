export default function Navbar () {
    return (
        <div className="navbar" id="navbar">
            <div className="navbar-left">
                <img src="/images/sideviewsmall.png" alt="" />
                <h3>Hauwa Abdulkadir</h3>
            </div>

                <div className="navbar-right">
                    <li><a href="#navbar">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                     <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Resume
                            </a>
    </li>
                </div>
                        
        </div>
    )
}