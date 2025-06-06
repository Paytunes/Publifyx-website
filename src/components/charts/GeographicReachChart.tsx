
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const GeographicReachChart = () => {
  const [filterLevel, setFilterLevel] = useState("India");

  // Mock data for different filter levels
  const indiaData = [
    { name: "Maharashtra", impressions: 12.5 },
    { name: "Karnataka", impressions: 8.7 },
    { name: "Tamil Nadu", impressions: 7.2 },
    { name: "Delhi", impressions: 6.8 },
    { name: "Gujarat", impressions: 5.4 },
    { name: "West Bengal", impressions: 4.9 }
  ];

  const statesData = [
    { name: "Mumbai", impressions: 4.2 },
    { name: "Pune", impressions: 3.1 },
    { name: "Nagpur", impressions: 2.8 },
    { name: "Nashik", impressions: 1.9 },
    { name: "Aurangabad", impressions: 1.5 }
  ];

  const citiesData = [
    { name: "400001", impressions: 0.8 },
    { name: "400002", impressions: 0.7 },
    { name: "400003", impressions: 0.6 },
    { name: "400004", impressions: 0.5 },
    { name: "400005", impressions: 0.4 }
  ];

  const getChartData = () => {
    switch (filterLevel) {
      case "States":
        return statesData;
      case "Cities":
        return citiesData;
      default:
        return indiaData;
    }
  };

  const getXAxisLabel = () => {
    switch (filterLevel) {
      case "India":
        return "States";
      case "States":
        return "Cities";
      case "Cities":
        return "Pincodes";
      default:
        return "States";
    }
  };

  const chartConfig = {
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#2563eb",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Geographic Reach</h3>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Filter:</label>
          <Select value={filterLevel} onValueChange={setFilterLevel}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="States">States</SelectItem>
              <SelectItem value="Cities">Cities</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mb-4 text-sm text-gray-600">
        <p>X-axis: {getXAxisLabel()} | Y-axis: Weekly Impressions (Millions)</p>
      </div>

      <ChartContainer config={chartConfig} className="h-80">
        <BarChart data={getChartData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
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

export default GeographicReachChart;
