
import { Link } from "react-router-dom";

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-yellow-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-gray-900">Our Products</h2>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
           An evolved user experience that drives performance across channels with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="mb-4 text-orange-700">Shout Lite</h3>
            <p className="text-gray-600 mb-6">
              Drawing upon advanced AI technology, ShoutL Lite provides human-sounding audio and video creativity solutions at a fraction of traditional costs. Our pre-packaged OTT solutions simplify advertising processes, empowering businesses to optimize ROI through enhanced ad completion rates and campaign performance
            </p>
            <Link to="/contact" className="btn-primary w-full text-center inline-block">
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="mb-4 text-orange-700">Shout Enterprise</h3>
            <p className="text-gray-600 mb-6">
              In addition to the comprehensive features of Shoutl Lite, Shoutl Enterprise introduces a White-Labeled DSP Platform designed specifically to cater to the distinctive requirements of corporate media agencies. These fully customizable platforms incorporate self-branded reporting portals and campaign management tools, enabling agencies to provide unparalleled services to their clients.
            </p>
            <Link to="/contact" className="btn-primary w-full text-center inline-block">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
