import { useState } from "react";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { HeroSecton } from "./components/HeroSecton";
import { MainSection } from "./components/MainSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSecton />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
