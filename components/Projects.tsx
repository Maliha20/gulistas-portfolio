import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { data } from "@/data/projects";

const Projects = () => {
  return (
    <section className="wrapper section-padding">
      <SectionTitle title="Projects" />

      <div className="cards-wrapper mt-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-20">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            live={project.liveLink}
            front={project.frontend}
            back={project.backend}
            full={project.fullstack}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;