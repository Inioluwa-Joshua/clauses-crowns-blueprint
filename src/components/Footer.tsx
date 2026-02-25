import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/text-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center py-2">
              <Image
                src={logo}
                alt="Clauses & Crowns"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed font-sans">
              Delivering legal excellence with integrity, precision, and an
              unwavering commitment to our clients across Nigeria and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Practice Areas", path: "/practice" },
                { label: "Our Team", path: "/team" },
                { label: "Articles", path: "/articles" },
                { label: "CSR", path: "/csr" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              Practice Areas
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              {[
                "Corporate & Commercial Law",
                "Real Estate & Construction",
                "Startup Advisory",
              ].map((area) => (
                <li key={area} className="text-primary-foreground/60">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>
                  14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+234 (0) 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@clausesandcrowns.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/40 font-sans">
              © {new Date().getFullYear()} Clauses & Crowns. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-xs text-primary-foreground/40 font-sans">
              <span className="hover:text-accent transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-accent transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-accent transition-colors cursor-pointer">
                Disclaimer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
