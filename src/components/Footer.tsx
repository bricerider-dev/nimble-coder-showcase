import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 flex-wrap justify-center">
              © {currentYear} Portfolio. Fait avec <Heart size={16} className="text-primary" /> par un développeur passionné
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
