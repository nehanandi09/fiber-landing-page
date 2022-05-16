import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MainLayout from "./MainLayout";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
