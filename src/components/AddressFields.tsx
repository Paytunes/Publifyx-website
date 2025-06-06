
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGeoChoices } from "@/hooks/useGeoChoices";

interface AddressFieldsProps {
  formData: {
    billingAddress: string;
    state: string;
    city: string;
    pincode: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const AddressFields = ({ formData, onInputChange }: AddressFieldsProps) => {
  const { geoChoices, isLoading, error } = useGeoChoices();

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Billing Address
        </label>
        <Textarea
          name="billingAddress"
          placeholder="Enter your billing address"
          value={formData.billingAddress}
          onChange={(e) => onInputChange("billingAddress", e.target.value)}
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
          <Select 
            name="state" 
            value={formData.state} 
            onValueChange={(value) => onInputChange("state", value)}
            disabled={isLoading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={isLoading ? "Loading states..." : "Select State"} />
            </SelectTrigger>
            <SelectContent>
              {geoChoices.states.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && (
            <p className="text-red-500 text-sm mt-1">Failed to load states. Using fallback data.</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <Select 
            name="city" 
            value={formData.city} 
            onValueChange={(value) => onInputChange("city", value)}
            disabled={isLoading}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={isLoading ? "Loading cities..." : "Select City"} />
            </SelectTrigger>
            <SelectContent>
              {geoChoices.cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && (
            <p className="text-red-500 text-sm mt-1">Failed to load cities. Using fallback data.</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pincode
        </label>
        <Input
          type="text"
          name="pincode"
          placeholder="Enter your pincode"
          value={formData.pincode}
          onChange={(e) => onInputChange("pincode", e.target.value)}
          className="w-full"
          required
        />
      </div>
    </>
  );
};

export default AddressFields;
