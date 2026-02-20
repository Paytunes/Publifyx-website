import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-white">Ready to Transform Your Audio Advertising?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of brands already using PublifyX to reach their target audiences with precision and impact.
        </p>
        <Link to="/contact" className="btn-primary text-lg px-8 py-4">
          Request a Demo
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
