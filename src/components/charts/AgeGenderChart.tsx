
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const AgeGenderChart = () => {
  const [activeTab, setActiveTab] = useState("age-and-gender");

  // Mock data for different options
  const ageAndGenderData = [
    { name: "18-24 Male", impressions: 3.2 },
    { name: "18-24 Female", impressions: 3.8 },
    { name: "25-34 Male", impressions: 4.1 },
    { name: "25-34 Female", impressions: 4.7 },
    { name: "35-44 Male", impressions: 2.9 },
    { name: "35-44 Female", impressions: 3.4 },
    { name: "45-54 Male", impressions: 2.1 },
    { name: "45-54 Female", impressions: 2.5 },
    { name: "55+ Male", impressions: 1.3 },
    { name: "55+ Female", impressions: 1.6 }
  ];

  const ageData = [
    { name: "18-24", impressions: 7.0 },
    { name: "25-34", impressions: 8.8 },
    { name: "35-44", impressions: 6.3 },
    { name: "45-54", impressions: 4.6 },
    { name: "55+", impressions: 2.9 }
  ];

  const genderData = [
    { name: "Male", impressions: 13.6 },
    { name: "Female", impressions: 16.0 },
    { name: "Other", impressions: 0.8 }
  ];

  const getChartData = () => {
    switch (activeTab) {
      case "age":
        return ageData;
      case "gender":
        return genderData;
      default:
        return ageAndGenderData;
    }
  };

  const getXAxisLabel = () => {
    switch (activeTab) {
      case "age":
        return "Age Groups";
      case "gender":
        return "Gender";
      default:
        return "Age & Gender";
    }
  };

  const chartConfig = {
    impressions: {
      label: "Weekly Impressions (Millions)",
      color: "#E11D48",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Age and Gender</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("age-and-gender")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "age-and-gender" 
                ? "bg-blue-primary text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Age & Gender
          </button>
          <button
            onClick={() => setActiveTab("age")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "age" 
                ? "bg-blue-primary text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Age
          </button>
          <button
            onClick={() => setActiveTab("gender")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "gender" 
                ? "bg-blue-primary text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Gender
          </button>
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
            angle={activeTab === "age-and-gender" ? -45 : 0}
            textAnchor={activeTab === "age-and-gender" ? "end" : "middle"}
            height={activeTab === "age-and-gender" ? 80 : 60}
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

export default AgeGenderChart;
