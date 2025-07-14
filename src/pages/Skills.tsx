import { Card } from "@/components/ui/card";
import { Code, Monitor, Server, Database, GitBranch, Wrench, Terminal, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 88 },
      ],
    },
    {
      title: "Front-End Development",
      icon: Monitor,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind", level: 92 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Back-End Development",
      icon: Server,
      skills: [
        { name: "React.js", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Express.js", level: 88 },
      ],
    },
    {
      title: "Databases & Cloud Storage",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Cloudinary", level: 78 },
        { name: "AWS", level: 80 },
      ],
    },
    {
      title: "Version Control & Deployment",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Netlify", level: 75 },
        { name: "Vercel", level: 85 },
      ],
    },
    {
      title: "Tools & Utilities",
      icon: Wrench,
      skills: [
        { name: "VS Code", level: 80 },
        { name: "Figma", level: 85 },
        // { name: "Photoshop", level: 75 },
        // { name: "Illustrator", level: 70 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Teamwork", level: 90 },
        { name: "Troubleshooting", level: 88 },
        { name: "Progressive", level: 85 },
        { name: "Communication", level: 87 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-6 w-6 text-primary mr-3 group-hover:animate-bounce-subtle" />
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center justify-center p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;