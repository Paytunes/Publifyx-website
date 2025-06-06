
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Geographic Reach</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Input
              placeholder="Search location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-48"
            />
            {searchTerm && filteredLocations.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <div
                    key={location}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedLocation(location);
                      setSearchTerm("");
                    }}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-4 text-sm text-gray-600">
        <p>Selected: {selectedLocation} | Showing: {getDisplayLabel()} and Weekly Impressions (Millions)</p>
      </div>

      <ChartContainer config={chartConfig} className="h-80">
        <BarChart data={getChartData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            yAxisId="left"
            label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            label={{ value: 'Impressions (Millions)', angle: 90, position: 'insideRight' }}
            tick={{ fontSize: 12 }}
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
