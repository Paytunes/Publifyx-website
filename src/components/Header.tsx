import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GetStartedModal from "./GetStartedModal";

const serviceLinks = [
  { to: "/white-label-dsp", label: "White Label DSP" },
  { to: "/ctv-advertising", label: "CTV Advertising" },
  { to: "/ott-advertising", label: "OTT Advertising" },
  { to: "/programmatic-audio-advertising", label: "Audio Advertising" },
  { to: "/programmatic-display-advertising", label: "Display Advertising" },
  { to: "/programmatic-video-advertising", label: "Video Advertising" },
  { to: "/dsp-for-agencies", label: "DSP for Agencies" },
];

const resourceLinks = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/features", label: "Features" },
  { to: "/integrations", label: "Integrations" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-navy-600 hover:text-brand-orange-500"
    : "text-navy-600 hover:text-brand-orange-500";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-4">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/c51dbe32-20d8-4bf7-a697-3e8e02023a97.png"
                alt="PublifyX"
                className="h-8 w-auto"
                width={171}
                height={32}
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className={`font-medium transition-colors text-sm ${linkClass}`}>
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center font-medium transition-colors focus:outline-none text-sm ${linkClass}`}
                >
                  Services <ChevronDown className="ml-1 h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-navy-100 shadow-xl rounded-xl p-1 w-56">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.to} asChild>
                      <Link
                        to={link.to}
                        className="w-full px-4 py-2.5 rounded-lg hover:bg-navy-50 text-navy-700 text-sm"
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center font-medium transition-colors focus:outline-none text-sm ${linkClass}`}
                >
                  Resources <ChevronDown className="ml-1 h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-navy-100 shadow-xl rounded-xl p-1 w-48">
                  {resourceLinks.map((link) => (
                    <DropdownMenuItem key={link.to} asChild>
                      <Link
                        to={link.to}
                        className="w-full px-4 py-2.5 rounded-lg hover:bg-navy-50 text-navy-700 text-sm"
                      >
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/blog" className={`font-medium transition-colors text-sm ${linkClass}`}>
                Blog
              </Link>
              <Link to="/contact" className={`font-medium transition-colors text-sm ${linkClass}`}>
                Contact
              </Link>
            </nav>

            <div className="hidden lg:block">
              <button onClick={() => setIsGetStartedModalOpen(true)} className="btn-primary px-5 py-2.5 text-sm">
                Get Started
              </button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} className={scrolled ? "text-navy-800" : "text-white"} aria-hidden="true" />
              ) : (
                <Menu size={24} className={scrolled ? "text-navy-800" : "text-white"} aria-hidden="true" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-navy-100 bg-white rounded-b-xl shadow-lg max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col space-y-1 px-2">
                <Link
                  to="/"
                  className="text-navy-700 hover:text-brand-orange-500 font-medium py-2.5 px-3 rounded-lg hover:bg-navy-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <p className="text-xs font-bold uppercase tracking-wider text-navy-400 px-3 pt-3 pb-1">Services</p>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-navy-600 hover:text-brand-orange-500 font-medium py-2 px-3 pl-5 rounded-lg hover:bg-navy-50 transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <p className="text-xs font-bold uppercase tracking-wider text-navy-400 px-3 pt-3 pb-1">Resources</p>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-navy-600 hover:text-brand-orange-500 font-medium py-2 px-3 pl-5 rounded-lg hover:bg-navy-50 transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/blog"
                  className="text-navy-700 hover:text-brand-orange-500 font-medium py-2.5 px-3 rounded-lg hover:bg-navy-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-navy-700 hover:text-brand-orange-500 font-medium py-2.5 px-3 rounded-lg hover:bg-navy-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    setIsGetStartedModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary text-center mt-2"
                >
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <GetStartedModal isOpen={isGetStartedModalOpen} onClose={() => setIsGetStartedModalOpen(false)} />
    </>
  );
};

export default Header;
