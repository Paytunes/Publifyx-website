
import { useState } from "react";
import LocationSearch from "./LocationSearch";
import GeographicBarChart from "./GeographicBarChart";
import ChartHeader from "./ChartHeader";
import { useGeographicData } from "@/hooks/useGeographicData";
import { getChartData, getDisplayLabel } from "@/utils/geographicDataUtils";

const GeographicReachChart = () => {
  const [selectedLocation, setSelectedLocation] = useState("India");
  const { cityStateData, isLoading, showError, refetchData } = useGeographicData();

  const currentData = getChartData(selectedLocation);
  const displayLabel = getDisplayLabel(selectedLocation);

  if (showError) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Geographic Reach</h3>
          <p className="text-red-500">{showError}</p>
          <button 
            onClick={refetchData}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-8">
        <ChartHeader 
          title="Geographic Reach" 
          selectedLocation={selectedLocation} 
          displayLabel={displayLabel}
        />
        <LocationSearch 
          cityStateData={cityStateData} 
          isLoading={isLoading} 
          selectedLocation={selectedLocation} 
          onLocationSelect={setSelectedLocation}
        />
      </div>

      <GeographicBarChart data={currentData} displayLabel={displayLabel} />
    </div>
  );
};

export default GeographicReachChart;
