import "./index.css";
import React, { useState } from "react";
import Heading from "./components/nav/Heading";
import Hero from "./components/Hero";
import { DefaultInfo } from "./components/info/DefaultInfo";
import { Info01 } from "./components/info/Info01";
import { Info02 } from "./components/info/Info02";
import { Info03 } from "./components/info/Info03";
import { Info04 } from "./components/info/Info04";
import { Info05 } from "./components/info/Info05";
import { FinalPage } from "./components/info/FinalPage";
import { WrongKey } from "./components/info/WrongKey";

const App: React.FC = () => {
  const [info, setInfo] = useState(<DefaultInfo />);

  const handleButtonClick = (inputValue: string) => {
    const lowerCaseInput = inputValue.toLowerCase();

    if (lowerCaseInput === "key1") {
      setInfo(<Info01 />);
    } else if (lowerCaseInput === "key2") {
      setInfo(<Info02 />);
    } else if (lowerCaseInput === "key3") {
      setInfo(<Info03 />);
    } else if (lowerCaseInput === "key4") {
      setInfo(<Info04 />);
    } else if (lowerCaseInput === "key5") {
      setInfo(<Info05 />);
    } else if (lowerCaseInput === "finalkey") {
      setInfo(<FinalPage />);
    } else {
      setInfo(<WrongKey />);
    }
  };

  const handleLogoClick = () => {
    setInfo(<DefaultInfo />);
  };

  return (
    <div>
      <Heading
        handleButtonClick={handleButtonClick}
        handleLogoClick={handleLogoClick}
      />
      <Hero info={info}></Hero>
    </div>
  );
};

export default App;
