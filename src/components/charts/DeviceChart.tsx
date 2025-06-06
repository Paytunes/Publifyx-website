
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const DeviceChart = () => {
  // Mock data for device impressions
  const deviceData = [
    { name: "Mobile", impressions: 18.2 },
    { name: "Desktop", impressions: 7.8 },
    { name: "Tablet", impressions: 3.4 },
    { name: "Smart TV", impressions: 1.9 },
    { name: "Other", impressions: 0.7 }
  ];

  const chartConfig = {
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#16a34a",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Device Performance</h3>
      </div>
      
      <div className="mb-4 text-sm text-gray-600">
        <p>X-axis: Device Types | Y-axis: Weekly Impressions (Millions)</p>
      </div>

      <ChartContainer config={chartConfig} className="h-80">
        <BarChart data={deviceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            label={{ value: 'Impressions (Millions)', angle: -90, position: 'insideLeft' }}
            tick={{ fontSize: 12 }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar 
            dataKey="impressions" 
            fill="var(--color-impressions)" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default DeviceChart;
