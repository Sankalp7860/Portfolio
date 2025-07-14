import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock toast function since we don't have the actual hook
  const toast = (options) => {
    alert(options.title + ": " + options.description);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_w1i4sft'; // Get from Email Services
      const templateID = 'template_df5x4ge'; // Get from Email Templates
      const publicKey = 'e5BSQTupdWVqVDbFG'; // Get from Account settings

      // Create email parameters
      const emailParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sankalpgupta7860@gmail.com', // Your email
      };

      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: emailParams,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sankalpgupta7860@gmail.com",
      href: "mailto:sankalpgupta7860@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+918858071818",
      href: "tel:+918858071818",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hardoi, Uttar Pradesh, India",
      href: "#",
    },
    {
      icon: Clock,
      label: "Time Zone",
      value: "IST (UTC+5:30)",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sankalp7860",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sankalp-gupta-363839262/",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      href: "https://wa.me/918858071818",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mr-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Connect with Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/50"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/50 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
                  size="lg" 
                  className="w-full shadow-button"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;