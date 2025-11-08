import React, { useRef } from "react";

const categories = [
  {
    name: "Apparel",
    img: "https://img.freepik.com/free-photo/folded-t-shirts_23-2148164515.jpg",
  },
  {
    name: "Awards & Trophy",
    img: "https://img.freepik.com/free-photo/golden-trophy-table_23-2147802118.jpg",
  },
  {
    name: "Business",
    img: "https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151027.jpg",
  },
  {
    name: "Gifts",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSva3E5XpWXn_vpZdlQ89J8nNWf10MXxuHbeg&s",
  },
  {
    name: "Drinkware",
    img: "https://img.freepik.com/free-photo/stainless-steel-water-bottle_23-2148785181.jpg",
  },
  {
    name: "Packaging",
    img: "https://img.freepik.com/free-photo/cardboard-boxes-concept_23-2149031893.jpg",
  },
  {
    name: "Signage & Marketing",
    img: "https://img.freepik.com/free-photo/marketing-team-working-project_23-2149096022.jpg",
  },
  {
    name: "Photo & Gifts",
    img: "https://img.freepik.com/free-photo/flat-lay-photo-album-with-flowers_23-2148748149.jpg",
  },
];

const Categories = () => {
  // Tilt animation handler
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
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Explore Our Categories
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((item, index) => {
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
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors duration-300">
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

export default Categories;
