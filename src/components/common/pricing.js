import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Pricing = ({ imgUrl, alt, title, price }) => {
  const pricingStyle = {
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <div className="pricing_box col-3">
      <a href="#">
        <img className="scale-with-grid" src={imgUrl} alt={alt} />
        <div className="desc">
          <div className="subtitle">GHS {price}</div>
          <h2>{title}</h2>
          <div className="line"></div>
        </div>
      </a>
    </div>
  );
};

export default Pricing;
