import { useState } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    { id: 1, image: portfolio1, title: "E-commerce Fashion", category: "Sklep Online" },
    { id: 2, image: portfolio2, title: "Luxury Restaurant", category: "Gastronomia" },
    { id: 3, image: portfolio3, title: "Fitness App", category: "Aplikacja Mobile" },
    { id: 4, image: portfolio4, title: "SaaS Platform", category: "Tech Startup" },
    { id: 5, image: portfolio5, title: "Creative Agency", category: "Portfolio" },
    { id: 6, image: portfolio6, title: "Real Estate", category: "Nieruchomości" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Przykłady naszych realizacji - strony internetowe stworzone przez Łukasza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden cursor-pointer bg-card border-border card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-display font-bold">{project.title}</h3>
                </div>
              </div>
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

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Portfolio;
