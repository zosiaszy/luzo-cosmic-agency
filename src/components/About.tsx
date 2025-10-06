import { Card } from "@/components/ui/card";
import { Sparkles, Award, Target } from "lucide-react";
import lukaszPhoto from "@/assets/lukasz-ceo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient animate-shimmer bg-clip-text text-transparent text-glow">O nas</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto italic animate-pulse-slow">
            Zespół ekspertów <span className="text-primary font-semibold">digital marketingu</span>
          </p>
        </div>

        {/* Team Section with Łukasz's Photo prominently displayed */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Łukasz Card - with large photo */}
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-500 card-highlight hover-glow group animate-scale-in relative overflow-hidden">
            <div className="relative z-10">
              <div className="relative w-48 h-48 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all duration-500 shadow-2xl animate-glow">
                  <img 
                    src={lukaszPhoto} 
                    alt="Łukasz Dębiec - CEO & Founder"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-block mb-4">
                  <Award className="text-primary mx-auto animate-pulse-slow" size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  Łukasz Dębiec
                </h3>
                
                <p className="text-primary text-sm font-bold mb-4 italic uppercase tracking-wider animate-shimmer bg-clip-text text-transparent bg-gradient-primary">
                  CEO & Founder
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  Ekspert w dziedzinie <span className="text-primary font-semibold">digital marketingu</span> z wieloletnim 
                  doświadczeniem w budowaniu <span className="italic">strategii wzrostu</span> dla biznesów.
                </p>
              </div>
            </div>
          </Card>

          {/* Zosia Card */}
          <Card className="p-8 bg-card border-border hover:border-secondary transition-all duration-500 card-highlight hover-glow group animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="text-secondary animate-pulse-slow" size={40} />
                </div>
              </div>
              
              <div className="inline-block mb-4">
                <Target className="text-secondary mx-auto animate-pulse-slow" size={28} />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-secondary transition-colors">
                Zosia
              </h3>
              
              <p className="text-secondary text-sm font-bold mb-4 italic uppercase tracking-wider">
                Content & Creator Director
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Specjalistka od <span className="text-secondary font-semibold">contentu i kreacji wizualnej</span>, 
                tworząca <span className="italic">angażujące treści</span> dla social media.
              </p>
            </div>
          </Card>
        </div>

        {/* Mission Card */}
        <Card className="p-12 bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 max-w-4xl mx-auto text-center animate-scale-in card-highlight hover-glow group relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto group-hover:scale-125 transition-transform duration-500 animate-glow shadow-2xl">
              <Sparkles className="text-primary-foreground animate-pulse-slow" size={40} />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="text-gradient animate-shimmer bg-clip-text text-transparent text-glow">Nasza Misja</span>
            </h3>
            <p className="text-lg text-foreground/90 leading-relaxed">
              W <span className="text-primary font-bold text-xl animate-pulse-slow">DBC MARKETING</span> wierzymy, że każdy biznes 
              zasługuje na <span className="border-b-2 border-primary/50 pb-1">nowoczesne, efektywne rozwiązania marketingowe</span>. 
              Łączymy <span className="italic text-primary">najnowsze technologie</span> z kreatywnością, aby dostarczać 
              rezultaty, które <span className="font-bold text-secondary">przekraczają oczekiwania</span>.
            </p>
          </div>
          
          {/* Animated background particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-secondary rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        </Card>
      </div>

      {/* Enhanced Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-float animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-float animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default About;
