import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-12 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Contact
          </h1>

          {/* Gold accent line */}
          <div className="w-16 h-0.5 bg-primary mb-12 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }} />

          {/* Intro text */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans mb-16 animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            Have a project in mind or just want to connect? I'm always open to 
            discussing new opportunities, creative ideas, or potential collaborations.
          </p>

          {/* Contact Links */}
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            {/* Email */}
            <div>
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2 block">
                Email
              </span>
              <a
                href="mailto:ankit8907.singh@gmail.com"
                className="font-serif text-2xl md:text-4xl text-foreground hover:text-primary transition-colors duration-300"
              >
                ankit8907.singh@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2 block">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/ankitsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl md:text-4xl text-foreground hover:text-primary transition-colors duration-300"
              >
                /in/ankitsingh
              </a>
            </div>
          </div>

          {/* Availability indicator */}
          <div className="mt-24 flex items-center gap-3 animate-fade-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for new projects
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
