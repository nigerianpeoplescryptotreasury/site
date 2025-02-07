import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-component"]}>
      <div className={styles["about-text"]}>
        <p>
          The Nigerian Crypto Treasury is a groundbreaking initiative
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
  <p> <b>Current Supply</b> 234,510,055 NIGs</p>
  <p> <b>DevTeam/Pool ratio</b> <span className={styles.address}>80/20</span></p>
  <p> <b>Authority address</b> <span className={styles.address}>root2HnvK1ri1wLF6pkwgzmnHNGg368GbjbAvkkfchH</span></p>
  <p> <b>Token address </b> 
    <a href="https://solscan.io/token/nig2N7dLWtLoLHUc1QLK8vL2h3vDn8DfGvsac7mx4QB" target="_blank" rel="noopener noreferrer" className={styles.address}>
        nig2N7dLWtLoLHUc1QLK8vL2h3vDn8DfGvsac7mx4QB
    </a>
  </p>
</div>
    </div>
  );
}

export default About;
