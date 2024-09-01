import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import EmblaCarousel from "./components/Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <EmblaCarousel />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;
