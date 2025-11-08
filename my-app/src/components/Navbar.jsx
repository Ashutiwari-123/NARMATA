import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [cartCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menus = [
    { name: "All Products", baseColor: "blue", textColor: "text-blue-600", hoverText: "hover:text-blue-700", hoverBg: "hover:bg-blue-50", activeBg: "bg-blue-50", indicatorBg: "bg-blue-600" },
    { name: "Calendars & Diaries", baseColor: "purple", textColor: "text-purple-600", hoverText: "hover:text-purple-700", hoverBg: "hover:bg-purple-50", activeBg: "bg-purple-50", indicatorBg: "bg-purple-600" },
    { name: "Same Day Delivery", baseColor: "green", textColor: "text-green-600", hoverText: "hover:text-green-700", hoverBg: "hover:bg-green-50", activeBg: "bg-green-50", indicatorBg: "bg-green-600" },
    { name: "Stationery", baseColor: "indigo", textColor: "text-indigo-600", hoverText: "hover:text-indigo-700", hoverBg: "hover:bg-indigo-50", activeBg: "bg-indigo-50", indicatorBg: "bg-indigo-600" },
    { name: "Corporate Gifts", baseColor: "rose", textColor: "text-rose-600", hoverText: "hover:text-rose-700", hoverBg: "hover:bg-rose-50", activeBg: "bg-rose-50", indicatorBg: "bg-rose-600" },
    { name: "Photo Gifts", baseColor: "pink", textColor: "text-pink-600", hoverText: "hover:text-pink-700", hoverBg: "hover:bg-pink-50", activeBg: "bg-pink-50", indicatorBg: "bg-pink-600" },
    { name: "Packaging", baseColor: "teal", textColor: "text-teal-600", hoverText: "hover:text-teal-700", hoverBg: "hover:bg-teal-50", activeBg: "bg-teal-50", indicatorBg: "bg-teal-600" },
    { name: "Apparel", baseColor: "orange", textColor: "text-orange-600", hoverText: "hover:text-orange-700", hoverBg: "hover:bg-orange-50", activeBg: "bg-orange-50", indicatorBg: "bg-orange-600" },
    { name: "Signage & Marketing", baseColor: "cyan", textColor: "text-cyan-600", hoverText: "hover:text-cyan-700", hoverBg: "hover:bg-cyan-50", activeBg: "bg-cyan-50", indicatorBg: "bg-cyan-600" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const topLinks = [
    "Track Order",
    "Store Locator",
    "Sample Kit",
    "Business Solutions",
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-md backdrop-blur-md`}
    >
      {/* Top utility bar */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 animate-fade-in">
          <div className="flex justify-end items-center gap-6 text-sm">
            {topLinks.map((link, index) => (
              <button
                key={index}
                className="text-gray-600 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main header bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 animate-slide-down">
        <div className="flex justify-between items-center gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0 no-underline">
            <img
              src="/printo-logo.png"
              alt="Printo Logo"
              className="h-14 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </a>

          {/* Search */}
          <div className="relative flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search for products, categories, or brands..."
              className="w-full border-2 border-gray-200 rounded-full px-5 py-2.5 pr-12 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6 text-sm font-medium shrink-0">
            <button className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105">
              Help Center
            </button>
            <button className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105">
              Login / Signup
            </button>
            <button className="relative text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                className={`absolute -top-1 -right-1 ${
                  cartCount > 0 ? "bg-orange-600" : "bg-gray-400"
                } text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center`}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation menu bar */}
      <div className="border-t border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center overflow-x-auto">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="relative group px-4 py-3 cursor-pointer transition-all duration-300 whitespace-nowrap hover:scale-105"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span
                  className={`text-sm font-medium transition-all duration-300 px-3 py-1.5 rounded-md ${
                    activeMenu === index
                      ? `${menu.textColor} ${menu.activeBg}`
                      : `${menu.textColor} ${menu.hoverText} ${menu.hoverBg}`
                  }`}
                >
                  {menu.name}
                </span>

                {/* Dropdown on hover */}
                {activeMenu === index && (
                  <div className="absolute left-0 top-full bg-white shadow-xl w-64 p-5 mt-1 rounded-lg z-50 border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300">
                    <ul className="space-y-2">
                      <li className={`cursor-pointer transition-all duration-300 font-medium px-3 py-2 rounded-md ${menu.textColor} ${menu.hoverText} ${menu.hoverBg}`}>
                        View All {menu.name}
                      </li>
                      <li className={`cursor-pointer transition-all duration-300 text-sm px-3 py-2 rounded-md ${menu.textColor} ${menu.hoverText} ${menu.hoverBg}`}>
                        Popular in {menu.name}
                      </li>
                      <li className={`cursor-pointer transition-all duration-300 text-sm px-3 py-2 rounded-md ${menu.textColor} ${menu.hoverText} ${menu.hoverBg}`}>
                        New Arrivals
                      </li>
                      <li className={`cursor-pointer transition-all duration-300 text-sm px-3 py-2 rounded-md ${menu.textColor} ${menu.hoverText} ${menu.hoverBg}`}>
                        Best Sellers
                      </li>
                    </ul>
                  </div>
                )}

                {/* Active indicator */}
                {activeMenu === index && (
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 rounded-t-full ${menu.indicatorBg} animate-pulse`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;   