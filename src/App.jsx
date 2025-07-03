import { useState } from "react";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { HeroSecton } from "./components/HeroSecton";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroSecton />
    </>
  );
}

export default App;
