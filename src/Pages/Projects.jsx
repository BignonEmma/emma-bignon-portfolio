import "../Style/Projects.css";
import Leaf from "../Assets/Pictures/palmcolo.png";
import ProjectJson from "../Assets/Projects.json";

export default function Projects() {
  return (
    <div className="container-projects">
      <div className="block-project">
        <div className="top-part">
          <img src={Leaf} alt="leaf" className="leaf-img" />
          <div className="title-block">
            <h2 className="title-project">my work</h2>
            <div className="border-bottom" />
          </div>
        </div>
        <div className="projects-flex">
          {ProjectJson.map((projects) => (
            <div className="card-projects">
              <a href={projects.link} target="_blank" rel="noreferrer">
                <img
                  src={require(`../Assets/Pictures/${projects.picture}`)}
                  alt="leaf"
                  className="projects-img"
                />
              </a>
              <h3 className="card-title">{projects.name}</h3>
              <div className="card-bordertop" />
              <p className="card-description">{projects.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
