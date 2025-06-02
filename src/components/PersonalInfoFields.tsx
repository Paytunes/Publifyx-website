
import { Input } from "@/components/ui/input";

interface PersonalInfoFieldsProps {
  formData: {
    name: string;
    email: string;
    companyName: string;
    phoneNumber: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const PersonalInfoFields = ({ formData, onInputChange }: PersonalInfoFieldsProps) => {
  return (
    <>
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
            onChange={(e) => onInputChange("name", e.target.value)}
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
            onChange={(e) => onInputChange("email", e.target.value)}
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
            onChange={(e) => onInputChange("companyName", e.target.value)}
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
              onChange={(e) => onInputChange("phoneNumber", e.target.value)}
              className="flex-1 border-l-0 rounded-l-none"
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoFields;
