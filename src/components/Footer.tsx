
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/c51dbe32-20d8-4bf7-a697-3e8e02023a97.png" 
              alt="PublifyX" 
              className="h-8 w-auto mb-2"
            />
            <p className="text-gray-400 mt-2">Targeted Audio Advertising DSP</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms_and_conditions" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy_policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright @ 2025 <span className="text-orange-500">Publifyx.com</span> | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
