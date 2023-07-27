"use client";

import React, { useState } from "react";
import styles from "./heading.module.css";
import afiaLogo from "./assets/afia-logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

interface HeadingProps {
  handleButtonClick: (inputValue: string) => void;
  handleLogoClick: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  handleButtonClick,
  handleLogoClick,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    handleButtonClick(inputValue);
    setInputValue("");
  };

  const handleLogoClickInternal = () => {
    handleLogoClick();
  };

  const matches = useMediaQuery("(min-width:450px)");

  return (
    <header
      className={`${styles.heading} ${
        matches ? styles.desktop : styles.mobile
      }`}
    >
      <img
        src={afiaLogo}
        className="logo"
        alt="afia-logo"
        onClick={handleLogoClickInternal}
      />
      <div className="input-div">
        <input
          id="inp"
          className={styles.inp}
          type="text"
          placeholder="Enter your secret key 🔑"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
    </header>
  );
};

export default Heading;
