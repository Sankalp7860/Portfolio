import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Code, Award, Users,User,ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  const quickFacts = [
    "From IIIT Guwahati, Assam, India",
    "B.Tech in Computer Science & Engineering",
    "CGPA: 8.16",
  ];

  const achievements = [
    {
      icon: Code,
      title: "10+ Projects",
      description: "Completed full-stack web applications",
    },
    {
      icon: Users,
      title: "1 Internship",
      description: "Professional work experience",
    },
    {
      icon: Award,
      title: "8.16 CGPA",
      description: "Academic excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-96 h-96 rounded-2xl bg-gradient-card border border-border overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="/lovable-uploads/profile-photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "../../public/profile.PNG";
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi! I'm a passionate full-stack developer with expertise in building modern web applications. My journey in tech started during my college years, where I discovered my love for creating innovative solutions through code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my B.Tech in Computer Science, I've maintained a strong academic record while actively engaging in real-world projects and internships. This blend of theoretical knowledge and practical experience has shaped my approach to problem-solving and software development.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React, Node.js, and modern web technologies, with a keen interest in creating performant and user-friendly applications. My experience includes working with various startups and contributing to open-source projects.
              </p>
            </div>

            {/* Quick Facts */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                {quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8  mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="shadow-button hover:scale-105 transition-all duration-300 hover:animate-glow">
              <a href="/resume.pdf" download="resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
              <Link to="/skills">
                <ScrollText className="mr-2 h-5 w-5" />
                My Skills
              </Link>
            </Button>
          </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;