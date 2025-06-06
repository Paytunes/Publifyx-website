import Layout from "@/components/Layout";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import GeographicReachChart from "@/components/charts/GeographicReachChart";
import AgeGenderChart from "@/components/charts/AgeGenderChart";
import DeviceChart from "@/components/charts/DeviceChart";

const AdInsights = () => {
  const [activeTab, setActiveTab] = useState("age");
  const [selectedState, setSelectedState] = useState("");

  // Mock data for charts
  const ageData = [
    { name: "18-24", value: 2400, impressions: 48000 },
    { name: "25-34", value: 3200, impressions: 64000 },
    { name: "35-44", value: 2800, impressions: 56000 },
    { name: "45-54", value: 2100, impressions: 42000 },
    { name: "55+", value: 1500, impressions: 30000 }
  ];

  const genderData = [
    { name: "Male", value: 45, color: "#2563eb" },
    { name: "Female", value: 52, color: "#E11D48" },
    { name: "Other", value: 3, color: "#FF9A33" }
  ];

  const stateData = [
    { state: "California", impressions: 2500000, reach: 1800000 },
    { state: "Texas", impressions: 1800000, reach: 1300000 },
    { state: "New York", impressions: 1600000, reach: 1200000 },
    { state: "Florida", impressions: 1400000, reach: 1000000 },
    { state: "Illinois", impressions: 900000, reach: 650000 }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-light">
        {/* Hero Section */}
        <section className="bg-blue-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-6">Targeted Audio Ads DSP</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Reach your audience with precision targeting across city, device, age, and gender demographics with real-time data insights.
            </p>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-primary mb-2">8.2M</div>
                <div className="text-gray-600">Total Impressions</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-red-accent mb-2">5.9M</div>
                <div className="text-gray-600">Unique Reach</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-yellow-secondary mb-2">2.3%</div>
                <div className="text-gray-600">CTR</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">$4.50</div>
                <div className="text-gray-600">CPM</div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="mb-4">Campaign Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="california">California</SelectItem>
                      <SelectItem value="texas">Texas</SelectItem>
                      <SelectItem value="newyork">New York</SelectItem>
                      <SelectItem value="florida">Florida</SelectItem>
                      <SelectItem value="illinois">Illinois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <Input placeholder="Search city..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Device Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All devices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="desktop">Desktop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* New Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <GeographicReachChart />
              <AgeGenderChart />
            </div>

            <div className="mb-8">
              <DeviceChart />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Demographics Chart */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3>Demographics</h3>
                  <div className="flex space-x-2">
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

                {activeTab === "age" ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#2563eb" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={genderData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {genderData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>

              {/* State Performance */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="mb-6">Top Performing States</h3>
                <div className="space-y-4">
                  {stateData.map((state, index) => (
                    <div key={state.state} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{state.state}</div>
                          <div className="text-sm text-gray-600">
                            {state.impressions.toLocaleString()} impressions
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-primary">
                          {state.reach.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">reach</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Device Performance */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-6">Device Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-2xl font-bold text-blue-primary mb-1">65%</div>
                  <div className="text-gray-600">Mobile</div>
                </div>
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-2xl font-bold text-red-accent mb-1">25%</div>
                  <div className="text-gray-600">Desktop</div>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-lg">
                  <div className="text-4xl mb-2">📟</div>
                  <div className="text-2xl font-bold text-yellow-secondary mb-1">10%</div>
                  <div className="text-gray-600">Tablet</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdInsights;
