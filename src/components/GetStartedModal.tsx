
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    billingAddress: "",
    state: "",
    city: "",
    pincode: "",
    gstin: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting Get Started form data:", formData);

    // Transform data according to the provided structure
    const values = {
      fullName: formData.name,
      email: formData.email,
      companyName: formData.companyName,
      mobile: formData.phoneNumber.replace(/\D/g, ''), // Remove non-numeric
      billingAddress: formData.billingAddress,
      state: formData.state,
      city: formData.city,
      pincode: formData.pincode,
      gstId: formData.gstin || "", // Optional
    };

    const payload = {
      first_name: values.fullName,
      email: values.email,
      mobile: `+91${values.mobile}`,
      name: values.companyName,
      billing_address1: values.billingAddress,
      billing_city: values.city,
      billing_state: values.state,
      billing_zipcode: values.pincode,
      gst_no: values.gstId,
    };

    try {
      const response = await fetch("https://app.publifyx.com/api/v1/create_agency/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Get Started form submitted successfully");
        toast({
          title: "Success!",
          description: "Your details have been submitted successfully!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          companyName: "",
          phoneNumber: "",
          billingAddress: "",
          state: "",
          city: "",
          pincode: "",
          gstin: ""
        });
        
        onClose();
      } else {
        const errData = await response.json();
        console.error("API error:", errData);
        toast({
          title: "Submission Failed",
          description: errData?.message || "Unknown error occurred",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast({
        title: "Network Error",
        description: "A network error occurred. Please try again.",
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        <DialogHeader className="relative">
          <button 
            onClick={onClose}
            className="absolute -top-2 -right-2 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          <DialogTitle className="text-2xl font-bold text-blue-600 mb-2">
            Get started for free
          </DialogTitle>
          <p className="text-gray-600 text-left">
            Get started with your free agency dashboard—upgrade anytime to unlock full white-label branding! Contact us at{" "}
            <a href="mailto:support@publifyx.com" className="text-blue-600 hover:underline">
              support@publifyx.com
            </a>
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <Input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex">
                <div className="flex items-center bg-gray-50 border border-r-0 border-gray-300 px-3 rounded-l-md">
                  <span className="text-sm text-gray-600">+91</span>
                </div>
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="flex-1 border-l-0 rounded-l-none"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Billing Address
            </label>
            <Textarea
              name="billingAddress"
              placeholder="Enter your billing address"
              value={formData.billingAddress}
              onChange={(e) => handleInputChange("billingAddress", e.target.value)}
              rows={3}
              className="w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <Select name="state" value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                  <SelectItem value="arunachal-pradesh">Arunachal Pradesh</SelectItem>
                  <SelectItem value="assam">Assam</SelectItem>
                  <SelectItem value="bihar">Bihar</SelectItem>
                  <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                  <SelectItem value="goa">Goa</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                  <SelectItem value="jharkhand">Jharkhand</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="manipur">Manipur</SelectItem>
                  <SelectItem value="meghalaya">Meghalaya</SelectItem>
                  <SelectItem value="mizoram">Mizoram</SelectItem>
                  <SelectItem value="nagaland">Nagaland</SelectItem>
                  <SelectItem value="odisha">Odisha</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="sikkim">Sikkim</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="telangana">Telangana</SelectItem>
                  <SelectItem value="tripura">Tripura</SelectItem>
                  <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <Select name="city" value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="kolkata">Kolkata</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                  <SelectItem value="jaipur">Jaipur</SelectItem>
                  <SelectItem value="surat">Surat</SelectItem>
                  <SelectItem value="lucknow">Lucknow</SelectItem>
                  <SelectItem value="kanpur">Kanpur</SelectItem>
                  <SelectItem value="nagpur">Nagpur</SelectItem>
                  <SelectItem value="indore">Indore</SelectItem>
                  <SelectItem value="thane">Thane</SelectItem>
                  <SelectItem value="bhopal">Bhopal</SelectItem>
                  <SelectItem value="visakhapatnam">Visakhapatnam</SelectItem>
                  <SelectItem value="pimpri-chinchwad">Pimpri-Chinchwad</SelectItem>
                  <SelectItem value="patna">Patna</SelectItem>
                  <SelectItem value="vadodara">Vadodara</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pincode
              </label>
              <Input
                type="text"
                name="pincode"
                placeholder="Enter your pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GSTIN
              </label>
              <Input
                type="text"
                name="gstin"
                placeholder="GSTIN number"
                value={formData.gstin}
                onChange={(e) => handleInputChange("gstin", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-lg disabled:opacity-50"
          >
            {isSubmitting ? "Creating dashboard..." : "Create dashboard"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
