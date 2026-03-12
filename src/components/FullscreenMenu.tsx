import { useEffect } from "react";
import { Link } from "react-router-dom";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullscreenMenu = ({ isOpen, onClose }: FullscreenMenuProps) => {
  const menuLinks = [
    { path: "/", label: "Works", number: "01" },
    { path: "/about", label: "About", number: "02" },
    { path: "/contact", label: "Contact", number: "03" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background transition-all duration-500 ${
        isOpen 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-12 p-2 text-foreground hover:text-primary transition-colors duration-300"
        aria-label="Close menu"
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

      {/* Menu Links */}
      <nav className="h-full flex flex-col justify-center items-start px-8 md:px-20">
        {menuLinks.map((link, index) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`group flex items-baseline gap-4 md:gap-8 py-4 md:py-6 transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${index * 100 + 200}ms` : "0ms" }}
          >
            <span className="text-sm md:text-base text-muted-foreground font-sans">
              {link.number}
            </span>
            <span className="text-5xl md:text-8xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Footer Info */}
      <div 
        className={`absolute bottom-8 left-8 md:left-20 text-sm text-muted-foreground transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
      >
        <p>Creative Technologist & Designer</p>
      </div>
    </div>
  );
};

export default FullscreenMenu;
