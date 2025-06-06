
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DeviceChart = () => {
  const deviceData = [
    { name: "Mobile", impressions: 18.2, color: "#2563eb" },
    { name: "Desktop", impressions: 7.8, color: "#16a34a" },
    { name: "Tablet", impressions: 3.4, color: "#E11D48" },
    { name: "Smart TV", impressions: 1.9, color: "#F59E0B" },
    { name: "Other", impressions: 0.7, color: "#8B5CF6" }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow">
          <p>{`${payload[0].name}: ${payload[0].value}M impressions`}</p>
        </div>
      );
    }
    return null;
  };

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
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="impressions"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="ml-8 space-y-3">
          {deviceData.map((device) => (
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
