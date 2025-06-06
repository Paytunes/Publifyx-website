
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from "recharts";
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
    { name: "Bangalore", count: 95, impressions: 2.8 },
    { name: "Chennai", count: 76, impressions: 2.4 },
    { name: "Hyderabad", count: 68, impressions: 2.1 },
    { name: "Kolkata", count: 72, impressions: 1.9 },
    { name: "Delhi", count: 65, impressions: 1.7 },
    { name: "Ahmedabad", count: 58, impressions: 1.5 },
    { name: "Jaipur", count: 45, impressions: 1.3 },
    { name: "Lucknow", count: 42, impressions: 1.1 },
    { name: "Kanpur", count: 38, impressions: 0.9 }
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
          selectedLocation === "Bangalore" ? 2.8 : 
          selectedLocation === "Chennai" ? 2.4 : 1.5 }
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
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#2563eb",
    },
  };

  const CustomLabel = (props: any) => {
    const { x, y, width, height, value, payload } = props;
    return (
      <text 
        x={x + width / 2} 
        y={y - 5} 
        fill="#374151" 
        textAnchor="middle" 
        fontSize="12"
        fontWeight="600"
      >
        {payload.count}
      </text>
    );
  };

  const getBarColor = (index: number, data: any[]) => {
    // Use gradient colors for better visual appeal
    const colors = [
      "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe",
      "#1e40af", "#1d4ed8", "#2563eb", "#3730a3", "#4338ca", "#5b21b6"
    ];
    return colors[index % colors.length];
  };

  const currentData = getChartData();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Geographic Reach</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>Selected: {selectedLocation} | Showing: {getDisplayLabel()} with Weekly Impressions (Millions)</span>
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

      <ChartContainer config={chartConfig} className="h-96">
        <BarChart 
          data={currentData} 
          margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 11, fill: '#6B7280', angle: currentData.length > 6 ? -45 : 0 }}
            textAnchor={currentData.length > 6 ? "end" : "middle"}
            height={currentData.length > 6 ? 80 : 60}
            axisLine={{ stroke: '#E5E7EB' }}
            interval={0}
          />
          <YAxis 
            label={{ 
              value: 'Weekly Impressions (Millions)', 
              angle: -90, 
              position: 'insideLeft', 
              style: { textAnchor: 'middle', fill: '#6B7280', fontSize: '12px' } 
            }}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
          />
          <ChartTooltip 
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 border rounded-lg shadow-lg border-gray-200">
                    <p className="font-semibold text-gray-800 mb-1">{label}</p>
                    <p className="text-sm text-blue-600">Impressions: {data.impressions}M</p>
                    <p className="text-sm text-gray-600">Count: {data.count}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="impressions" 
            radius={[4, 4, 0, 0]}
          >
            <LabelList content={<CustomLabel />} />
            {currentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index, currentData)} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
      
      {/* Legend for count labels */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Numbers above bars represent the count of {getDisplayLabel().toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default GeographicReachChart;
