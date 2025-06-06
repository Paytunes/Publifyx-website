import { useState, useEffect } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from "recharts";
import { Search, MapPin, Loader2 } from "lucide-react";

const GeographicReachChart = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India");
  const [cityStateData, setCityStateData] = useState<Array<{ name: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState("");

  // Helper function to check if dictionary exists in list
  const isDictInList = (dict: { name: string }, list: Array<{ name: string }>) => {
    return list.some(item => item.name === dict.name);
  };

  // API fetch function
  const cityStateFetchQuery = async () => {
    const url = 'https://app.publifyx.com/city_state_data/';
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const res = await response.json();
        const finalResponse = res.state_cities_list;
        let finalList = [];
        for (let i = 0; i < finalResponse.length; ++i) {
          if (finalResponse[i][1] === 'state') {
            finalList.push({ name: finalResponse[i][0] + ' (State)' });
          } else {
            let dict = {
              name:
                finalResponse[i][0].charAt(0).toUpperCase() +
                finalResponse[i][0].slice(1) +
                ' (City)',
            };
            if (!isDictInList(dict, finalList)) {
              finalList.push(dict);
            }
          }
        }
        // "India" added as an option in the search filter
        finalList.push({ name: 'India' });
        setCityStateData(finalList);
        setShowError("");
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error: any) {
      // Handle any errors that occur during the fetch request
      console.error('Error:', error.message);
      setShowError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    cityStateFetchQuery();
  }, []);

  // Mock data for chart display (keeping existing structure for now)
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

  const getChartData = () => {
    if (selectedLocation === "India") {
      return indiaData;
    } else if (selectedLocation.includes("(State)")) {
      return citiesData;
    } else {
      // City selected, show pincodes
      return [
        { name: "Total Pincodes", count: 150, impressions: selectedLocation.includes("Mumbai") ? 4.2 : 
          selectedLocation.includes("Pune") ? 3.1 : 
          selectedLocation.includes("Bangalore") ? 2.8 : 
          selectedLocation.includes("Chennai") ? 2.4 : 1.5 }
      ];
    }
  };

  const getDisplayLabel = () => {
    if (selectedLocation === "India") {
      return "States & UT's";
    } else if (selectedLocation.includes("(State)")) {
      return "Cities";
    } else {
      return "Pincodes";
    }
  };

  const filteredLocations = cityStateData.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chartConfig = {
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#2563eb",
    },
  };

  const CustomLabel = (props: any) => {
    const { x, y, width, height, value, payload } = props;
    
    // Safety check for payload
    if (!payload || payload.count === undefined) {
      return null;
    }
    
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

  if (showError) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Geographic Reach</h3>
          <p className="text-red-500">{showError}</p>
          <button 
            onClick={cityStateFetchQuery}
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
            {isLoading ? (
              <div className="flex items-center gap-2 px-3 py-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm text-gray-500">Loading locations...</span>
              </div>
            ) : (
              <>
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
                        key={location.name}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0 transition-colors"
                        onClick={() => {
                          setSelectedLocation(location.name);
                          setSearchTerm("");
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          {location.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
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
            tick={{ 
              fontSize: 11, 
              fill: '#6B7280',
              ...(currentData.length > 6 && { angle: -45 })
            }}
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
