import styles from "./info.module.css";

export const DefaultInfo = () => {
  return (
    <div className={styles.info}>
      <p>
        Welcome to AFIA's digital scavenger hunt! Enter a secret key to begin
        your adventure...
      </p>
    </div>
  );
};
