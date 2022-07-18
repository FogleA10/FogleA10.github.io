import audrey from "../../images/audrey.jpeg";


const About = () => {
  return (
    <section id="About-Me" className="intro">
        <h2 className="section-title primary-border info">About Me</h2>
        <div className="audrey">
            <img src={audrey} className="container"/>
            <p> I am a professional violinist. I have been performing for 24 years. I am a mother of two precious
                children.
                Hannah is eight years old and Henry is almost 1 years old.
            </p>
        </div>
    </section>
  )
}

export default About
