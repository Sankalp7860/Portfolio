import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold text-foreground">
                <span className="text-primary">&lt;/&gt;</span> Sankalp Gupta
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Software Developer from IIIT Guwahati.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>sankalpgupta7860@gmail.com</p>
              <p>+918858071818</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Sankalp7860"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sankalp-gupta-363839262/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:code.sankalpgupta7860@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sankalp Gupta. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Sankalp's Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;