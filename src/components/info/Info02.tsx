import styles from "./info.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Info02 = () => {
  const matches = useMediaQuery("(min-width:450px)");

  return (
    <div
      className={`${styles.info} ${matches ? styles.desktop : styles.mobile}`}
    >
      <h2>Challenge 2 of 5: Welcome! 👋</h2>
      <h4>How to use useMediaQuery Component in ReactJS?</h4>
      <span>{`Is Screen at Minimum 450px: ${matches}`}</span>
    </div>
  );
};
