import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Cpu, Shield, Plane, Briefcase, Globe } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";
import TourModal from "@/components/TourModal";

const Programs = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const programs = [
    {
      icon: Shield,
      title: "Strategic Defense Studies",
      duration: "4 Years",
      type: "Bachelor's",
      description: "Comprehensive program covering national security policy, defense planning, and strategic analysis.",
      highlights: ["Intelligence Analysis", "Geopolitical Studies", "Defense Economics", "Crisis Management"],
      badge: "Featured"
    },
    {
      icon: Cpu,
      title: "Military Technology & Engineering",
      duration: "4 Years",
      type: "Bachelor's",
      description: "Advanced engineering program focused on defense technologies, cybersecurity, and military systems.",
      highlights: ["Cybersecurity", "Weapons Systems", "Communications", "Robotics"],
      badge: "STEM"
    },
    {
      icon: Plane,
      title: "Aerospace & Aviation Sciences",
      duration: "4 Years", 
      type: "Bachelor's",
      description: "Specialized program for future pilots and aerospace engineers in military aviation.",
      highlights: ["Flight Training", "Aircraft Systems", "Navigation", "Aerodynamics"],
      badge: "Elite"
    },
    {
      icon: GraduationCap,
      title: "Military Leadership",
      duration: "2 Years",
      type: "Master's",
      description: "Advanced leadership development for senior military officers and defense professionals.",
      highlights: ["Command Strategy", "Personnel Management", "Military Ethics", "Joint Operations"],
      badge: "Executive"
    },
    {
      icon: Briefcase,
      title: "Defense Management",
      duration: "2 Years",
      type: "Master's",
      description: "Business and management principles applied to defense organizations and military logistics.",
      highlights: ["Resource Planning", "Supply Chain", "Financial Management", "Procurement"],
      badge: "Professional"
    },
    {
      icon: Globe,
      title: "International Security",
      duration: "3 Years",
      type: "Doctorate",
      description: "Research-focused program examining global security challenges and international relations.",
      highlights: ["Policy Research", "Diplomatic Security", "Conflict Resolution", "Regional Studies"],
      badge: "Research"
    }
  ];

  const getBadgeVariant = (badge) => {
    switch (badge) {
      case "Featured": return "default";
      case "STEM": return "secondary";
      case "Elite": return "destructive";
      case "Executive": return "outline";
      default: return "secondary";
    }
  };

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Academic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover world-class programs designed to prepare leaders for careers in defense, 
              security, and military service.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className={`h-full shadow-professional hover-lift hover-glow transition-all duration-300 group animate-fade-in-scale stagger-${(index % 3) + 1}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={getBadgeVariant(program.badge)}>{program.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{program.type}</span>
                      <span>•</span>
                      <span>{program.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-sm text-primary">Key Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => setIsApplicationOpen(true)}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-subtle rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our admissions team is here to help you find the right program and guide you through 
              the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="military" 
                size="lg"
                onClick={() => setIsApplicationOpen(true)}
              >
                View Admission Requirements
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsTourOpen(true)}
              >
                Schedule a Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ApplicationModal isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)} />
      <TourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </section>
  );
};

export default Programs;