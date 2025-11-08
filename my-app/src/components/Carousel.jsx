import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const images = [
    {
      url: "https://img.freepik.com/free-photo/young-man-showing-his-tshirt_23-2149393668.jpg",
      title: "Custom Dry Fit T-Shirts",
      subtitle: "Comfort built to last, Branding built to stay.",
    },
    {
      url: "https://img.freepik.com/free-photo/white-tshirt-mockup-hanger_125540-888.jpg",
      title: "Corporate Merchandise",
      subtitle: "Boost your brand with high-quality apparel.",
    },
    {
      url: "https://img.freepik.com/free-photo/front-view-smiley-woman-holding-shopping-bags_23-2149646100.jpg",
      title: "Photo Gifts & Packaging",
      subtitle: "Add a personal touch to every memory.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-4/5 ml-40 h-[80vh] overflow-hidden mt-2 rounded-2xl shadow-2xl bg-gradient-to-br from-orange-100 via-white to-orange-50">
      {images.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with zoom animation */}
          <img
            src={item.url}
            alt={`Slide ${i}`}
            className={`w-full h-full object-cover transform transition-transform duration-[4000ms] ease-in-out ${
              i === current ? "scale-105" : "scale-100"
            }`}
          />

          {/* Gradient Overlay with subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

          {/* Text overlay with animated entry */}
          <div className="absolute inset-0 flex flex-col justify-center pl-10 md:pl-20 text-left">
            <div
              className={`max-w-lg transform transition-all duration-1000 ${
                i === current ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-xl animate-fadeInUp">
                {item.title}
              </h2>
              <p className="text-white text-lg md:text-xl mb-6 drop-shadow-md animate-fadeInSlow">
                {item.subtitle}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-400/50 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md hover:shadow-orange-400/40"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-md hover:shadow-orange-400/40"
      >
        <ChevronRight size={28} />
      </button>

      {/* Carousel Dots with pulse animation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-orange-500 scale-125 animate-pulse shadow-md shadow-orange-400/50"
                : "bg-white/70 hover:bg-orange-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
