
import DevicePieChart from "./DevicePieChart";
import { useDeviceData } from "@/hooks/useDeviceData";
import { processDeviceData } from "@/utils/deviceDataUtils";

const DeviceChart = () => {
  const { deviceData, isLoading, showError, refetchData } = useDeviceData();

  const chartData = processDeviceData(deviceData);

  if (showError) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Device Distribution</h3>
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
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Device Distribution</h3>
        <p className="text-sm text-gray-500">Device Types and Weekly Impressions (Millions)</p>
      </div>

      <DevicePieChart data={chartData} />
    </div>
  );
};

export default DeviceChart;
