import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone, Mail } from "lucide-react";
import academyLogo from "@/assets/academy-logo.png";
import ApplicationModal from "@/components/ApplicationModal";
import SearchModal from "@/components/SearchModal";
import LoginModal from "@/components/LoginModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admissions", href: "#programs" }, // Maps to Programs section which contains admission info
    { name: "Academics", href: "#programs" }, // Maps to Programs section which contains academic programs
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior);
      setIsMenuOpen(false);
    }
  };

  return (<>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+234 704 955 7974</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Michealadebayo070@gmail.com</span>
            </div>
          </div>
          <div className="hidden md) => setIsLoginOpen(true)}
            >
              Student Login
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-header sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img 
                src={academyLogo} 
                alt="Defense Academy Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-primary">Defense Academy of Technology</h1>
                <p className="text-sm text-muted-foreground">Excellence in Military Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                variant="military"
                onClick={() => setIsApplicationOpen(true)}
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (<nav className="lg) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button 
                    variant="military" 
                    className="w-full"
                    onClick={() => setIsApplicationOpen(true)}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Modals */}
      <ApplicationModal isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;


