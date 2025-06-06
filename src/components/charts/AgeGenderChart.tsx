
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeGenderChart = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data for Overview (grouped bars for male/female by age)
  const overviewData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "Male",
        data: [3.2, 4.1, 2.9, 2.1, 1.3],
        backgroundColor: "#60A5FA",
        borderColor: "#60A5FA",
        borderWidth: 1,
      },
      {
        label: "Female", 
        data: [3.8, 4.7, 3.4, 2.5, 1.6],
        backgroundColor: "#F87171",
        borderColor: "#F87171", 
        borderWidth: 1,
      }
    ]
  };

  // Data for Age only
  const ageData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "Weekly Impressions (Millions)",
        data: [7.0, 8.8, 6.3, 4.6, 2.9],
        backgroundColor: "#E11D48",
        borderColor: "#E11D48",
        borderWidth: 1,
      }
    ]
  };

  // Data for Gender only
  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Weekly Impressions (Millions)",
        data: [13.6, 16.0, 0.8],
        backgroundColor: ["#60A5FA", "#F87171", "#A78BFA"],
        borderColor: ["#60A5FA", "#F87171", "#A78BFA"],
        borderWidth: 1,
      }
    ]
  };

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

  const getXAxisLabel = () => {
    switch (activeTab) {
      case "age":
        return "Age Groups";
      case "gender":
        return "Gender";
      default:
        return "Age Groups";
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}M impressions`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: getXAxisLabel()
        }
      },
      y: {
        title: {
          display: true,
          text: 'Weekly Impressions (Millions)'
        },
        beginAtZero: true
      }
    }
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
        <p>X-axis: {getXAxisLabel()} | Y-axis: Weekly Impressions (Millions)</p>
      </div>

      <div className="h-80">
        <Bar data={getChartData()} options={chartOptions} />
      </div>
    </div>
  );
};

export default AgeGenderChart;
