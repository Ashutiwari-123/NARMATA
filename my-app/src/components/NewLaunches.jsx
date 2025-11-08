import React, { useState, useRef } from "react";

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle 3D Tilt
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // max tilt 10deg each side
    const y = ((e.clientY - top) / height - 0.5) * -20;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      <div className="flex gap-6 items-start">
        {/* Fixed Card */}
        <div className="flex-shrink-0 bg-gray-100 rounded-xl p-10 flex flex-col justify-center items-start w-[300px] h-[320px] shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            NEW LAUNCHES
          </h2>
          <p className="text-gray-600 text-lg">Explore what's new at Printo.</p>
        </div>

        {/* Slider Section */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((group, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 w-full gap-6 justify-center"
              >
                {group.map((item, i) => {
                  const cardRef = useRef(null);
                  return (
                    <div
                      key={i}
                      ref={cardRef}
                      onMouseMove={(e) => handleMouseMove(e, cardRef)}
                      onMouseLeave={() => handleMouseLeave(cardRef)}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform-gpu flex flex-col items-center w-[250px]"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
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
                })}
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
