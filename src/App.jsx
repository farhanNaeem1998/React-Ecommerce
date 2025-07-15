import { useState } from "react";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { HeroSecton } from "./components/HeroSecton";
import { MainSection } from "./components/MainSection";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSecton />
      <MainSection />
    </>
  );
}

export default App;
