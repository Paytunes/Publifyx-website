
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const AgeGenderChart = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data for Overview (grouped bars for male/female by age)
  const overviewData = [
    { ageGroup: "18-24", Male: 3.2, Female: 3.8 },
    { ageGroup: "25-34", Male: 4.1, Female: 4.7 },
    { ageGroup: "35-44", Male: 2.9, Female: 3.4 },
    { ageGroup: "45-54", Male: 2.1, Female: 2.5 },
    { ageGroup: "55+", Male: 1.3, Female: 1.6 }
  ];

  // Data for Age only
  const ageData = [
    { ageGroup: "18-24", impressions: 7.0, color: "#E11D48" },
    { ageGroup: "25-34", impressions: 8.8, color: "#DC2626" },
    { ageGroup: "35-44", impressions: 6.3, color: "#B91C1C" },
    { ageGroup: "45-54", impressions: 4.6, color: "#991B1B" },
    { ageGroup: "55+", impressions: 2.9, color: "#7F1D1D" }
  ];

  // Data for Gender only
  const genderData = [
    { gender: "Male", impressions: 13.6, color: "#60A5FA" },
    { gender: "Female", impressions: 16.0, color: "#F87171" },
    { gender: "Other", impressions: 0.8, color: "#A78BFA" }
  ];

  const getChartData = () => {
    switch (activeTab) {
      case "age":
        return ageData;
      case "gender":
        return genderData;
      default:
        return overviewData;
    }
  };

  const getXAxisKey = () => {
    switch (activeTab) {
      case "age":
        return "ageGroup";
      case "gender":
        return "gender";
      default:
        return "ageGroup";
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="font-medium">
              {`${entry.dataKey}: ${entry.value}M impressions`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Age and Gender Demographics</h3>
          <p className="text-sm text-gray-500">Weekly Impressions (Millions) by {activeTab === "overview" ? "Age and Gender" : activeTab === "age" ? "Age Groups" : "Gender"}</p>
        </div>
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === "overview" 
                ? "bg-blue-primary text-white shadow-sm" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("age")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === "age" 
                ? "bg-blue-primary text-white shadow-sm" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            Age
          </button>
          <button
            onClick={() => setActiveTab("gender")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === "gender" 
                ? "bg-blue-primary text-white shadow-sm" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            Gender
          </button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={getXAxisKey()} 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              label={{ value: 'Weekly Impressions (Millions)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <Tooltip content={<CustomTooltip />} />
            {activeTab === "overview" ? (
              <>
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="Male" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Female" fill="#F87171" radius={[4, 4, 0, 0]} />
              </>
            ) : (
              <Bar dataKey="impressions" radius={[4, 4, 0, 0]}>
                {getChartData().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgeGenderChart;
