
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    { ageGroup: "18-24", impressions: 7.0 },
    { ageGroup: "25-34", impressions: 8.8 },
    { ageGroup: "35-44", impressions: 6.3 },
    { ageGroup: "45-54", impressions: 4.6 },
    { ageGroup: "55+", impressions: 2.9 }
  ];

  // Data for Gender only
  const genderData = [
    { gender: "Male", impressions: 13.6 },
    { gender: "Female", impressions: 16.0 },
    { gender: "Other", impressions: 0.8 }
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
        <div className="bg-white p-3 border rounded shadow">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}M impressions`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Age and Gender</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "overview" 
                ? "bg-blue-primary text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Overview
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
        <p>Weekly Impressions (Millions) by {activeTab === "overview" ? "Age and Gender" : activeTab === "age" ? "Age Groups" : "Gender"}</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={getXAxisKey()} />
            <YAxis label={{ value: 'Weekly Impressions (Millions)', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip />} />
            {activeTab === "overview" ? (
              <>
                <Legend />
                <Bar dataKey="Male" fill="#60A5FA" />
                <Bar dataKey="Female" fill="#F87171" />
              </>
            ) : activeTab === "gender" ? (
              <Bar dataKey="impressions" fill={(entry: any) => {
                if (entry?.gender === "Male") return "#60A5FA";
                if (entry?.gender === "Female") return "#F87171";
                return "#A78BFA";
              }} />
            ) : (
              <Bar dataKey="impressions" fill="#E11D48" />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgeGenderChart;
