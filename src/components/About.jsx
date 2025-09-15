import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Zap } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from "@/components/ui/modal";
import trainingFacility from "@/assets/training-facility.jpg";
import researchLab from "@/assets/research-lab.jpg";

const About = () => {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Honor & Integrity",
      description: "We uphold the highest standards of ethical conduct and moral courage in all our endeavors."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in education, research, and service to our nation's defense."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "We develop leaders who can navigate complex challenges with wisdom and determination."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative approaches to defense education."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up relative">
            {/* Background decorative elements */}
            <div className="absolute -top-5 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-float" />
            <div className="absolute -top-8 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float stagger-3" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 hover-glow">
              About the Defense Academy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
              For over four decades, we have been at the forefront of military education and defense technology, 
              shaping the minds that protect our nation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-in-left stagger-1">
              <Card className="shadow-professional hover-lift hover-glow animate-fade-in-scale stagger-1">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3 animate-fade-in-up">Mission Statement</h4>
                  <p className="text-muted-foreground animate-fade-in-up stagger-1">
                    The Defense Academy of Technology is dedicated to educating and training the next generation 
                    of military leaders through rigorous academic programs, cutting-edge research, and character 
                    development. We foster innovation, critical thinking, and ethical leadership to meet the 
                    evolving challenges of national and global security.
                  </p>
                </CardContent>
              </Card>

              <Button 
                variant="military" 
                size="lg" 
                className="group hover-lift hover-glow animate-fade-in-scale stagger-2"
                onClick={() => setIsHistoryModalOpen(true)}
              >
                Learn More About Our History
              </Button>
            </div>

            <div className="space-y-6 animate-slide-in-right stagger-2">
              <Card className="shadow-professional hover-lift hover-glow animate-fade-in-scale stagger-3">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3 animate-fade-in-up">Vision Statement</h4>
                  <p className="text-muted-foreground animate-fade-in-up stagger-1">
                    To be the premier institution for defense education, recognized globally for our 
                    commitment to excellence, innovation, and the development of ethical military leaders.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-professional hover-lift hover-glow animate-fade-in-scale stagger-4">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3 animate-fade-in-up">Strategic Goals</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="animate-fade-in-up stagger-1">• Advance cutting-edge defense technologies and research</li>
                    <li className="animate-fade-in-up stagger-2">• Develop next-generation military leadership</li>
                    <li className="animate-fade-in-up stagger-3">• Foster international cooperation in defense education</li>
                    <li className="animate-fade-in-up stagger-4">• Promote ethical standards in military service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="animate-fade-in-up stagger-5">
            <h3 className="text-2xl font-semibold text-center text-primary mb-12 animate-slide-in-left hover-glow">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center shadow-professional hover-lift hover-glow animate-fade-in-scale transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h5 className="text-lg font-semibold text-primary mb-2 animate-fade-in-up">
                        {value.title}
                      </h5>
                      <p className="text-muted-foreground text-sm leading-relaxed animate-fade-in-up stagger-1">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* History Modal */}
      <Modal open={isHistoryModalOpen} onOpenChange={setIsHistoryModalOpen}>
        <ModalContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <ModalHeader>
            <ModalTitle className="text-2xl text-primary">Our Distinguished History</ModalTitle>
            <ModalDescription>
              Over four decades of excellence in military education and defense innovation
            </ModalDescription>
          </ModalHeader>

          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <img 
                  src={trainingFacility} 
                  alt="Historical Training Facility"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Foundation & Early Years (1978-1990)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Established in 1978 as a response to the growing need for advanced military education, 
                  the Defense Academy of Technology began with just 200 cadets and a vision to transform 
                  military education in Nigeria. Our founding fathers envisioned an institution that would 
                  combine rigorous academic excellence with practical military training.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl font-semibold text-primary mb-4">Expansion & Innovation (1990-2010)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The 1990s marked a period of significant expansion. We introduced cutting-edge technology 
                  programs, established international partnerships, and became the first military academy 
                  in West Africa to offer specialized cybersecurity training.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 1995: First Computer Science & Military Technology program launched</li>
                  <li>• 2001: International Exchange program established</li>
                  <li>• 2005: Advanced Simulation Center opened</li>
                  <li>• 2008: First female cadets admitted</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={researchLab} 
                  alt="Research Laboratory"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-subtle p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Modern Era & Future Vision (2010-Present)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, the Defense Academy stands as a beacon of excellence, having graduated over 15,000 
                officers who serve with distinction across Africa and internationally. Our commitment to 
                innovation continues with AI-enhanced training programs and sustainability initiatives.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15,000+</div>
                  <div className="text-sm text-muted-foreground">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Employment Rate</div>
                </div>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default About;