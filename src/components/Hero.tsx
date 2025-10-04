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
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in">
          <span className="text-gradient">LUZO MMA</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 animate-fade-in font-display" style={{ animationDelay: '0.2s' }}>
          Modern Marketing Agency
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Agencja oparta na automatyzacji i sztucznej inteligencji
        </p>

        <Button
          size="lg"
          onClick={() => scrollToSection("services")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all animate-fade-in group"
          style={{ animationDelay: '0.6s' }}
        >
          Poznaj nasze usługi
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
