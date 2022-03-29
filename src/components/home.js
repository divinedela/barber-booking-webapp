import React from "react";
import Hero from "./common/hero";
import Pricing from "./common/pricing";
import Copyright from "./copyright";

const Home = () => {
  const heroImageUrl =
    "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const heroTitle = "Premium hair cuts";
  const pricingItems = [
    {
      id: 1,
      imgUrl:
        "https://themes.muffingroup.com/be/hairdresser/wp-content/uploads/2018/04/hairdresser-pricing-box1.jpg",
      title: "Hair styling",
      price: "20",
    },
    {
      id: 2,
      imgUrl:
        "https://themes.muffingroup.com/be/hairdresser/wp-content/uploads/2018/04/hairdresser-pricing-box3.jpg",
      title: "Afro Cut",
      price: "20",
    },
    {
      id: 3,
      imgUrl:
        "https://themes.muffingroup.com/be/hairdresser/wp-content/uploads/2018/04/hairdresser-pricing-box3.jpg",
      title: "Manly Haircut",
      price: "20",
    },
    {
      id: 4,
      imgUrl:
        "https://themes.muffingroup.com/be/hairdresser/wp-content/uploads/2018/04/hairdresser-pricing-box4.jpg",
      title: "Beard Trimming",
      price: "20",
    },
  ];
  return (
    <>
      <Hero imgUrl={heroImageUrl} title={heroTitle} />
      <div className="pricing-section row mt-4 mb-4">
        {pricingItems.map((item) => (
          <Pricing
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            price={item.price}
            alt={item.title + " Image"}
          />
        ))}
      </div>
      <Copyright />
    </>
  );
};

export default Home;
