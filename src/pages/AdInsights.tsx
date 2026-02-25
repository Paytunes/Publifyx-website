import Layout from "@/components/Layout";
import GeographicReachChart from "@/components/charts/GeographicReachChart";
import AgeGenderChart from "@/components/charts/AgeGenderChart";
import DeviceChart from "@/components/charts/DeviceChart";
import { BarChart3, Users, Globe } from "lucide-react";

const AdInsights = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-primary via-blue-600 to-blue-700 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-white mb-6 leading-tight">Targeted Audio Ads DSP</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Reach your audience with precision targeting across city, device, age, and gender demographics with
              real-time data insights.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">32.1M</div>
                <div className="text-blue-200 text-sm">Total Impressions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-blue-200 text-sm">Device Types</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <BarChart3 className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">36</div>
                <div className="text-blue-200 text-sm">States & UTs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Geographic Reach - Full width */}
            <div className="mb-12">
              <GeographicReachChart />
            </div>

            {/* Age/Gender and Device Charts - Side by side */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <AgeGenderChart />
              <DeviceChart />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdInsights;
