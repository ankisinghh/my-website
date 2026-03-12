import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FullscreenMenu from "./FullscreenMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Works" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-foreground font-serif text-xl md:text-2xl tracking-tight hover:text-primary transition-colors duration-300"
          >
            Singh Ankit Kumar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-foreground transition-all duration-300" />
            <span className="w-6 h-0.5 bg-foreground transition-all duration-300" />
          </button>
        </div>
      </header>

      <FullscreenMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
