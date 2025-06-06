
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DeviceChart = () => {
  const deviceData = {
    labels: ["Mobile", "Desktop", "Tablet", "Smart TV", "Other"],
    datasets: [
      {
        data: [18.2, 7.8, 3.4, 1.9, 0.7],
        backgroundColor: [
          "#2563eb",
          "#16a34a", 
          "#E11D48",
          "#F59E0B",
          "#8B5CF6"
        ],
        borderColor: [
          "#2563eb",
          "#16a34a",
          "#E11D48", 
          "#F59E0B",
          "#8B5CF6"
        ],
        borderWidth: 1,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}M impressions`;
          }
        }
      }
    }
  };

  const deviceColors = [
    { name: "Mobile", impressions: 18.2, color: "#2563eb" },
    { name: "Desktop", impressions: 7.8, color: "#16a34a" },
    { name: "Tablet", impressions: 3.4, color: "#E11D48" },
    { name: "Smart TV", impressions: 1.9, color: "#F59E0B" },
    { name: "Other", impressions: 0.7, color: "#8B5CF6" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Device</h3>
      </div>
      
      <div className="mb-4 text-sm text-gray-600">
        <p>Device Types and Weekly Impressions (Millions)</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="h-80 flex-1">
          <Doughnut data={deviceData} options={chartOptions} />
        </div>
        
        <div className="ml-8 space-y-3">
          {deviceColors.map((device) => (
            <div key={device.name} className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: device.color }}
              />
              <div className="flex-1">
                <div className="font-medium">{device.name}</div>
                <div className="text-sm text-gray-600">{device.impressions}M impressions</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceChart;
