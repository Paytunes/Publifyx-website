import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact PublifyX | Request a Demo or Get Pricing";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Get in touch with PublifyX to schedule a demo, request pricing, or learn how our white label DSP can power your programmatic advertising business.");
  }, []);

  const [formData, setFormData] = useState({
    company_name: "",
    company_email: "",
    hearAboutUs: "",
    mobile_number: "",
    project_description: "",
    source: "publifyx",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataForSubmission = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataForSubmission.append(key, value);
      });

      const googleAppsScriptUrl =
        "https://script.google.com/macros/s/AKfycbytrG1hsiIqFlkL4vMMNVRy0WXpEq2E26mU8JGuIA/exec";

      await fetch(googleAppsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataForSubmission,
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        company_name: "",
        company_email: "",
        hearAboutUs: "",
        mobile_number: "",
        project_description: "",
        source: "publifyx",
      });
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Page Header */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-3">
              Let's Talk
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Ready to scale your advertising? Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] border border-border/40">
            {/* Left Panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[hsl(217,80%,48%)] via-[hsl(220,75%,42%)] to-[hsl(225,70%,32%)] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff7200]/20 rounded-full translate-y-1/3 -translate-x-1/3" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">
                  Let's Grow Your<br />Brand Together
                </h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10">
                  Fill out the form, including details about your next campaign, and we'll be in touch shortly.
                </p>

                <div className="space-y-6">
                  <ContactInfoItem
                    icon={<MapPin className="w-5 h-5" />}
                    label="Office"
                    value="PublifyX Tech Pvt. Ltd., Inventio Workspace Ltd., Sector-12, Dwarka, New Delhi-110075"
                  />
                  <ContactInfoItem
                    icon={<Phone className="w-5 h-5" />}
                    label="Phone"
                    value="+91-8448330304"
                  />
                  <ContactInfoItem
                    icon={<Mail className="w-5 h-5" />}
                    label="Email"
                    value="info@publifyx.com"
                  />
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  © {new Date().getFullYear()} PublifyX Tech Pvt. Ltd.
                </p>
              </div>
            </div>

            {/* Right Panel — Form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-10 lg:p-12">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
                Fill the Form Below
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="source" value={formData.source} />

                <FormField label="Company Name" required>
                  <Input
                    id="company_name"
                    type="text"
                    required
                    value={formData.company_name}
                    onChange={(e) => handleInputChange("company_name", e.target.value)}
                    placeholder="Your company name"
                    className="h-11 rounded-lg border-border/60 bg-muted/30 focus:bg-white transition-colors placeholder:text-muted-foreground/50"
                  />
                </FormField>

                <FormField label="Company Email" required>
                  <Input
                    id="company_email"
                    type="email"
                    required
                    value={formData.company_email}
                    onChange={(e) => handleInputChange("company_email", e.target.value)}
                    placeholder="you@company.com"
                    className="h-11 rounded-lg border-border/60 bg-muted/30 focus:bg-white transition-colors placeholder:text-muted-foreground/50"
                  />
                </FormField>

                <FormField label="How did you hear about us?">
                  <Select
                    value={formData.hearAboutUs}
                    onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                  >
                    <SelectTrigger className="h-11 rounded-lg border-border/60 bg-muted/30 focus:bg-white transition-colors">
                      <SelectValue placeholder="Select an option" />
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
                </FormField>

                <FormField label="Mobile Number" hint="Please enter with country code">
                  <div className="flex">
                    <div className="flex items-center bg-muted/50 border border-r-0 border-border/60 px-3 rounded-l-lg gap-2">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0ZGOTkzMyIvPgo8cmVjdCB5PSI0LjY2NjY3IiB3aWR0aD0iMjAiIGhlaWdodD0iNC42NjY2NyIgZmlsbD0iI0ZGRkZGRiIvPgo8cmVjdCB5PSI5LjMzMzMzIiB3aWR0aD0iMjAiIGhlaWdodD0iNC42NjY2NyIgZmlsbD0iIzEzOEE0NiIvPgo8L3N2Zz4K"
                        alt="India flag"
                        width={20}
                        height={14}
                        className="w-5 h-3.5"
                      />
                      <span className="text-sm text-muted-foreground font-medium">+91</span>
                    </div>
                    <Input
                      id="mobile_number"
                      type="tel"
                      value={formData.mobile_number}
                      onChange={(e) => handleInputChange("mobile_number", e.target.value)}
                      className="flex-1 border-l-0 rounded-l-none h-11 rounded-r-lg border-border/60 bg-muted/30 focus:bg-white transition-colors"
                    />
                  </div>
                </FormField>

                <FormField label="Campaign Details" required>
                  <Textarea
                    id="project_description"
                    value={formData.project_description}
                    onChange={(e) => handleInputChange("project_description", e.target.value)}
                    rows={4}
                    className="rounded-lg border-border/60 bg-muted/30 focus:bg-white transition-colors resize-none placeholder:text-muted-foreground/50"
                    placeholder="Describe your campaign goals, target audience, and budget..."
                    required
                  />
                </FormField>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-lg bg-[hsl(217,80%,48%)] hover:bg-[hsl(217,80%,42%)] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 mt-2 group"
                >
                  {isSubmitting ? "Submitting..." : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

/* ── Sub-components ── */

const ContactInfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      {icon}
    </div>
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-white/50 mb-1">{label}</p>
      <p className="text-white/90 text-sm leading-relaxed">{value}</p>
    </div>
  </div>
);

const FormField = ({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">
      {label}{required && <span className="text-destructive ml-0.5">*</span>}
    </label>
    {children}
    {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
  </div>
);

export default Contact;
