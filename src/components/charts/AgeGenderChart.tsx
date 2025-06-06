
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const AgeGenderChart = () => {
  const [xAxisOption, setXAxisOption] = useState("age-and-gender");

  // Mock data for different X-axis options
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
    switch (xAxisOption) {
      case "age":
        return ageData;
      case "gender":
        return genderData;
      default:
        return ageAndGenderData;
    }
  };

  const getXAxisLabel = () => {
    switch (xAxisOption) {
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
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">X-axis:</label>
          <Select value={xAxisOption} onValueChange={setXAxisOption}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="age-and-gender">Age and Gender</SelectItem>
              <SelectItem value="age">Age</SelectItem>
              <SelectItem value="gender">Gender</SelectItem>
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
            angle={xAxisOption === "age-and-gender" ? -45 : 0}
            textAnchor={xAxisOption === "age-and-gender" ? "end" : "middle"}
            height={xAxisOption === "age-and-gender" ? 80 : 60}
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
