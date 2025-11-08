import React, { useRef } from "react";

const businessModels = [
  {
    name: "For Startups",
    img: "https://img.freepik.com/free-photo/startup-business-teamwork-meeting_53876-64962.jpg",
  },
  {
    name: "For Events",
    img: "https://img.freepik.com/free-photo/people-celebrating-event_23-2148785183.jpg",
  },
  {
    name: "For Cafes",
    img: "https://img.freepik.com/free-photo/barista-making-coffee-cafe_23-2148270425.jpg",
  },
  {
    name: "For Employment",
    img: "https://img.freepik.com/free-photo/handshake-business-people_53876-13809.jpg",
  },
];

const BusinessModels = () => {
  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <section className="w-[90%] max-w-6xl mx-auto py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
        Shop by Business Model
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {businessModels.map((item, index) => {
          const cardRef = useRef(null);
          return (
            <div
              key={index}
              ref={cardRef}
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform-gpu cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-44 sm:h-48 md:h-52 lg:h-56 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-3 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BusinessModels;
