import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui/modal";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import campusAerial from "@/assets/campus-aerial.jpg";
import trainingFacility from "@/assets/training-facility.jpg";
import academyLibrary from "@/assets/academy-library.jpg";

const TourModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  const availableTimes = [
    "9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"
  ];

  const tourHighlights = [
    { image: campusAerial, title: "Campus Overview", description: "See our state-of-the-art facilities and beautiful grounds" },
    { image: trainingFacility, title: "Training Facilities", description: "Experience our advanced simulation and training centers" },
    { image: academyLibrary, title: "Academic Centers", description: "Visit our library and research facilities" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !contactInfo.name || !contactInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields."
      });
      return;
    }

    toast({
      title: "Tour Scheduled!",
      description: `Your campus tour has been scheduled for ${selectedDate} at ${selectedTime}. We'll send confirmation details to ${contactInfo.email}.`
    });
    
    // Reset form and close modal
    setSelectedDate("");
    setSelectedTime("");
    setGroupSize("");
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      specialRequests: ""
    });
    onClose();
  };

  return (<Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <ModalHeader>
          <ModalTitle className="text-2xl text-primary">Schedule a Campus Tour</ModalTitle>
          <ModalDescription>
            Experience the Defense Academy firsthand with a guided tour of our facilities, meet faculty, and learn about student life.
          </ModalDescription>
        </ModalHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tour Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">What You'll See</h3>
              <div className="space-y-3">
                {tourHighlights.map((highlight, index) => (
                  <div key={index} className="flex gap-4 p-4 border rounded-lg">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-subtle p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Tour Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>Duration: 90 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Meet at Main Administration Building</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span>Group tours and individual visits available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Preferred Date *</label>
              <Input 
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Preferred Time *</label>
              <select 
                className="w-full p-2 border border-border rounded-md bg-background"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Group Size</label>
              <Input 
                type="number"
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                placeholder="Number of people (optional)"
                min="1"
                max="50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Contact Name *</label>
              <Input 
                value={contactInfo.name}
                onChange={(e) => setContactInfo(prev => ({...prev, name: e.target.value}))}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address *</label>
              <Input 
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo(prev => ({...prev, email: e.target.value}))}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone Number</label>
              <Input 
                value={contactInfo.phone}
                onChange={(e) => setContactInfo(prev => ({...prev, phone: e.target.value}))}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Special Requests</label>
              <Textarea 
                value={contactInfo.specialRequests}
                onChange={(e) => setContactInfo(prev => ({...prev, specialRequests: e.target.value}))}
                placeholder="Any special accommodations or areas of interest?"
                className="min-h-[80px]"
              />
            </div>

            <ModalFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="military" className="group">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Tour
              </Button>
            </ModalFooter>
          </form>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default TourModal;


