
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-blue-primary">PublifyX</div>
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
          <p>&copy; 2024 PublifyX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
