const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16">
      <div className="max-w-4xl">
        {/* Name */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          Singh Ankit Kumar
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-primary font-sans font-light tracking-wide mb-8 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Creative Technologist • Designer • Learner
        </p>

        {/* Editorial Introduction */}
        <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          Crafting digital experiences at the intersection of design and technology. 
          I believe in the power of thoughtful details and bold creative expression.
        </p>

        {/* Scroll Indicator */}
        <div className="mt-16 md:mt-24 animate-fade-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
            <div className="w-12 h-px bg-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
