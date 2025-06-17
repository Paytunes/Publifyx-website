
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GetStartedModal from "./GetStartedModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/c51dbe32-20d8-4bf7-a697-3e8e02023a97.png" 
                alt="PublifyX" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-primary transition-colors">
                Home
              </Link>
              <Link to="/ad-insights" className="text-gray-700 hover:text-blue-primary transition-colors">
                Ad Insights
              </Link>
              <Link to="/white-label-dsp" className="text-gray-700 hover:text-blue-primary transition-colors">
                White Label DSP
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => setIsGetStartedModalOpen(true)}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/ad-insights" 
                  className="text-gray-700 hover:text-blue-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ad Insights
                </Link>
                <Link 
                  to="/white-label-dsp" 
                  className="text-gray-700 hover:text-blue-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  White Label DSP
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-blue-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button 
                  onClick={() => {
                    setIsGetStartedModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary inline-block text-center mt-2"
                >
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <GetStartedModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)} 
      />
    </>
  );
};

export default Header;
