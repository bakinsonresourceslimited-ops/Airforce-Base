import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalHeader, ModalTitle } from "@/components/ui/modal";
import { Search, BookOpen, Users, FileText, MapPin, Calendar, Phone } from "lucide-react";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const allContent = [
    // Programs & Academics
    { type: "Program", title: "Strategic Defense Studies", description: "Bachelor's degree in defense policy and strategic analysis", icon: BookOpen },
    { type: "Program", title: "Military Technology & Engineering", description: "Engineering program focused on defense technologies", icon: BookOpen },
    { type: "Program", title: "Aerospace & Aviation Sciences", description: "Specialized program for future pilots and aerospace engineers", icon: BookOpen },
    { type: "Program", title: "Academic Programs", description: "Comprehensive military and defense education programs", icon: BookOpen },
    { type: "Program", title: "Academics", description: "Academic departments and degree programs", icon: BookOpen },
    
    // Admissions
    { type: "Admissions", title: "Admissions Requirements", description: "Entry requirements and application process for the academy", icon: FileText },
    { type: "Admissions", title: "Application Process", description: "Step-by-step guide to applying to Defense Academy", icon: FileText },
    { type: "Admissions", title: "Admission Guidelines", description: "Complete admission requirements and deadlines", icon: FileText },
    { type: "Admissions", title: "How to Apply", description: "Application procedures and required documents", icon: FileText },
    
    // Faculty
    { type: "Faculty", title: "Dr. Sarah Johnson", description: "Professor of Strategic Studies, Department Head", icon: Users },
    { type: "Faculty", title: "Col. Michael Roberts", description: "Military Leadership and Ethics Instructor", icon: Users },
    { type: "Faculty", title: "Faculty Directory", description: "Meet our experienced military and academic instructors", icon: Users },
    
    // Campus & Facilities
    { type: "Campus", title: "Campus Life", description: "Student life, facilities, and campus activities", icon: MapPin },
    { type: "Campus", title: "Training Facilities", description: "State-of-the-art military training and simulation centers", icon: MapPin },
    { type: "Campus", title: "Academy Library", description: "Comprehensive military and academic research library", icon: BookOpen },
    { type: "Campus", title: "Campus Tour", description: "Explore our modern campus and training facilities", icon: MapPin },
    
    // Resources
    { type: "Resource", title: "Academic Calendar 2025", description: "Important dates for the academic year", icon: Calendar },
    { type: "Resource", title: "Student Handbook", description: "Comprehensive guide for student life and policies", icon: FileText },
    { type: "Resource", title: "Campus Map", description: "Interactive map of academy facilities", icon: MapPin },
    { type: "Resource", title: "Contact Information", description: "Get in touch with different departments", icon: Phone },
    
    // News & Events
    { type: "News", title: "Defense Academy Graduates 500 Officers", description: "Latest graduating class ceremony highlights", icon: FileText },
    { type: "News", title: "New Cybersecurity Research Center Opens", description: "State-of-the-art facility for defense technology research", icon: FileText },
    { type: "News", title: "Academy News", description: "Latest news and updates from Defense Academy", icon: FileText },
    
    // About
    { type: "About", title: "About Us", description: "Learn about Defense Academy's mission and history", icon: Users },
    { type: "About", title: "Mission Statement", description: "Our commitment to excellence in military education", icon: Users },
    { type: "About", title: "History", description: "The proud history and traditions of Defense Academy", icon: Users },
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const getTypeColor = (type) => {
    switch (type) {
      case "Program": return "bg-primary/10 text-primary";
      case "Faculty": return "bg-accent/10 text-accent";
      case "Resource": return "bg-secondary/10 text-secondary-foreground";
      case "News": return "bg-destructive/10 text-destructive";
      case "Admissions": return "bg-military-gold/10 text-military-gold";
      case "Campus": return "bg-military-blue/10 text-military-blue";
      case "About": return "bg-primary/10 text-primary";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const handleResultClick = (result) => {
    // Navigate to the appropriate section based on type and content
    if (result.type === "Program" || result.type === "Admissions" || result.title.includes("Academic")) {
      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
    } else if (result.type === "News") {
      document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
    } else if (result.type === "About" || result.title.includes("Mission") || result.title.includes("History")) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (result.type === "Campus" || result.title.includes("Campus") || result.title.includes("Facilities")) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); // Campus info is in about section
    } else if (result.title.includes("Contact") || result.title.includes("Phone")) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Default to programs section for most queries
      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <ModalHeader>
          <ModalTitle className="text-xl text-primary">Search Defense Academy</ModalTitle>
        </ModalHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for programs, faculty, resources, news..."
              className="pl-10"
              autoFocus
            />
          </div>

          {searchQuery && (<div className="max-h-96 overflow-y-auto space-y-2">
              {searchResults.length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground mb-3">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                  </p>
                  {searchResults.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="p-4 border rounded-lg hover:bg-accent/5 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {result.title}
                              </h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(result.type)}`}>
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                  <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try searching for programs, faculty, news, or resources
                  </p>
                </div>
              )}
            </div>
          )}

          {!searchQuery && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Popular Searches</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Admissions", "Programs", "Faculty", "Campus Life", "Research", "Contact"].map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(term)}
                    className="justify-start"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;


