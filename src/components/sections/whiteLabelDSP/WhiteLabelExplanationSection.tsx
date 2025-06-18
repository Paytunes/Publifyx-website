
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const WhiteLabelExplanationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            White Label DSP
          </div>
          <h2 className="mb-6 max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-gray-900">
            The Smartest White Label DSP for Programmatic Ad Buying
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to run a powerful, scalable ad platform — without the time, cost, or hassle of building it yourself.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto mb-16 border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
          <CardHeader className="pb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-3xl md:text-4xl text-center font-bold">What is a White Labelled Platform?</CardTitle>
          </CardHeader>
          <CardContent className="px-8 md:px-12 py-10">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg md:text-xl">
              A white label platform is a ready-made SaaS product that businesses can rebrand as their own by customising the name, logo, and design. It lets companies launch quickly without building from scratch, saving time, development costs, and maintenance efforts.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl">
              In short, it's our tech and your brand. You get the power of a full-scale white label demand side platform, branded as your own, with zero development time.
            </p>
            <div className="bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 p-8 rounded-2xl border-2 border-orange-200">
              <p className="font-bold text-orange-700 text-xl md:text-2xl text-center">
                No need to build. No need to manage servers. Just plug in and launch.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhiteLabelExplanationSection;
