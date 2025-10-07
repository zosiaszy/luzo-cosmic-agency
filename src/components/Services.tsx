import { Users, Globe, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    
  
    {
      icon: Sparkles,
      title: "Branding & Social Media",
      description: "Kompleksowy branding marki i profesjonalne prowadzenie mediów społecznościowych, które budują rozpoznawalność i zaangażowanie. Ustawiamy filary treści, kalendarz publikacji i szablony, żeby komunikacja była spójna i regularna.",
      color: "accent",
      delay: "0.4s",
      cta: false
    },
      {
      icon: Globe,
      title: "Profesjonalne Strony WWW",
      description: "Tworzenie nowoczesnych, responsywnych stron internetowych, które przyciągają uwagę i konwertują odwiedzających w klientów. Tworzymy zarówno landing page’e, jak i pełne serwisy z blogiem, portfolio czy sklepem, gotowe do skalowania. ",
      color: "secondary",
      delay: "0.2s",
      cta: false
    },
    {
      icon: Users,
      title: "Systemy Pozyskiwania Klientów",
      description: "Content, który przyciąga. Oferty, które konwertują. Wdrażamy unikalne systemy pozyskiwania klientów. Sprawdź, czy możemy wdrożyć nasze metody w TWOIM biznesie!",
      color: "primary",
      delay: "0s",
      cta: true
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-glow animate-fade-in">Nasze Usługi</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6 italic animate-pulse-slow">
            <span className="border-b-2 border-primary/30 pb-1">3 filary nowoczesnego marketingu</span>
          </p>
          <p className="text-sm text-secondary font-bold animate-pulse-slow">
            ✨ Wybierz dowolne usługi – nie musisz pełnego pakietu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-500 card-highlight hover-glow group animate-scale-in relative overflow-hidden"
              style={{ animationDelay: service.delay }}
            >
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-${service.color}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow`}></div>
                  <div className={`relative w-20 h-20 rounded-2xl bg-${service.color}/10 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 animate-glow shadow-xl`}>
                    <service.icon className={`text-${service.color}`} size={36} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  <span className="border-b-2 border-transparent group-hover:border-primary/50 pb-1 transition-all">
                    {service.title}
                  </span>
                </h3>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.cta ? (
                   <div className="mt-6 pt-6 border-t border-border group-hover:border-primary/30 transition-colors">
                    <span className={`text-sm font-bold text-${service.color} italic group-hover:translate-x-3 inline-flex items-center gap-2 transition-all duration-300`}>
                      Dowiedz się więcej 
                      <span className="group-hover:animate-bounce">→</span>
                    </span>
                  </div>
                  
                  
                ) : (
                  <div className="mt-6 pt-6 border-t border-border group-hover:border-primary/30 transition-colors">
                    <span className={`text-sm font-bold text-${service.color} italic group-hover:translate-x-3 inline-flex items-center gap-2 transition-all duration-300`}>
                      Dowiedz się więcej 
                      <span className="group-hover:animate-bounce">→</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-float animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Services;
