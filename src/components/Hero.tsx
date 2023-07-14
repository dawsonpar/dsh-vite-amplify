import React from "react";

interface HeroProps {
  info: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ info }) => {
  return <div>{info}</div>;
};

export default Hero;
