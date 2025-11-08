import React from "react";

// GetInTouch Component
const GetInTouch = ({ onGetInTouch }) => {
  return (
    <div className="text-center mt-12 sm:mt-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 px-2">
        Need a Corporate Account?
      </h2>
      <button
        onClick={onGetInTouch}
        className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600
                   text-white font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl
                   shadow-md hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95"
      >
        Get in Touch
      </button>
    </div>
  );
};

// CompanyLogo Component
const CompanyLogo = ({ name }) => {
  const renderLogo = () => {
    switch (name) {
      case "Flipkart":
        return (
          <svg className="w-20 sm:w-24 md:w-28 h-10 sm:h-12" viewBox="0 0 120 40">
            <text x="0" y="25" fill="#2874F0" fontSize="18" fontWeight="bold">
              Flipkart
            </text>
            <rect x="90" y="8" width="24" height="24" fill="#FFD800" rx="2" />
            <path d="M95 20 L105 15 L105 25 Z" fill="#2874F0" />
          </svg>
        );
      case "Wipro":
        return (
          <svg viewBox="0 0 100 100" className="w-14 sm:w-16 md:w-20 h-14 sm:h-16">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F47920"
              strokeWidth="3"
              strokeDasharray="6,6"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fill="#7B3F00"
              fontSize="20"
              fontWeight="bold"
            >
              wipro
            </text>
          </svg>
        );
      case "Freshworks":
        return (
          <svg className="w-24 sm:w-28 md:w-32 h-12 sm:h-14" viewBox="0 0 140 40">
            <circle cx="20" cy="20" r="12" fill="#FF6B35" opacity="0.8" />
            <circle cx="30" cy="18" r="10" fill="#00C9A7" opacity="0.8" />
            <circle cx="25" cy="25" r="8" fill="#FFD23F" opacity="0.8" />
            <text x="45" y="25" fill="#2C3E50" fontSize="16" fontWeight="600">
              freshworks
            </text>
          </svg>
        );
      case "PhonePe":
        return (
          <svg className="w-24 sm:w-28 md:w-32 h-12 sm:h-14" viewBox="0 0 120 40">
            <circle cx="20" cy="20" r="15" fill="#5F259F" />
            <text
              x="20"
              y="26"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              ₹
            </text>
            <text x="45" y="25" fill="#5F259F" fontSize="18" fontWeight="bold">
              PhonePe
            </text>
          </svg>
        );
      case "Google":
        return (
          <svg className="w-24 sm:w-28 md:w-32 h-12 sm:h-14" viewBox="0 0 120 40">
            <text x="5" y="25" fontSize="20" fontWeight="bold">
              <tspan fill="#4285F4">G</tspan>
              <tspan fill="#EA4335">o</tspan>
              <tspan fill="#FBBC05">o</tspan>
              <tspan fill="#4285F4">g</tspan>
              <tspan fill="#34A853">l</tspan>
              <tspan fill="#EA4335">e</tspan>
            </text>
          </svg>
        );
      case "TCS":
        return (
          <svg className="w-24 sm:w-28 md:w-32 h-12 sm:h-14" viewBox="0 0 120 40">
            <text x="5" y="20" fill="#0066B2" fontSize="24" fontWeight="bold">
              tcs
            </text>
            <text
              x="5"
              y="35"
              fill="#0066B2"
              fontSize="8"
              fontWeight="600"
            >
              TATA CONSULTANCY SERVICES
            </text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex items-center justify-center h-20 sm:h-24 p-2 sm:p-3 rounded-lg bg-white hover:bg-gray-50
                 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
    >
      {renderLogo()}
    </div>
  );
};

// Main Component
export default function EnterpriseTrustBanner() {
  const companies = [
    { name: "Flipkart" },
    { name: "Wipro" },
    { name: "Freshworks" },
    { name: "PhonePe" },
    { name: "Google" },
    { name: "TCS" },
  ];

  const handleGetInTouch = () => {
    alert("Corporate account form would open here!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 border border-gray-100">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 sm:mb-10 leading-snug">
          Trusted by over{" "}
          <span className="text-blue-600">350+ Large Enterprises</span>
          <br className="hidden sm:block" />
          <span className="text-gray-700">
            for Printing, Signage & Gifting Needs
          </span>
        </h1>

        {/* Company Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center mb-10 sm:mb-12">
          {companies.map((company, index) => (
            <CompanyLogo key={index} name={company.name} />
          ))}
        </div>

        {/* CTA Section */}
        <GetInTouch onGetInTouch={handleGetInTouch} />
      </div>
    </div>
  );
}
