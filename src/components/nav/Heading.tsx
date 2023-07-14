import React, { useState } from "react";
import styles from "./heading.module.css";

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

  return (
    <header className={styles.heading}>
      <img src="/src/assets/afia-logo.png" alt="afia-logo" />
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
