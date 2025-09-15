import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui/modal";
import { useToast } from "@/hooks/use-toast";
import { Send, Upload } from "lucide-react";

const ApplicationModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName, lastName);

  const programs = [
    "Strategic Defense Studies",
    "Military Technology & Engineering", 
    "Aerospace & Aviation Sciences",
    "Military Leadership",
    "Defense Management",
    "International Security"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.program) {
      toast({
        title, description);
      return;
    }

    // Simulate form submission
    toast({
      title, description);
    
    // Reset form and close modal
    setFormData({
      firstName, lastName);
    onClose();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]));
  };

  return (<Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <ModalHeader>
          <ModalTitle className="text-2xl text-primary">Admission Requirements & Application</ModalTitle>
          <ModalDescription>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-2">Academic Requirements, varies for officers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Documents Required)</li>
                  <li>• Medical examination report</li>
                  <li>• Birth certificate and citizenship proof</li>
                </ul>
              </div>
            </div>
          </ModalDescription>
        </ModalHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">First Name *</label>
              <Input 
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Last Name *</label>
              <Input 
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email Address *</label>
            <Input 
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Phone Number</label>
            <Input 
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Preferred Program *</label>
            <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a program" />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program} value={program}>
                    {program}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Military Experience</label>
            <Textarea 
              value={formData.militaryExperience}
              onChange={(e) => handleInputChange("militaryExperience", e.target.value)}
              placeholder="Describe any military experience or background (optional)"
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Personal Statement</label>
            <Textarea 
              value={formData.personalStatement}
              onChange={(e) => handleInputChange("personalStatement", e.target.value)}
              placeholder="Tell us why you want to join the Defense Academy and your career goals..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Supporting Documents</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Upload transcripts, certificates, or other documents</p>
              <Button type="button" variant="outline" size="sm">
                Choose Files
              </Button>
            </div>
          </div>

          <ModalFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="military" className="group">
              Submit Application
              <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationModal;


