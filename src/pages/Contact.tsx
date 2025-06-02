
import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    hearAbout: "",
    mobileNumber: "",
    campaign: "",
    source: "publifyx"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    console.log("Submitting form data:", formData);

    try {
      // You'll need to replace this with your actual Google Apps Script URL
      const googleAppsScriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
      
      const response = await fetch(googleAppsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent and saved to Google Sheets.",
        });
        
        // Reset form
        setFormData({
          companyName: "",
          companyEmail: "",
          hearAbout: "",
          mobileNumber: "",
          campaign: "",
          source: "publifyx"
        });
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Side - Blue Section */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Let's grow your brand together
                </h1>
                <p className="text-blue-100 mb-8 text-base">
                  Fill out the form, including details about your next campaign, and we'll be in touch shortly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-blue-100 text-sm">
                        Publifyx Tech Pvt. Ltd., Inventio Workspace Ltd., Sector -12 , Dwarka, New Delhi-110075
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-blue-100 text-sm">+91-8448330304</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-blue-100 text-sm">info@publifyx.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orange Circle Decoration */}
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-500 rounded-full transform translate-x-24 translate-y-24"></div>
            </div>

            {/* Right Side - Form Section */}
            <div className="lg:col-span-3 bg-white p-8 pb-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Please enter the details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden source field */}
                <input type="hidden" name="source" value={formData.source} />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name*
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="w-full border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Email*
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.companyEmail}
                    onChange={(e) => handleInputChange("companyEmail", e.target.value)}
                    className="w-full border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us ?
                  </label>
                  <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange("hearAbout", value)}>
                    <SelectTrigger className="w-full border-gray-300">
                      <SelectValue placeholder="LinkedIn" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="conference">Conference/Event</SelectItem>
                      <SelectItem value="press">Press/Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 px-3 rounded-l-md">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0ZGOTkzMyIvPgo8cmVjdCB5PSI0LjY2NjY3IiB3aWR0aD0iMjAiIGhlaWdodD0iNC42NjY2NyIgZmlsbD0iI0ZGRkZGRiIvPgo8cmVjdCB5PSI5LjMzMzMzIiB3aWR0aD0iMjAiIGhlaWdodD0iNC42NjY2NyIgZmlsbD0iIzEzOEE0NiIvPgo8L3N2Zz4K" alt="IN" className="w-5 h-4 mr-2" />
                      <span className="text-sm text-gray-600">+91</span>
                    </div>
                    <Input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                      className="flex-1 border-l-0 rounded-l-none border-gray-300"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Please enter the mobile number with your country code</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your campaign briefly*
                  </label>
                  <Textarea
                    value={formData.campaign}
                    onChange={(e) => handleInputChange("campaign", e.target.value)}
                    rows={4}
                    className="w-full border-gray-300"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
