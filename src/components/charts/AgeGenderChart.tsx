
import { useState } from "react";
import AgeGenderHeader from "./AgeGenderHeader";
import AgeGenderBarChart from "./AgeGenderBarChart";
import { useAgeGenderData } from "@/hooks/useAgeGenderData";
import { processAgeGenderData, getXAxisKey } from "@/utils/ageGenderDataUtils";

const AgeGenderChart = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { ageGenderData, isLoading, showError, refetchData } = useAgeGenderData();

  const chartData = processAgeGenderData(ageGenderData, activeTab);
  const xAxisKey = getXAxisKey(activeTab);

  if (showError) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Age and Gender Demographics</h3>
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
      <AgeGenderHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <AgeGenderBarChart data={chartData} activeTab={activeTab} xAxisKey={xAxisKey} />
    </div>
  );
};

export default AgeGenderChart;
