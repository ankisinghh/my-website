import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Lightbox from "./Lightbox";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section className="px-6 md:px-12 py-16 md:py-24">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Selected Works
          </h2>
          <div className="w-16 h-0.5 bg-primary" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectGrid;
