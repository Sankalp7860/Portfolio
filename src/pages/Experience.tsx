import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Infosys Springboard",
      location: "Remote",
      duration: "Oct 2024 - Dec2024",
      type: "Internship",
      achievements: [
        "Developed and deployed a secure, responsive full-stack health monitoring web app with real-time score tracking, dynamic quiz cards, and leaderboard functionality using React.js and Node.js.",
        "Enhanced user engagement through personalized health assessments across physical, mental, and nutritional domains, integrating user authentication and OTP-based password recovery."
      ],
      certificate: "../../public/image1.jpg",
      certificatePdf: "https://drive.google.com/file/d/1slIAD7OFOsleMZsFy33gkpZK_MB4EQ9h/view?usp=sharing",
    },
    
  ];

  const handleViewResult = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mr-4">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Professional Experience
            </h1>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Content Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-5 w-5 text-primary mr-2" />
                        <h2 className="text-xl font-bold text-foreground">
                          {experience.title}
                        </h2>
                      </div>
                      <h3 className="text-lg text-primary font-semibold mb-2">
                        {experience.company}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-foreground font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-3 mt-2">→</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Certificate Section */}
                <div className="lg:col-span-1">
                  <div className="relative h-64 lg:h-full rounded-xl overflow-hidden bg-secondary/50 border border-border">
                    <img
                      src={experience.certificate}
                      alt={`${experience.company} Certificate`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button variant="secondary" size="sm" className="w-full"
                      onClick={() => handleViewResult(experience.certificatePdf)}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;