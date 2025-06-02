
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/c51dbe32-20d8-4bf7-a697-3e8e02023a97.png" 
              alt="PUBLIFYX" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex space-x-6">
            <Link to="/privacy_policy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms_and_conditions" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm">
          <p>Copyright © 2025 <span className="text-orange-500">Publifyx.com</span> | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
