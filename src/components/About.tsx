import { Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">O nas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poznaj zespół, który stoi za LUZO MMA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="p-8 bg-card border-border card-glow animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Łukasz Dębiec</h3>
                <p className="text-secondary font-medium mb-2">CEO & Founder</p>
                <p className="text-muted-foreground">
                  Wizjoner i strateg, który kieruje agencją w stronę innowacyjnych rozwiązań marketingowych opartych na AI.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border card-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Target className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Zosia</h3>
                <p className="text-accent font-medium mb-2">Content & Creator Director</p>
                <p className="text-muted-foreground">
                  Kreatywna dusza agencji, odpowiedzialna za unikalne treści i strategie content marketingowe.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-card to-card/50 border-primary/20 max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-gradient">Nasza Misja</h3>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Budujemy nowoczesny marketing oparty na technologii i kreatywności. 
            Łączymy moc sztucznej inteligencji z ludzką kreatywnością, aby dostarczać 
            rozwiązania, które nie tylko spełniają oczekiwania, ale je przewyższają.
          </p>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
