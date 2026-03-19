import whiteLabelConcept from "@/assets/white-label-dsp/whiteLabelConcept.webp";
import whatWeManageWeControl from "@/assets/white-label-dsp/whatWeManageWeControl.webp";
import whatWeManageWeControlMobile from "@/assets/white-label-dsp/whatWeManageWeControlMobile.webp";

const youControl = [
  "Branding and domain",
  "Pricing and margins",
  "Client access",
  "Campaign workflows",
];

const weManage = [
  "Real-time bidding infrastructure",
  "Server architecture",
  "Data pipelines",
  "SSP and exchange integrations",
  "Ongoing compliance and updates",
];

const WhiteLabelExplanationSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl text-center lg:text-left mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10">
          <div>
            <img
              src={whiteLabelConcept}
              alt="White label DSP concept showing a branded advertising platform"
              className="w-full max-w-[750px] m-auto h-auto rounded-2xl shadow-xl"
              width={672}
              height={672}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="inline-block text-sm font-semibold text-brand-orange-700 uppercase tracking-widest mb-3">
              White Label DSP
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">
              What Is White Label DSP?
            </h2>
            <div className="text-lg text-navy-400 max-w-3xl mx-auto leading-relaxed">
              <p>
                A white label DSP is a fully built demand side platform
                developed and maintained by a technology provider, but deployed
                under your brand. Instead of investing millions in building
                proprietary ad tech from the ground up, you get a fully
                functional programmatic advertising platform that looks and
                feels like your own product, ready to onboard advertisers and
                start buying media immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* You Control */}
          <img
            src={whatWeManageWeControl}
            alt="White label DSP concept showing a branded advertising platform"
            className="w-full max-w-[900px] h-auto rounded-2xl sm:block hidden"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
          />
          <img
            src={whatWeManageWeControlMobile}
            alt="White label DSP concept showing a branded advertising platform"
            className="w-full max-w-[400px] m-auto h-auto rounded-2xl sm:hidden"
            width={672}
            height={672}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplanationSection;
