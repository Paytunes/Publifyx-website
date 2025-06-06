
import { MapPin } from "lucide-react";

interface ChartHeaderProps {
  title: string;
  selectedLocation: string;
  displayLabel: string;
}

const ChartHeader = ({ title, selectedLocation, displayLabel }: ChartHeaderProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPin className="h-4 w-4" />
        <span>Selected: {selectedLocation} | Showing: {displayLabel} with Weekly Impressions (Millions)</span>
      </div>
    </div>
  );
};

export default ChartHeader;
