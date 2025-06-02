
import { Input } from "@/components/ui/input";

interface GSTINFieldProps {
  formData: {
    gstin: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const GSTINField = ({ formData, onInputChange }: GSTINFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        GSTIN
      </label>
      <Input
        type="text"
        name="gstin"
        placeholder="GSTIN number"
        value={formData.gstin}
        onChange={(e) => onInputChange("gstin", e.target.value)}
        className="w-full"
      />
    </div>
  );
};

export default GSTINField;
