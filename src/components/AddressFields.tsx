
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGeoChoices } from "@/hooks/useGeoChoices";
import { useEffect, useMemo } from "react";

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
  const { geoChoices, isLoading, getFilteredCities } = useGeoChoices();

  // Get filtered cities based on selected state
  const filteredCities = useMemo(() => {
    if (!formData.state) return [];
    return getFilteredCities(formData.state);
  }, [formData.state, getFilteredCities]);

  // Clear city when state changes
  useEffect(() => {
    if (formData.state && formData.city) {
      const cityExists = filteredCities.some(city => city.value === formData.city);
      if (!cityExists) {
        console.log('Clearing city because it does not exist in the new state');
        onInputChange("city", "");
      }
    }
  }, [formData.state, formData.city, filteredCities, onInputChange]);

  console.log('Current state:', formData.state);
  console.log('Available cities for state:', filteredCities.length);

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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <Select 
            name="city" 
            value={formData.city} 
            onValueChange={(value) => onInputChange("city", value)}
            disabled={isLoading || !formData.state}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={
                isLoading 
                  ? "Loading cities..." 
                  : !formData.state 
                    ? "Select State first" 
                    : filteredCities.length === 0 
                      ? "No cities available" 
                      : "Select City"
              } />
            </SelectTrigger>
            <SelectContent>
              {filteredCities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
