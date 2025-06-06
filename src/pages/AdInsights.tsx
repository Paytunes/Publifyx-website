
import Layout from "@/components/Layout";
import { useState } from "react";
import GeographicReachChart from "@/components/charts/GeographicReachChart";
import AgeGenderChart from "@/components/charts/AgeGenderChart";
import DeviceChart from "@/components/charts/DeviceChart";

const AdInsights = () => {
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <GeographicReachChart />
              <AgeGenderChart />
            </div>

            <div className="mb-8">
              <DeviceChart />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdInsights;
