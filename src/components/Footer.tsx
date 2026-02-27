import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoShapes from "@/assets/logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={logoShapes}
                alt="ICRA Technologies"
                className="h-20 w-20 object-contain"
              />
              <div>
                <p className="font-bold text-xl text-foreground">ICRA Technologies</p>
                <p className="text-base text-muted-foreground">
                  Right ideas to bright ideas
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-base text-muted-foreground hover:text-primary transition-smooth gradient-line-hover inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-muted-foreground hover:text-primary transition-smooth gradient-line-hover inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-base text-muted-foreground hover:text-primary transition-smooth gradient-line-hover inline-block">
                  Services
                </Link>
              </li>
              <li>
              <Link to="/projects" className="text-base text-muted-foreground hover:text-primary transition-smooth gradient-line-hover inline-block">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/brochure" className="text-base text-muted-foreground hover:text-primary transition-smooth gradient-line-hover inline-block">
                  Brochure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <div className="space-y-1">
                  <p className="text-base text-muted-foreground">+91 81518 79391</p>
                  <p className="text-base text-muted-foreground">+91 94813 25000</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:icratechnologies25@gmail.com"
                  className="text-base text-muted-foreground hover:text-primary transition-smooth"
                >
                  icratechnologies25@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Social */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-foreground">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <p className="text-base text-muted-foreground">
                  #F-509, BEL Layout, 1st Stage,
                  <br />
                  Bharatnagar, Herohalli,
                  <br />
                  Bangalore - 560091
                </p>
              </div>
              <div>
                <p className="text-base font-semibold mb-2 text-foreground">Follow Us</p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth gradient-line-hover"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-base">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-muted-foreground">
              © {new Date().getFullYear()} ICRA Technologies. All rights reserved.
            </p>
            <p className="text-base text-muted-foreground">www.icratechnologies.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
