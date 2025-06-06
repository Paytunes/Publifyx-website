
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

        {/* Charts Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
