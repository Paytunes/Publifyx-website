
const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6">Solutions We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <picture>
                <source srcSet="/lovable-uploads/f64cf965-b6ee-4102-9e75-6f5b1cbdf48b.webp" type="image/webp" />
                <img
                  src="/lovable-uploads/f64cf965-b6ee-4102-9e75-6f5b1cbdf48b.png"
                  alt="Person editing ad video on phone using AI"
                  className="w-full h-full object-cover"
                  width={384}
                  height={192}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="p-6">
              <h3 className="mb-4">AI-Powered Creativity</h3>
              <p className="text-gray-600">
                Publifyx offers AI-driven creative solutions that enable businesses to effortlessly create captivating audio and video content. Leveraging advanced AI algorithms, our platform ensures natural and engaging content creation in seconds.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <picture>
                <source srcSet="/lovable-uploads/283b0e0e-7e0f-457e-9002-2c270f2cd928.webp" type="image/webp" />
                <img
                  src="/lovable-uploads/283b0e0e-7e0f-457e-9002-2c270f2cd928.png"
                  alt="Woman watching video content on mobile device"
                  className="w-full h-full object-cover"
                  width={384}
                  height={192}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="p-6">
              <h3 className="mb-4">OTT Advertising Simplification</h3>
              <p className="text-gray-600">
                We simplify over-the-top (OTT) advertising by providing pre-packaged solutions that make platform selection easy and affordable. With guaranteed high ad completion rates, businesses can maximize their advertising ROI on OTT platforms.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <picture>
                <source srcSet="/lovable-uploads/d0e4d426-d705-4d55-8135-97e8afdf1613.webp" type="image/webp" />
                <img
                  src="/lovable-uploads/d0e4d426-d705-4d55-8135-97e8afdf1613.png"
                  alt="Smartphone showing ad interface – DSP solution"
                  className="w-full h-full object-cover"
                  width={384}
                  height={192}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="p-6">
              <h3 className="mb-4">White-Labeled DSP Solutions</h3>
              <p className="text-gray-600">
                Publifyx delivers white-labeled Demand Side Platform (DSP) solutions customized for corporate media agencies. These solutions include self-branded reporting portals and campaign management tools, empowering agencies to enhance their offerings and drive greater value for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
