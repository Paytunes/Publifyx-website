import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img
              src="/lovable-uploads/c51dbe32-20d8-4bf7-a697-3e8e02023a97.png"
              alt="PUBLIFYX"
              className="h-8 w-auto brightness-0 invert"
              width={171}
              height={32}
              loading="lazy"
            />
          </div>

          <div className="flex space-x-8">
            <Link to="/privacy_policy" className="text-navy-400 hover:text-white transition-colors text-sm font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms_and_conditions" className="text-navy-400 hover:text-white transition-colors text-sm font-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-700 text-center text-navy-500 text-sm">
          <p>
            Copyright © 2025 <span className="text-brand-orange-400">PublifyX.com</span> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
