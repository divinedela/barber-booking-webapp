import React from "react";

const Hero = ({ imgUrl, title }) => {
  const heroStyle = {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundPosition: "50% 60%",
  };
  return (
    <div className="full-width hero" style={heroStyle}>
      <div className="hero-text">{title}</div>
    </div>
  );
};

export default Hero;
