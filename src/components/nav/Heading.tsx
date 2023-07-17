import React, { useState } from "react";
import styles from "./heading.module.css";
import afiaLogo from "./assets/afia-logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Heading = ({
  handleButtonClick,
}: {
  handleButtonClick: (inputValue: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    handleButtonClick(inputValue);
    setInputValue("");
  };

  const matches = useMediaQuery("(min-width:450px)");

  return (
    <header
      className={`${styles.heading} ${
        matches ? styles.desktop : styles.mobile
      }`}
    >
      <img src={afiaLogo} className="logo" alt="afia-logo" />
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
