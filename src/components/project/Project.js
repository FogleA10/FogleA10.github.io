
const Project = ({link, source, title, subHeader}) => {
  return (
    <article className="Projects text-left project">
        <a href={link}>
            <img src={source} />
            <h3>{title}</h3>
            <p>{subHeader}</p>
        </a>
    </article>

  )
}

export default Project
