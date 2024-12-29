import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-component"]}>
      <div className={styles["about-text"]}>
        <p>
          The Nigerian People Crypto Treasury is a groundbreaking initiative
          that distributes a unique cryptocurrency coin to every Nigerian, giving
          them the opportunity to be part of the digital financial revolution.
          Whether you are new to crypto or already familiar with it, this project
          aims to create equal opportunities for everyone.
        </p>
          <b>Why Get Involved?</b>
          <ul>
            <li>Free Coin for Every Nigerian: Each citizen will receive a coin at no cost.</li>
            <li>Financial Inclusion: Unlock new possibilities for personal wealth and investment in the digital economy.</li>
            <li>Educational Resources: Learn about the crypto world with our easy-to-understand guides and resources.</li>
            <li>Community-Driven Growth: Join a nationwide movement that puts Nigeria on the map as a leader in crypto adoption.</li>
          </ul>
        <b> How It Works:</b>
          <ol>
            <li>Register: Sign up with your Nigerian ID and basic details.</li>
            <li>Receive Your Coin: Once verified, you'll be credited with your free coin.</li>
            <li>Use or Hold: You can hold onto your coin, trade it, or explore opportunities to grow it within the crypto space.</li>
          </ol>
      </div>
      <div className={styles["about-coin"]}>
        <p> <b>Current Supply</b> 234,510,055</p>
        <p> <b>Authority address</b> 3iYEdJhq9m1hs2er6S4uUmvYyJRufQPUL21cfdC1gXMj</p>
        <p> <b>Token address </b> 95tdDDYmm4T1UrbJfG3mQMhMffeJVJdrSSoDkizekrRw</p>
      </div>
    </div>
  );
}

export default About;
