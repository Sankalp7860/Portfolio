import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (Computer Science and Engineering)",
      institution: "Indian Institute of Information Technology Guwahati",
      location: "Guwahati, Assam, India",
      duration: "July 2022 - June 2026",
      cgpa: "  CGPA: 8.16 ",
      description: "During my time at IIITG, I have built a strong foundation in computer science, focusing on software development, problem-solving, and real-world applications. Engaging in hands-on projects, internships, and coding challenges has helped me enhance my technical and analytical skills. This experience prepares me for a future in software development, equipping me with the ability to create scalable and efficient solutions.",
      subjects: ["DSA", "OOPs", "DBMS", "AI", "ML", "OS", "Networking"],
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486005/Portfolio/college1_h0fmis.png",
      resultPdf: "https://drive.google.com/file/d/1ogIkT_7SmTiZBBC8cBMN2ZnIl5o3c1Av/view?usp=sharing",
    },
    {
      degree: "Higher Secondary Education (CBSE)",
      institution: "Birla Public School (Vidya Niketan)",
      location: "Pilani, Rajasthan, India",
      duration: "April 2020 - March 2021",
      cgpa: "Percentage: 91%",
      description: "My higher secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on mathematics and computer science has been instrumental in shaping my passion for software development, enabling me to approach complex technical challenges with confidence.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486012/Portfolio/school2_y8g2xy.jpg",
      resultPdf: "https://drive.google.com/file/d/1vhORPwv6_yoOIaEJeW4sTVUVO75qkQy8/view?usp=sharing",
    },
    {
      degree: " Secondary Education (CBSE)",
      institution: "Birla Public School (Vidya Niketan)",
      location: "Pilani, Rajasthan, India",
      duration: "April 2018 - March 2019",
      cgpa: "Percentage: 92%",
      description: "My secondary education was a pivotal phase that nurtured my curiosity, discipline, and love for learning. It provided a well-rounded academic base, with a strong emphasis on science and mathematics, which played a crucial role in developing my logical reasoning and analytical skills — laying the groundwork for my future in computer science and engineering.",
      subjects: ["Mathematics", "Science", "English", "Social Science", "Hindi"],
      image: "https://res.cloudinary.com/du8rtdsqg/image/upload/v1752486005/Portfolio/school1_ai6pdp.jpg",
      resultPdf: "https://drive.google.com/file/d/1g7ItTU-Btu83UBWf-heK0yrkkyVXwytG/view?usp=sharing",
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
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Education
            </h1>
          </div>
        </div>

        <div className="space-y-12">
          {educationData.map((education, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Image Section */}
                <div className="lg:col-span-1">
                  <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
                    <img
                      src={education.image}
                      alt={education.institution}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">
                        {education.institution}
                      </h3>
                      <div className="flex items-center text-sm opacity-90">
                        <MapPin className="h-4 w-4 mr-1" />
                        {education.location}
                      </div>
                      <div className="mt-2 text-sm opacity-90">
                        {education.cgpa}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-2">
                        {education.degree}
                      </h2>
                      <div className="flex items-center text-primary mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        {education.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {education.description}
                  </p>

                  {/* Subjects */}
                  <div>
                    <h4 className="text-foreground font-semibold mb-3">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {education.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewResult(education.resultPdf)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Result
                    </Button>
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

export default Education;