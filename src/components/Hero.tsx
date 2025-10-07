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
  

      {/* Content */}
      <div className="relative container mx-auto px-5 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in text-glow">
          <span className="bg-gradient-primary bg-clip-text text-glow animate-fade-in">DBC MARKETING</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-primary mb-4 animate-fade-in text-glow font-display italic animate-pulse-slow text-glow" style={{ animationDelay: '0.2s' }}>
          Marketing, który dowozi klientów
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up font-light" style={{ animationDelay: '0.4s' }}>
          <span className="border-b-2 border-primary/50 pb-1">Wzrost marki zaczyna się tutaj</span> 
        </p>

        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-gradient-secondary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-primary/50 transition-all group hover-lift animate-glow"
          >
            Zobacz, jak to robimy
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
