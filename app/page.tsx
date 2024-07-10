import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import EmblaCarousel from "./components/Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <EmblaCarousel />
      {/* <Hero /> */}
      <MainContent />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
