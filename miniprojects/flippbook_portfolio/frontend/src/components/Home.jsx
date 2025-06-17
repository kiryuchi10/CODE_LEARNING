import React from "react";
import Hero from "./Hero"; // Uses your styled Hero section

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Top Nav could go here */}

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Home;
