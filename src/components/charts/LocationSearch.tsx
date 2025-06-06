
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Loader2 } from "lucide-react";

interface LocationSearchProps {
  cityStateData: Array<{ name: string }>;
  isLoading: boolean;
  selectedLocation: string;
  onLocationSelect: (location: string) => void;
}

const LocationSearch = ({ 
  cityStateData, 
  isLoading, 
  selectedLocation, 
  onLocationSelect 
}: LocationSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = cityStateData.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {isLoading ? (
          <div className="flex items-center gap-2 px-3 py-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm text-gray-500">Loading locations...</span>
          </div>
        ) : (
          <>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pl-10 border-gray-200 focus:border-blue-primary focus:ring-blue-primary"
            />
            {searchTerm && filteredLocations.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <div
                    key={location.name}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0 transition-colors"
                    onClick={() => {
                      onLocationSelect(location.name);
                      setSearchTerm("");
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      {location.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
