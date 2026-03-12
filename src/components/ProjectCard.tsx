import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer animate-fade-up opacity-0"
      style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: "forwards" }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary aspect-[4/3] mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gold border overlay on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300" />
      </div>

      {/* Project Info */}
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {project.category}
          </p>
        </div>
        {project.year && (
          <span className="text-sm text-muted-foreground">
            {project.year}
          </span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
