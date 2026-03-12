import { useEffect } from "react";
import { Project } from "@/data/projects";

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

const Lightbox = ({ project, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-12 p-2 text-foreground hover:text-primary transition-colors duration-300 z-10"
        aria-label="Close lightbox"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image Container */}
      <div
        className="max-w-5xl w-full animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        
        {/* Project Info */}
        <div className="mt-6 flex items-baseline justify-between">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-1">
              {project.category}
            </p>
          </div>
          {project.year && (
            <span className="text-muted-foreground">
              {project.year}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
