import React from "react";

const bestSellers = [
  {
    title: "Shop Business Cards",
    img: "https://img.freepik.com/free-photo/branding-stationery-mockup_23-2149178478.jpg",
  },
  {
    title: "Posters",
    img: "https://img.freepik.com/free-photo/modern-poster-design-mockup_23-2149175783.jpg",
  },
  {
    title: "Booklets",
    img: "https://img.freepik.com/free-photo/open-booklet-mockup_23-2149113772.jpg",
  },
  {
    title: "Shop Flyers",
    img: "https://img.freepik.com/free-photo/flyer-mockup_23-2149149559.jpg",
  },
  {
    title: "Prints",
    img: "https://img.freepik.com/free-photo/printing-press-paper-rolls_23-2149181453.jpg",
  },
  {
    title: "Cards",
    img: "https://img.freepik.com/free-photo/hand-holding-business-card_23-2149190951.jpg",
  },
  {
    title: "Stickers",
    img: "https://img.freepik.com/free-photo/colorful-stickers-pack_23-2149189074.jpg",
  },
  {
    title: "Hoodies",
    img: "https://img.freepik.com/free-photo/young-man-wearing-hoodie-mockup_23-2149203039.jpg",
  },
];

const BestSellers = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        Best Sellers
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-[1000px]">
        {bestSellers.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-500 group"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateY(0deg) rotateX(0deg)",
            }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = ((y - centerY) / 15) * -1;
              const rotateY = (x - centerX) / 15;

              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "rotateX(0deg) rotateY(0deg) scale(1)";
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[220px] sm:h-[240px] md:h-[250px] object-cover group-hover:brightness-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 text-center text-sm sm:text-base font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
