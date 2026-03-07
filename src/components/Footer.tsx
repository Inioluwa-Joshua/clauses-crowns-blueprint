import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/text-logo.png";

const socialLinks = [
  {
    label: "Instagram",
    path: "https://instagram.com/clausesandcrowns",
    icon: <Instagram size={18} />,
  },
  {
    label: "Tiktok",
    path: "https://tiktok.com/@clauses_and_crowns",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px]"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "X",
    path: "https://x.com/clauses_crowns",
    icon: <Twitter size={18} />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.svg"
                width={200}
                height={60}
                alt="Clauses & Crowns"
                className="h-20 w-auto object-contain brightness-110"
              />
            </Link>
            
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 shadow-sm group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                </Link>
              ))}
            </div>
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
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent text-">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-start gap-3 text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>
                  Abuja, Nigeria <br />
                  Lagos, Nigeria
                </span>
              </li>
              <Link href="tel:+2349131226039" className="flex items-center gap-3 text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+234 913 122 6039</span>
              </Link>
              <Link href="mailto:contact@clausesandcrowns.com" className="flex items-center gap-3 text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>contact@clausesandcrowns.com</span>
              </Link>
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
