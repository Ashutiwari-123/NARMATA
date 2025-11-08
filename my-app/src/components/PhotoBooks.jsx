import React, { useEffect, useState } from "react";

const photoBooks = [
  {
    title: "Mountain Adventure",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "City Nights",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Desert Journey",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Beach Escape",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Forest Trail",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Modern Workspace",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Café Vibes",
    img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Street Photography",
    img: "https://images.unsplash.com/photo-1486308510493-aa64833634ef?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Food Stories",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=60",
  },
];

const PhotoBooks = () => {
  const [current, setCurrent] = useState(0);

  // Auto rotate every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 2) % photoBooks.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Get 2 visible images
  const visibleItems = [
    photoBooks[current],
    photoBooks[(current + 1) % photoBooks.length],
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        Explore Our Photo Book Collection
      </h2>

      {/* Container for photo cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-6xl"
        style={{ perspective: "1000px" }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-700 hover:rotate-x-3 hover:rotate-y-3 hover:scale-105 hover:shadow-2xl"
            style={{
              animation: "fadeIn3D 1s ease-in-out",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[220px] sm:h-[250px] md:h-[300px] object-cover"
            />
            <div className="bg-black bg-opacity-50 text-white py-3 text-center text-base sm:text-lg font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Description + Button */}
      <div className="max-w-3xl text-center mt-12 px-6 sm:px-8">
        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          Experience the beauty of every story through our dynamic 3D photo book
          showcase — two memories at a time, rotating every few seconds.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md shadow-md transition font-medium">
          Learn More
        </button>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn3D {
            0% {
              opacity: 0;
              transform: rotateY(-90deg) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: rotateY(0deg) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PhotoBooks;
