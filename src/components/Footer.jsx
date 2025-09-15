import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import academyLogo from "@/assets/academy-logo.svg";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Academic Programs", href: "#programs" },
        { name: "Admissions", href: "#admissions" },
        { name: "Campus Life", href: "#campus" },
        { name: "Research", href: "#research" },
        { name: "Alumni", href: "#alumni" }
      ]
    },
    {
      title: "Academics",
      links: [
        { name: "Undergraduate Programs", href: "#undergraduate" },
        { name: "Graduate Programs", href: "#graduate" },
        { name: "Military Training", href: "#training" },
        { name: "Online Learning", href: "#online" },
        { name: "Academic Calendar", href: "#calendar" },
        { name: "Faculty & Staff", href: "#faculty" }
      ]
    },
    {
      title: "Student Services",
      links: [
        { name: "Student Portal", href: "#portal" },
        { name: "Library Resources", href: "#library" },
        { name: "Career Services", href: "#careers" },
        { name: "Health Services", href: "#health" },
        { name: "Student Support", href: "#support" },
        { name: "Housing", href: "#housing" }
      ]
    }
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Academy Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={academyLogo} 
                alt="Defense Academy Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Defense Academy of Technology</h3>
                <p className="text-sm text-primary-foreground/80">Excellence in Military Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Developing strategic leaders and advancing defense technologies since 1978. 
              Our commitment to excellence prepares graduates for distinguished service 
              in military and civilian leadership roles.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Kaduna State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+234 704 955 7974</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Michealadebayo070@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 text-primary-foreground/80 hover:text-accent hover:bg-primary-light/20 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-primary-light/20 border-primary-light/30">
          <div className="p-6">
            <div className="max-w-2xl">
              <h4 className="text-xl font-semibold mb-2">Stay Connected</h4>
              <p className="text-primary-foreground/90 mb-4">
                Subscribe to our newsletter for the latest updates on programs, events, and academy news.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-md bg-background text-foreground border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <Button variant="hero" className="sm:px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2025 Defense Academy of Technology. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Accessibility
              </a>
              <a href="#sitemap" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;