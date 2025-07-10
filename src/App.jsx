import { useState } from "react";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { HeroSecton } from "./components/HeroSecton";
import { MainSection1 } from "./components/MainSection1";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSecton />
      <MainSection1 />
    </>
  );
}

export default App;
