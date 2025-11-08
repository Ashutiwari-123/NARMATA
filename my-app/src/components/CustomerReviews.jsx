import React, { useState, useEffect } from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Shruti D.",
      text: "Custom gift hampers looked so classy. Thoughtful items and the process was easy. Each hamper looked neatly packed and delivery was hassle-free.",
      rating: 4,
    },
    {
      name: "Rohan S.",
      text: "Amazing experience! The print quality and packaging were top-notch. I’ll definitely order again.",
      rating: 5,
    },
    {
      name: "Ananya P.",
      text: "The team was very responsive and helpful. Loved the corporate gifts I ordered for my company event!",
      rating: 5,
    },
    {
      name: "Amit K.",
      text: "Excellent service! The t-shirts were comfortable, and the branding came out perfectly.",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 transition-all duration-700">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-800 text-center px-4">
        What Our Customers Say 💬
      </h2>

      {/* Review Card */}
      <div className="max-w-md sm:max-w-2xl md:max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 relative overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-purple-300">
        {/* Floating Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 via-purple-50 to-pink-100 opacity-40 blur-2xl -z-10"></div>

        {/* Star Rating */}
        <div className="flex justify-center mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl sm:text-2xl transition-colors duration-500 ${
                i < reviews[current].rating
                  ? "text-orange-500"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Review Text */}
        <p
          key={current}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-2 sm:px-4 text-center transition-all duration-700 ease-in-out opacity-100 animate-fadeIn"
        >
          “{reviews[current].text}”
        </p>

        {/* Reviewer Name */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg italic text-purple-700 font-semibold text-center">
          – {reviews[current].name}
        </p>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default CustomerReviews;
