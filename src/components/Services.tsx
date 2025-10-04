import { Brain, Megaphone, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Automatyzacja",
      description: "Wykorzystujemy najnowsze technologie AI do automatyzacji procesów marketingowych, analizy danych i personalizacji komunikacji z klientami.",
      color: "primary",
      delay: "0s"
    },
    {
      icon: Megaphone,
      title: "Marketing Digitalowy",
      description: "Kompleksowe strategie social media, content marketing, SEO i kampanie reklamowe dostosowane do Twojej marki i grupy docelowej.",
      color: "secondary",
      delay: "0.2s"
    },
    {
      icon: Code,
      title: "Rozwój Web",
      description: "Projektowanie i tworzenie nowoczesnych, responsywnych stron internetowych i aplikacji, które przyciągają uwagę i konwertują odwiedzających.",
      color: "accent",
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Nasze Usługi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            3 filary nowoczesnego marketingu
          </p>
          <p className="text-sm text-primary font-medium">
            ✨ Wybierz dowolne usługi – nie musisz brać pełnego pakietu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow group animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`text-${service.color}`} size={32} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <span className={`text-sm font-medium text-${service.color}`}>
                  Dowiedz się więcej →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Services;
