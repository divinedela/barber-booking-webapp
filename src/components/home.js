import React from "react";
import Hero from "./common/hero";
import PricingSection from "./pricing-section";
import Copyright from "./copyright";

const Home = () => {
  const heroImageUrl =
    "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const heroTitle = "Premium hair cuts";

  return (
    <>
      <Hero imgUrl={heroImageUrl} title={heroTitle} />
      <PricingSection />
      <Copyright />
    </>
  );
};

export default Home;
