import { useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import portfolioPsychologist from "@/assets/portfolio-psychologist.png";
import portfolioNailSalon from "@/assets/portfolio-nailsalon.png";
import portfolioBeautySalon from "@/assets/portfolio-beautysalon.png";
import portfolioModelAgency from "@/assets/portfolio-modelagency.png";
import portfolioPhysiotherapist from "@/assets/portfolio-physiotherapist.png";
import portfolioDentist from "@/assets/portfolio-dentist.png";
import portfolioDancer from "@/assets/portfolio-dancer.png";
import portfolioTattoo from "@/assets/portfolio-tattoo.png";
import portfolioCarpenter from "@/assets/portfolio-carpenter.png";
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    { 
      id: 1, 
      image: portfolioPsychologist, 
      title: "Strona Psychologa", 
      category: "Zdrowie & Wellness",
      link: "https://genuine-growth-page.lovable.app"
    },
    { 
      id: 2, 
      image: portfolioNailSalon, 
      title: "Salon Paznokci", 
      category: "Beauty & Uroda",
      link: "https://nails-art-studio.lovable.app"
    },
    { 
      id: 3, 
      image: portfolioBeautySalon, 
      title: "Salon Kosmetyczny", 
      category: "Beauty & Spa",
      link: "https://premium-beauty-blossom.lovable.app"
    },
    { 
      id: 4, 
      image: portfolioModelAgency, 
      title: "Agencja Modelek", 
      category: "Fashion & Modeling",
      link: "https://model-arc-gallery.lovable.app"
    },
    { 
      id: 5, 
      image: portfolioPhysiotherapist, 
      title: "Fizjoterapeuta", 
      category: "Zdrowie & Rehabilitacja",
      link: "https://move-restore-pro.lovable.app"
    },
    { 
      id: 6, 
      image: portfolioDentist, 
      title: "Stomatolog", 
      category: "Medycyna & Stomatologia",
      link: "https://smile-comfort-care.lovable.app"
    },
    { 
      id: 7, 
      image: portfolioDancer, 
      title: "Tancerz", 
      category: "Sztuka & Performance",
      link: "https://rhythm-and-grace-port.lovable.app"
    },
    { 
      id: 8, 
      image: portfolioTattoo, 
      title: "Tatuażysta", 
      category: "Sztuka & Body Art",
      link: "https://ink-etched-elegance.lovable.app"
    },
    { 
      id: 9, 
      image: portfolioCarpenter, 
      title: "Stolarz", 
      category: "Rzemiosło & Meble",
      link: "https://wood-soul-craft.lovable.app"
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow animate-shimmer">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic animate-pulse-slow">
            Przykłady naszych realizacji - <span className="text-primary border-b-2 border-primary/50">strony internetowe</span>:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden cursor-pointer bg-card border-border card-highlight hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-primary font-medium mb-1 animate-pulse-slow">{project.category}</p>
                  <h3 className="text-xl font-display font-bold text-glow">{project.title}</h3>
                  {project.link && (
                    <p className="text-xs text-muted-foreground mt-2 italic opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                      Kliknij aby powiększyć →
                    </p>
                  )}
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg animate-border-glow" />
            </Card>
          ))}
        </div>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Portfolio preview"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10 animate-float" />
    </section>
  );
};

export default Portfolio;
