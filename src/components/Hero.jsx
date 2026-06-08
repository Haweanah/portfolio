export default function Hero () {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>
                    Hauwa Abdulkadir
                </h1>
                <p className="para-top">
                    Your go-to engineer for Web Development projects
                    </p>
                    <p className="pata-bottom">
                       I'm a Microbiologist turned Software Engineer.
                        Building technology solutions for healthcare,
                        food safety, and water quality.
                        Bringing your ideas to life with clean, efficient and scalable code.
                    </p>
                    <div className="hero-links">
                        <button>
                            <a href="">Contact me</a>
                            </button><button>View projects</button>
                    </div>
            </div>
            <div className="hero-right">
                <img src="./images/frontview.png" alt="profile photo" />
            </div>
        </div>
    )
}