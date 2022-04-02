import "./about.css"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/6835293/pexels-photo-6835293.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&dpr=2" alt="" className="a-img" />
            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Front End Web Developer with a background in Biological and Physical Sciences with a dedication to problem solving and life-long learning.
                </p>
                <p className="a-desc">
                Earned a certificate in Full Stack Web Development from the University of Wisconsin Madison Coding Boot Camp. Effective at thinking outside the box with practical problem solving to develop impactful applications with creative design. Known for focused attention and discipline in time management and as a practical asset within teams.
                </p>
                <div className="a-award">
                    <img src="https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&dpr=2" alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h3 className="a-award-title">My Education</h3>
                        <p className="a-award-desc">
                            College of Menominee Nation, Associate's, Biological and Physical Sciences
                        </p>
                        <p className="a-award-desc">
                            UW Extended Campus, Certificate, Web Development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
