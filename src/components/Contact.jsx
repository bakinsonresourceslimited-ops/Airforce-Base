import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TourModal from "@/components/TourModal";

const Contact = () => {
  const { toast } = useToast();
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName, lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title, description);
    setFormData({ firstName, lastName);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      details: "Defense Academy of Technology\nKaduna State, Nigeria\nPostal Code: 800001"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "Main Office: +234 704 955 7974\nAdmissions: +234 704 955 7974\nEmergency: +234 704 955 7974"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: "General: Michealadebayo070@gmail.com\nAdmissions: Michealadebayo070@gmail.com\nAcademics: Michealadebayo070@gmail.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed"
    }
  ];

  return (<section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md, academic advisors, or general information services. 
              We're here to help you begin your journey with the Defense Academy.
            </p>
          </div>

          <div className="grid lg) => setFormData(prev => ({...prev, firstName))}
                        placeholder="Enter your first name" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input 
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({...prev, lastName))}
                        placeholder="Enter your last name" 
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email))}
                      placeholder="Enter your email address" 
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone))}
                      placeholder="Enter your phone number" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input 
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({...prev, subject))}
                      placeholder="What is this regarding?" 
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({...prev, message))}
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="military" size="lg" className="w-full group">
                    Send Message
                    <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Whether you're interested in our programs, have questions about admissions, 
                  or need general information, our team is ready to assist you.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="shadow-professional">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-2">{info.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Quick Actions */}
              <Card className="shadow-professional bg-gradient-subtle">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => toast({ title, description)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule a Phone Call
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setIsTourOpen(true)}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Book a Campus Tour
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => toast({ title, description)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Request Information Packet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <TourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </section>
  );
};

export default Contact;


