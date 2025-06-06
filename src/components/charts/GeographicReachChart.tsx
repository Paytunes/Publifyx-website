
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Search, MapPin } from "lucide-react";

const GeographicReachChart = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India");

  // Mock data for different locations
  const indiaData = [
    { name: "Total States & UT's", count: 36, impressions: 32.1 }
  ];

  const statesData = [
    { name: "Maharashtra", count: 358, impressions: 12.5 },
    { name: "Karnataka", count: 224, impressions: 8.7 },
    { name: "Tamil Nadu", count: 234, impressions: 7.2 },
    { name: "Delhi", count: 89, impressions: 6.8 },
    { name: "Gujarat", count: 182, impressions: 5.4 },
    { name: "West Bengal", count: 341, impressions: 4.9 }
  ];

  const citiesData = [
    { name: "Mumbai", count: 150, impressions: 4.2 },
    { name: "Pune", count: 89, impressions: 3.1 },
    { name: "Nagpur", count: 67, impressions: 2.8 },
    { name: "Nashik", count: 45, impressions: 1.9 },
    { name: "Aurangabad", count: 32, impressions: 1.5 }
  ];

  // Combined options for search
  const allLocations = [
    "India",
    ...statesData.map(item => item.name),
    ...citiesData.map(item => item.name)
  ];

  const getChartData = () => {
    if (selectedLocation === "India") {
      return indiaData;
    } else if (statesData.some(state => state.name === selectedLocation)) {
      return citiesData;
    } else {
      // City selected, show pincodes
      return [
        { name: "Total Pincodes", count: 150, impressions: selectedLocation === "Mumbai" ? 4.2 : 
          selectedLocation === "Pune" ? 3.1 : 
          selectedLocation === "Nagpur" ? 2.8 : 
          selectedLocation === "Nashik" ? 1.9 : 1.5 }
      ];
    }
  };

  const getDisplayLabel = () => {
    if (selectedLocation === "India") {
      return "States & UT's";
    } else if (statesData.some(state => state.name === selectedLocation)) {
      return "Cities";
    } else {
      return "Pincodes";
    }
  };

  const filteredLocations = allLocations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chartConfig = {
    count: {
      label: `Total ${getDisplayLabel()}`,
      color: "#2563eb",
    },
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#16a34a",
    },
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Geographic Reach</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Selected: {selectedLocation} | Showing: {getDisplayLabel()} and Weekly Impressions</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
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
                    key={location}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0 transition-colors"
                    onClick={() => {
                      setSelectedLocation(location);
                      setSearchTerm("");
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      {location}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-80">
        <BarChart data={getChartData()}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            yAxisId="left"
            label={{ value: 'Count', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            label={{ value: 'Impressions (Millions)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#6B7280' } }}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar 
            yAxisId="left"
            dataKey="count" 
            fill="var(--color-count)" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            yAxisId="right"
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
