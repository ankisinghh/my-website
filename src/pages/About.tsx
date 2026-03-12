import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1
            className="font-serif text-5xl md:text-7xl text-foreground mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            About
          </h1>

          {/* Gold accent line */}
          <div
            className="w-16 h-0.5 bg-primary mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          />

          {/* Bio paragraphs */}
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
            <p
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              I'm Singh Ankit kumar, a creative technologist and designer based
              in a world where pixels meet purpose. My work sits at the
              intersection of design, technology, and human experience.
            </p>

            <p
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              With a background spanning visual design, front-end development,
              and creative direction, I craft digital experiences that are both
              aesthetically compelling and functionally robust. I believe that
              the best work emerges from the tension between bold creativity and
              technical precision.
            </p>

            <p
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              When I'm not designing interfaces or writing code, you'll find me
              exploring new tools, experimenting with generative art, or
              contemplating the future of human-computer interaction.
            </p>
          </div>

          {/* Skills/Focus Areas */}
          <div
            className="mt-16 md:mt-24 animate-fade-up opacity-0"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              Focus Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                "UI/UX Design",
                "DevOps Developer",
                "Mern-stack Developer",
                "Web Development",
                "Creative Direction",
                "Design Systems",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="text-sm md:text-base text-muted-foreground border border-border px-4 py-3 hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
