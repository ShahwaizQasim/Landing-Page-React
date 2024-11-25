import { useState } from "react";
import landingPageData from "./constant/webdata";
import Header from "./components/header.jsx";
import Hero from "./components/heroSec.jsx";
import Features from "./components/features.jsx";
import "./App.css";

function App() {
  const { header, hero, testimonials, features, callToAction } =
    landingPageData;

  const user = {
    isLoggedIn: false,
  };

  return (
    <>
      <Header header={header} user={user} />
      <Hero hero={hero} />
      <Features features={features} />
    </>
  );
}

export default App;
