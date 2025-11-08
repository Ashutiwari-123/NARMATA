import React from "react";
import { Clock, ShoppingBag, Store, Package } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <Clock className="w-12 h-12 text-purple-600 transition-transform duration-300 group-hover:-translate-y-2" />
      ),
      title: "Fast Turn Around",
      desc: "Same-day order delivery for small orders.",
    },
    {
      icon: (
        <ShoppingBag className="w-12 h-12 text-purple-600 transition-transform duration-300 group-hover:-translate-y-2" />
      ),
      title: "Easy Ordering and Reordering",
      desc: "Design, order, pickup or get delivery. Reorder in a click—ideal for businesses!",
    },
    {
      icon: (
        <Store className="w-12 h-12 text-purple-600 transition-transform duration-300 group-hover:-translate-y-2" />
      ),
      title: "27 Stores Nationwide",
      desc: "Quality printing, always within reach!",
    },
    {
      icon: (
        <Package className="w-12 h-12 text-purple-600 transition-transform duration-300 group-hover:-translate-y-2" />
      ),
      title: "Wide Product Range",
      desc: "From business cards to packaging, we cover all your printing needs.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-50 via-white to-orange-50 py-16 px-6 sm:px-10 md:px-16 lg:px-20 transition-all duration-700">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-transparent rounded-xl transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Icon Wrapper */}
            <div className="flex justify-center items-center bg-white rounded-full shadow-md w-20 h-20 mb-4 group-hover:shadow-lg group-hover:scale-105 transition-transform duration-500">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-all duration-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
