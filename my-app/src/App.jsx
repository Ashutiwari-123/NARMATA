// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful Gradient Background - Multi-layered */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-20"></div>
      
      {/* Secondary Gradient Layer for Depth */}
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-50/30 via-transparent to-pink-50/20 -z-20"></div>
      
      {/* Additional Accent Gradient */}
      <div className="fixed inset-0 bg-gradient-to-r from-orange-50/20 via-transparent to-cyan-50/20 -z-20"></div>
      
      {/* Decorative Gradient Orbs using Tailwind only */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-pink-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-fuchsia-200/40 rounded-full blur-3xl -z-10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
