import styles from "./info.module.css";

export const FinalPage = () => {
  return (
    <div className={styles.info}>
      <h2>Congratulations! You submitted the correct final key!</h2>
      <h3>Quick head to our Instagram @auafia!</h3>
      <p>
        The first 10 people to DM our account the word <em>Tagalog</em> will get
        to select their prize.
      </p>
      <p>First come first serve, good luck!</p>
    </div>
  );
};
