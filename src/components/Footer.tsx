import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import publifyxLogoImg from "@/assets/brand/publifyx-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-navy-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Logo + Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/">
              <img
                src={publifyxLogoImg}
                alt="PublifyX"
                className="h-8"
                width={171}
                height={32}
                style={{ aspectRatio: "171/32" }}
              />
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Powering the next generation of programmatic advertising.
            </p>

            <div className="mt-4">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/publifyx/",
                },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-white  flex gap-2 items-start transition-colors duration-200"
                >
                  <Icon size={21} aria-hidden="true" />
                  <span className="font-medium">Follow Us on LinkedIn</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-inter">
              Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/white-label-dsp"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  White Label DSP
                </Link>
              </li>
              <li>
                <Link
                  to="/ctv-advertising"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  CTV Advertising
                </Link>
              </li>
              <li>
                <Link
                  to="/ott-advertising"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  OTT Advertising
                </Link>
              </li>
              <li>
                <Link
                  to="/programmatic-audio-advertising"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  Programmatic Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/programmatic-display-advertising"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  Programmatic Display
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-inter">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-inter">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy_policy"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms_and_conditions"
                  className="text-primary-foreground/60 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/50 text-center text-primary-foreground/60 text-sm">
          <p>
            Copyright © 2025{" "}
            <span className="text-brand-orange-400">PublifyX.com</span> | All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
