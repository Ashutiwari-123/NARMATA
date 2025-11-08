import React, { useState } from "react";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const footerLinks = {
    findStores: ["Bangalore", "Gurgaon", "New Delhi", "Chennai", "Hyderabad", "Pune"],
    company: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help", href: "#" },
      { name: "Business Solutions", href: "#" },
      { name: "Find Stores", href: "#" },
      { name: "My Account", href: "#" },
      { name: "Track Order", href: "#" },
    ],
    importantLinks: [
      { name: "Privacy Policy", href: "#" },
      { name: "Delivery & Return Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        {/* About */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
            Printo — Making Your Print Experience Effortless
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
            At Printo, we turn your ideas into stunning printed products — from business
            cards to packaging and signage. We’ve been India’s print-on-demand choice since
            2006, combining quality, speed, and creativity.
          </p>

          {showFullDescription && (
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto md:mx-0">
              Our 50,000+ sq. ft. Bangalore production hub and 28+ retail stores across
              major cities help startups and enterprises alike with everything from T-shirts
              to corporate kits.
            </p>
          )}
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-purple-600 hover:text-purple-700 font-medium mt-2"
          >
            ...{showFullDescription ? "read less" : "read more"}
          </button>
        </div>

        {/* Links */}
        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-14 text-center md:text-left">
          {/* Find Stores */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Find Stores</h3>
            <ul className="space-y-2">
              {footerLinks.findStores.map((store, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {store}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Our Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Important Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Important Links</h3>
            <ul className="space-y-2">
              {footerLinks.importantLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
            <a
              href="tel:+919513734374"
              className="flex items-center justify-center md:justify-start gap-2 text-gray-800 hover:text-purple-600 transition-colors mb-2"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 951 373 4374</span>
            </a>
            <a
              href="mailto:care@printo.in"
              className="flex items-center justify-center md:justify-start gap-2 text-gray-800 hover:text-purple-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">care@printo.in</span>
            </a>

            {/* Social */}
            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Follow us</h4>
            <div className="flex justify-center md:justify-start gap-3">
              <a className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center hover:scale-110 shadow-md hover:shadow-lg transition-all">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 shadow-md hover:shadow-lg transition-all">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 shadow-md hover:shadow-lg transition-all">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>

            {/* App Badges */}
            <div className="flex justify-center md:justify-start gap-2 mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-9 hover:opacity-80 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-9 hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 pb-8 border-b border-gray-200">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-8" />
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Printo Document Services Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
