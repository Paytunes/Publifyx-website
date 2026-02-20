
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
                width={171}
                height={32}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                Home
              </Link>
              
              <Link to="/white-label-dsp" className="text-gray-700 hover:text-orange-500 transition-colors">
                White Label DSP
              </Link>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border shadow-lg">
                  <DropdownMenuItem asChild>
                    <Link to="/connected-tv-advertising" className="w-full px-4 py-2 hover:bg-gray-100">
                      Connected TV Advertising
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/online-banner-advertising" className="w-full px-4 py-2 hover:bg-gray-100">
                      Online Banner Advertising
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/digital-advertising" className="w-full px-4 py-2 hover:bg-gray-100">
                      Digital Advertising
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/blog" className="text-gray-700 hover:text-orange-500 transition-colors">
                Blog
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
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
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/white-label-dsp" 
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  White Label DSP
                </Link>
                <Link 
                  to="/connected-tv-advertising" 
                  className="text-gray-700 hover:text-orange-500 transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connected TV Advertising
                </Link>
                <Link 
                  to="/online-banner-advertising" 
                  className="text-gray-700 hover:text-orange-500 transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Online Banner Advertising
                </Link>
                <Link 
                  to="/digital-advertising" 
                  className="text-gray-700 hover:text-orange-500 transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Digital Advertising
                </Link>
                <Link 
                  to="/blog" 
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-orange-500 transition-colors"
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
