import Project from "../project";
import runBuddy from "../../images/RunBuddy.png";


const projectData = [
  {
    link: "https://foglea10.github.io/RunBuddy/",
    source: runBuddy,
    title: "Run Buddy",
    subHeader: "RUN!!!",
  },
  {
    link:"https://foglea10.github.io/password-generator/" ,
    source: "",
    title: "Password Generator",
    subHeader: "Javascript",
  },
  {
    link: "https://foglea10.github.io/RunBuddy/",
    source: "",
    title: "Projects",
    subHeader: "Note-Eater",
  },
  {
    link: "https://foglea10.github.io/RunBuddy/",
    source: "",
    title: "Project 2",
    subHeader: "Gather",
  },
];
const Work = () => {
  return (
    <section id="work" class="work">
      <h2 class="section-title secondary-border">Work</h2>
      <div>
        <a href={projectData[0].link}>
          <article class="run-buddy text-left project">
            <img src={projectData[0].source} alt="Run Buddy screenshot" />
            <h3>{projectData[0].title}</h3>
            <p>{projectData[0].subHeader}</p>
          </article>
        </a>

        <div class="smaller-boxes">
            {projectData.slice(1).map(project => (<Project {...project} />))}
        </div>
      </div>
    </section>
  );
};

export default Work;
