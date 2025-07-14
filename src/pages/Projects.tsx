import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Recreo",
      description: "Recreo is a cross-platform mobile app that helps users discover, plan, and manage recreation and wellness activities. It features an intuitive interface and provides curated experiences to promote well-being and a balanced lifestyle.",
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486026/Portfolio/image2_km8mwj.png",
      technologies: ["React Native", "Expo", "Tailwind CSS"],
      liveLink: "",
      watchDemo: "https://drive.google.com/file/d/13ZY357nKGq6DYsoDj2G-9OhK8tg5oga7/view?usp=sharing",
      codeLink: "https://github.com/Sankalp7860/Project-07-Recreo",
    },


    {
      title: "MoodTunes",
      description: "AI-based music player that detects emotions in real time, plays mood-matching songs via YouTube, and offers public/private rooms for social jamming.",
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486028/Portfolio/image3_b3yalk.png",
      technologies: [  "React.js","OpenCV", "DeepFace","React-Webcam","Tailwind CSS"],
      liveLink: "",
      watchDemo:"https://drive.google.com/file/d/1-D09BTTQb2UmyDw_A61FT2eNsJD2TLsH/view?usp=sharing",
      codeLink: "https://github.com/Sankalp7860/Project-05-MoodTunes",
    },

    {
      title: "HealthGuardPro",
      description: "HealthGuardPro is a full-stack wellness platform offering personalized health insights through quizzes, real-time scoring, secure login, and a gamified leaderboard.",
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486029/Portfolio/image4_piud0c.png",
      technologies: ["React.js", "Node.js","Express.js","MongoDB","Tailwind CSS","Nodemailer"],
      liveLink: "",
      watchDemo: "https://drive.google.com/file/d/17QmQ6bYT4yN815a_OEY0LsrzeqpbXtzd/view?usp=sharing",
      codeLink: "https://github.com/Sankalp7860/Project-03-HealthGuardPro",
    },
    {
      title: "CruiseUp",
      description: "CruiseUp is a full-stack car rental platform enabling users to seamlessly search, rent, and manage vehicles. It includes secure authentication, real-time availability, and efficient backend integration.",
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486028/Portfolio/image5_g7r0tp.png",
      technologies: ["React.js","Node.js","Express.js","MySQL","Tailwind CSS","Cloudinary"],
      liveLink: "https://cruiseup.netlify.app/",
      watchDemo: "",
      codeLink: "https://github.com/Sankalp7860/Project-02-Car_Rental",
    },

    {
      title: "Hotel Review Platform",
      description: "Built a hotel review web app with geolocation search, secure authentication, and optimized image handling.",
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486039/Portfolio/image1_lwqdyj.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB", "Node.js", "EJS"],
      liveLink: "https://primelodging.onrender.com/listings",
      watchDemo: "",
      codeLink: "https://github.com/Sankalp7860/Project-01-Hotel_Management"
    },

  ];

  const handleButtonClick = (project) => {
    if (project.liveLink && project.liveLink !== "") {
      window.open(project.liveLink, "_blank");
    } else if (project.watchDemo && project.watchDemo !== "") {
      window.open(project.watchDemo, "_blank");
    }
  };

  const handleCodeClick = (codeLink) => {
    if (codeLink && codeLink !== "#") {
      window.open(codeLink, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mr-4 animate-bounce-subtle">
              <Folder className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-slide-up">
              Featured Projects
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:scale-105 transition-all duration-300"
                    onClick={() => handleCodeClick(project.codeLink)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 hover:scale-105 transition-all duration-300 hover:animate-glow"
                    onClick={() => handleButtonClick(project)}
                  >
                    {project.liveLink && project.liveLink !== "" ? (
                      <>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Demo
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;