
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DeviceChart = () => {
  const deviceData = [
    { name: "Mobile", impressions: 18.2, color: "#2563eb", percentage: 57.3 },
    { name: "Desktop", impressions: 7.8, color: "#16a34a", percentage: 24.5 },
    { name: "Tablet", impressions: 3.4, color: "#E11D48", percentage: 10.7 },
    { name: "Smart TV", impressions: 1.9, color: "#F59E0B", percentage: 6.0 },
    { name: "Other", impressions: 0.7, color: "#8B5CF6", percentage: 2.2 }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium text-gray-800">{data.name}</p>
          <p className="text-sm text-gray-600">{`${data.impressions}M impressions (${data.percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show label for very small slices

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Device Distribution</h3>
        <p className="text-sm text-gray-500">Device Types and Weekly Impressions (Millions)</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="h-80 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                innerRadius={60}
                outerRadius={120}
                paddingAngle={2}
                dataKey="impressions"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="ml-12 space-y-4 min-w-[200px]">
          {deviceData.map((device) => (
            <div key={device.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div 
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: device.color }}
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{device.name}</div>
                <div className="text-sm text-gray-500">{device.impressions}M • {device.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceChart;
