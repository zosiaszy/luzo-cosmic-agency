import { Card } from "@/components/ui/card";
import { Users, Sparkles } from "lucide-react";
import lukaszPhoto from "@/assets/lukasz-debiec.jpg";

const About = () => {
  const team = [
    {
      name: "Łukasz Dębiec",
      role: "CEO & Founder",
      description: "Ekspert w dziedzinie digital marketingu z wieloletnim doświadczeniem w budowaniu strategii wzrostu dla biznesów.",
      photo: lukaszPhoto,
    },
    {
      name: "Zosia",
      role: "Content & Creator Director",
      description: "Specjalistka od contentu i kreacji wizualnej, tworząca angażujące treści dla social media.",
      photo: null,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient animate-shimmer bg-clip-text text-transparent">O nas</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic">
            Zespół ekspertów digital marketingu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow animate-scale-in hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {member.photo ? (
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="text-primary" size={32} />
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold mb-2 text-center group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <p className="text-primary text-sm font-semibold mb-4 text-center italic">
                {member.role}
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-center">
                {member.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-glow animate-scale-in hover-lift group max-w-4xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform animate-glow">
              <Sparkles className="text-primary-foreground" size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-gradient animate-shimmer bg-clip-text text-transparent">Nasza Misja</span>
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              W <span className="text-primary font-semibold">DBC MARKETING</span> wierzymy, że każdy biznes zasługuje na nowoczesne, efektywne rozwiązania marketingowe. 
              Łączymy <span className="italic">najnowsze technologie</span> z kreatywnością, aby dostarczać rezultaty, które przekraczają oczekiwania.
            </p>
          </div>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default About;
