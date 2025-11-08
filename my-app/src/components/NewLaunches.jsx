import React, { useState, useRef } from "react";

// ✅ Separate Card component to safely use useRef
const Card = ({ item, onMouseMove, onMouseLeave }) => {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
      onMouseLeave={() => onMouseLeave(cardRef)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform-gpu flex flex-col items-center w-[250px] sm:w-[280px] md:w-[300px]"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[250px] object-cover"
      />
      <p className="mt-3 mb-4 text-gray-700 font-medium text-center">
        {item.title}
      </p>
    </div>
  );
};

const slides = [
  [
    {
      img: "https://img.freepik.com/free-photo/smiling-businessman-modern-office_23-2149395847.jpg",
      title: "Eco Classic High Neck Jacket",
    },
    {
      img: "https://img.freepik.com/free-photo/office-desk-calendar_23-2149089338.jpg",
      title: "Custom Calendars",
    },
    {
      img: "https://img.freepik.com/free-photo/open-notebook-diary_23-2149164162.jpg",
      title: "Personalized Diaries",
    },
  ],
  [
    {
      img: "https://img.freepik.com/free-photo/close-up-tshirt-design_23-2148738023.jpg",
      title: "Printed T-Shirts",
    },
    {
      img: "https://img.freepik.com/free-photo/stationery-branding-mockup_23-2149190892.jpg",
      title: "Corporate Stationery",
    },
    {
      img: "https://img.freepik.com/free-photo/business-card-holder-mockup_23-2149190864.jpg",
      title: "Business Cards",
    },
  ],
];

const NewLaunches = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔁 Navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🎯 3D Tilt Effect
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * -20;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Fixed Info Card */}
        <div className="flex-shrink-0 bg-gray-100 rounded-xl p-10 flex flex-col justify-center items-start w-full lg:w-[300px] h-[320px] shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            NEW LAUNCHES
          </h2>
          <p className="text-gray-600 text-lg">
            Explore what's new at Printo.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative flex-1 overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((group, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center gap-6 flex-shrink-0 w-full"
              >
                {group.map((item, i) => (
                  <Card
                    key={i}
                    item={item}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
