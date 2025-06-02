
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
          <Select name="state" value={formData.state} onValueChange={(value) => onInputChange("state", value)}>
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
          <Select name="city" value={formData.city} onValueChange={(value) => onInputChange("city", value)}>
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
