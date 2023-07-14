import styles from "./info.module.css";

export const Info01 = () => {
  return (
    <div className={styles.info}>
      <h2>Challenge 1 of 5: Welcome! 👋</h2>
      <h3>Welcome to the AFIA secret keys game!</h3>
      <p>We'll come up with a better name later.</p>
      <p>
        Firstly, the AFIA team would like to welcome you to a new school year
        centered around the theme <em>Tuloy Po Kayo</em>. <br />
        Anyone and everyone is welcome to join the AFIA family and this is our
        way of welcoming you while also giving you the chance to win some
        awesome prizes.
      </p>
      <h4>How does it work?</h4>
      <p>
        During our AFIA events will be be giving out a total of 5 secret keys.
        For every event there will be 1 key given out. <br />
        You will use the secret keys here on this website to unlock parts of the
        final key. The first 10 people to collect the final key will win some
        prizes.
      </p>
      <p>Prizes include:</p>
      <ul>
        <li>(3) $20 Amazon Gift Cards</li>
        <li>(2) $10 Gift cards from an AFIA partner</li>
        <li>(5) AFIA Tote Bags</li>
      </ul>
      <h4>Rules</h4>
      <ul>
        <li>You must be an AFIA member to participate.</li>
        <li>Prizes will be given out on a first come first serve basis.</li>
        <li>
          All secret keys, including the final key, can be a combination of
          characters and numbers (i.e. icecream123DISCO) and are not case
          sensitive.
        </li>
      </ul>
      <h3>
        The first part of the final key is: <em>mango</em>
      </h3>
    </div>
  );
};
