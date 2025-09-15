import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-academy.jpg";
import ApplicationModal from "@/components/ApplicationModal";

const Hero = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const handleExplorePrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior);
    }
  };

  const handleScrollDown = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior);
    }
  };

  return (<section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Defense Academy Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-float blur-sm" />
          <div className="absolute -top-5 -right-15 w-16 h-16 bg-accent/20 rounded-full animate-float stagger-2 blur-sm" />
          <div className="absolute top-20 -left-20 w-12 h-12 bg-white/15 rounded-full animate-float stagger-4 blur-sm" />

          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20 animate-fade-in-scale hover-glow">
            <Award className="h-5 w-5 mr-2 animate-pulse-gentle" />
            <span className="text-sm font-medium">Excellence in Military Education Since 1978</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md, rigorous training, and unwavering commitment to excellence.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm) => setIsApplicationOpen(true)}
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary hover-lift"
              onClick={handleExplorePrograms}
            >
              Explore Programs
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-fade-in-scale stagger-4 hover-lift hover-glow">
              <Users className="h-8 w-8 mx-auto mb-2 text-accent animate-pulse-gentle" />
              <div className="text-3xl font-bold mb-1">2,500+</div>
              <div className="text-sm text-white/80">Active Cadets</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-fade-in-scale stagger-5 hover-lift hover-glow">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-accent animate-pulse-gentle" />
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-white/80">Academic Programs</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 animate-fade-in-scale stagger-6 hover-lift hover-glow">
              <Award className="h-8 w-8 mx-auto mb-2 text-accent animate-pulse-gentle" />
              <div className="text-3xl font-bold mb-1">45+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-transform cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white/70">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce group-hover:bg-white"></div>
        </div>
      </button>

      {/* Application Modal */}
      <ApplicationModal isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)} />
    </section>
  );
};

export default Hero;


