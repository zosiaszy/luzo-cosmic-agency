import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Futuristic space background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float animate-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in animate-glow text-glow">
          <span className="text-gradient animate-shimmer bg-clip-text text-transparent">DBC MARKETING</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-4 animate-fade-in font-display italic animate-pulse-slow text-glow" style={{ animationDelay: '0.2s' }}>
          #Growth Digital Solutions
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up font-light" style={{ animationDelay: '0.4s' }}>
          <span className="border-b-2 border-primary/50 pb-1">Cyfrowe rozwiązania wzrostu</span> dla Twojego biznesu
        </p>

        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-primary/50 transition-all group hover-lift animate-glow"
          >
            Poznaj nasze usługi
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>

          {/* Scroll Indicator - now below button */}
          <div className="mt-16 flex justify-center animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
