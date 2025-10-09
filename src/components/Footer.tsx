import { Instagram, Linkedin, Mail } from "lucide-react";
import dbcIcon from "@/assets/dbc-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <img 
                src={dbcIcon} 
                alt="DBC Marketing Logo" 
                className="w-10 h-10 animate-pulse-slow"
              />
              <h3 className="text-2xl font-display font-bold text-gradient">
                DBC MARKETING
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Łukasz Dębiec DBC. Wszystkie prawa zastrzeżone.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="text-foreground/70 group-hover:text-accent group-hover:scale-110 transition-all" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-foreground/70 group-hover:text-primary group-hover:scale-110 transition-all" size={20} />
            </a>
            <a
              href="mailto:kontakt@dbcmarketing.pl"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors group"
              aria-label="Email"
            >
              <Mail className="text-foreground/70 group-hover:text-secondary group-hover:scale-110 transition-all" size={20} />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-medium">
            Powered by <b>Our Creativity 🚀</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
