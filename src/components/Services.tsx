import { Users, Globe, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Systemy Pozyskiwania Klientów",
      description: "Wdrażamy unikalne systemy pozyskiwania klientów dla naszych partnerów. Sprawdź czy możemy wdrożyć naszą metodę w TWOIM biznesie!",
      color: "primary",
      delay: "0s",
      cta: true
    },
    {
      icon: Globe,
      title: "Profesjonalne Strony WWW",
      description: "Tworzenie nowoczesnych, responsywnych stron internetowych, które przyciągają uwagę i konwertują odwiedzających w klientów.",
      color: "secondary",
      delay: "0.2s",
      cta: false
    },
    {
      icon: Sparkles,
      title: "Branding & Social Media",
      description: "Kompleksowy branding marki i profesjonalne prowadzenie mediów społecznościowych, które budują rozpoznawalność i zaangażowanie.",
      color: "accent",
      delay: "0.4s",
      cta: false
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient animate-shimmer bg-clip-text text-transparent">Nasze Usługi</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6 italic">
            3 filary nowoczesnego marketingu
          </p>
          <p className="text-sm text-primary font-semibold animate-pulse">
            ✨ Wybierz dowolne usługi – nie musisz brać pełnego pakietu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow group animate-scale-in hover-lift"
              style={{ animationDelay: service.delay }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-300 animate-glow`}>
                <service.icon className={`text-${service.color}`} size={32} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/80 leading-relaxed">
                {service.description}
              </p>

              {service.cta ? (
                <div className="mt-6">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold hover-lift animate-glow"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    Umów darmową konsultację
                  </Button>
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-border">
                  <span className={`text-sm font-semibold text-${service.color} italic group-hover:translate-x-2 inline-block transition-transform`}>
                    Dowiedz się więcej →
                  </span>
                </div>
              )}
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
