import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoSymbol}
                alt="ICRA Technologies"
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-lg">ICRA Technologies</span>
            </div>
            <p className="text-sm text-white/80">
              Right ideas to bright ideas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-smooth">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm">+91 81518 79391</p>
                  <p className="text-sm">+91 94813 25000</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:icratechnologies25@gmail.com"
                  className="text-sm hover:text-white/80 transition-smooth"
                >
                  icratechnologies25@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  #F-509, BEL Layout, 1st Stage,
                  <br />
                  Bharatnagar, Herohalli,
                  <br />
                  Bangalore - 560091
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">Follow Us</p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-smooth"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} ICRA Technologies. All rights reserved.
            </p>
            <p className="text-sm text-white/60">www.icratechnologies.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
