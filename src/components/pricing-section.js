import React from "react";
import Pricing from "./common/pricing";

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

const PricingSection = () => {
  return (
    <div className="pricing-section row mt-4 mb-4">
      <div className="section-heading">
        <h2 className="main-heading">Services</h2>
        <h4 className="sub-heading">
          click on a service to book an appointment
        </h4>
      </div>
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
  );
};

export default PricingSection;
