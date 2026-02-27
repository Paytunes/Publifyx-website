import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import PersonalInfoFields from "./PersonalInfoFields";
import AddressFields from "./AddressFields";
import GSTINField from "./GSTINField";

interface GetStartedFormProps {
  onClose: () => void;
}

const GetStartedForm = ({ onClose }: GetStartedFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    billingAddress: "",
    state: "",
    city: "",
    pincode: "",
    gstin: "",
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
      mobile: formData.phoneNumber.replace(/\D/g, ""), // Remove non-numeric
      billingAddress: formData.billingAddress,
      state: formData.state,
      city: formData.city,
      pincode: formData.pincode,
      gstId: formData.gstin || "", // Optional
    };

    // Format mobile number with +91 prefix and ensure it's properly formatted
    //const formattedMobile = values.mobile.startsWith('91') ? `+${values.mobile}` : `+91${values.mobile}`;
    const formattedMobile =
      values.mobile.length === 12 && values.mobile.startsWith("91") ? `+${values.mobile}` : `+91${values.mobile}`;

    console.log("Formatted mobile:", formattedMobile);
    console.log("State value being sent:", values.state);

    const payload = {
      first_name: values.fullName,
      email: values.email,
      mobile: formattedMobile, // Add +91 prefix and proper formatting
      name: values.companyName,
      billing_address1: values.billingAddress,
      billing_city: values.city,
      billing_state: values.state,
      billing_zipcode: values.pincode,
      gst_no: values.gstId,
    };

    console.log("Final payload being sent:", payload);

    try {
      const response = await fetch("https://app.publifyx.com/api/v1/create_agency/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("API response:", responseData);

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
          gstin: "",
        });

        onClose();
      } else {
        console.error("API error:", responseData);

        // Create a more detailed error message
        let errorMessage = "Please check the following fields:\n";
        if (responseData.mobile) {
          errorMessage += `• Phone: ${responseData.mobile.join(", ")}\n`;
        }
        if (responseData.billing_state) {
          errorMessage += `• State: ${responseData.billing_state.join(", ")}\n`;
        }
        if (responseData.billing_city) {
          errorMessage += `• City: ${responseData.billing_city.join(", ")}\n`;
        }

        toast({
          title: "Submission Failed",
          description: errorMessage || responseData?.message || "Unknown error occurred",
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
    console.log(`Field ${field} changed to:`, value);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <PersonalInfoFields formData={formData} onInputChange={handleInputChange} />
      <AddressFields formData={formData} onInputChange={handleInputChange} />
      <GSTINField formData={formData} onInputChange={handleInputChange} />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-lg disabled:opacity-50"
      >
        {isSubmitting ? "Creating dashboard..." : "Create dashboard"}
      </Button>
    </form>
  );
};

export default GetStartedForm;
