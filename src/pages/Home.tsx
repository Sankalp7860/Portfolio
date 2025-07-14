import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, User, Github, Linkedin, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    {
      icon: Github,
      count: "10+",
      label: "GitHub Projects",
    },
    {
      icon: Linkedin,
      count: "300+",
      label: "LinkedIn Connections",
    },
    {
      icon: MessageSquare,
      count: "24×7",
      label: "WhatsApp Me",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-6  lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow px-8 rounded-full">
              Sankalp Gupta
            </span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I design & code for web
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Software Developer specializing in Full Stack Development with expertise in Next.js, Node.js and modern Web Technologies.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="shadow-button hover:scale-105 transition-all duration-300 hover:animate-glow">
              <a href="/resume.pdf" download="resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
              <Link to="/about">
                <User className="mr-2 h-5 w-5" />
                About Me
              </Link>
            </Button>
          </div>
          
          {/* Email */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="mailto:sankalpgupta7860@gmail.com"
              className="text-muted-foreground flex items-center justify-center hover:text-primary transition-colors"
            >
              <span className="mr-2 animate-bounce-subtle">📧</span>
              sankalpgupta7860@gmail.com
            </a>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <div className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:animate-bounce-subtle" />
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.count}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;