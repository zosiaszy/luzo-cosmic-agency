import { useState } from "react";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy wkrótce.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow animate-shimmer">Kontakt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic animate-pulse-slow">
            Skontaktuj się z nami - <span className="text-primary border-b-2 border-primary/50">odpowiadamy na każdą wiadomość!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-scale-in card-highlight hover-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-glow">
                  Imię i nazwisko
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jan Kowalski"
                  className="bg-background border-border hover:border-primary/50 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-glow">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jan@example.com"
                  className="bg-background border-border hover:border-primary/50 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-glow">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Porozmawiaj z nami..."
                  rows={11}
                  className="bg-background border-border resize-none hover:border-primary/50 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:scale-105 text-primary-foreground font-semibold py-6 animate-gradient-x hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                Wyślij wiadomość
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card border-border card-highlight hover-glow hover-lift transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                  <Mail className="text-primary animate-glow" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-glow">Email</h3>
                  <a href="mailto:kontakt@dbcmarketing.pl" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                    kontakt@dbcmarketing.pl
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-highlight hover-glow hover-lift transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                  <Phone className="text-secondary animate-glow" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 text-glow">Telefon</h3>
                  <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                    +48 123 456 789
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-highlight hover-glow hover-lift transition-all duration-300">
              <h3 className="font-display font-semibold mb-4 text-glow">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-all duration-300 group hover-lift"
                >
                  <Instagram className="text-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-glow" size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group hover-lift"
                >
                  <Linkedin className="text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-glow" size={24} />
                </a>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 card-highlight hover-glow hover:scale-105 transition-all duration-300">
              <h3 className="font-display font-bold text-xl mb-3 bg-gradient-primary bg-clip-text text-transparent text-glow animate-shimmer">
                Gotowy na rozmowę?
              </h3>
              <p className="text-muted-foreground italic">
                Umów się na <span className="text-primary font-semibold">darmową konsultację</span> i poznaj możliwości rozwoju Twojej marki za pomocą naszych rozwiązań.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 animate-float" />
    </section>
  );
};

export default Contact;
