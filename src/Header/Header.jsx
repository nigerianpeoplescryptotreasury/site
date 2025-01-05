import styles from "./Header.module.css";
import logo from "../assets/logo.png";  // Import the logo image

function Header() {
  return (
    <div className={styles["header-background"]}>
      <div className={styles["header-content"]}>
          <div className={styles["header-text-blur"]}>
            <img src={logo} alt="Logo" className={styles["logo"]} />
             Nigerian Crypto Treasury
            <img src={logo} alt="Logo" className={styles["logo"]} />
          </div>
      </div>
    </div>
  );
}

export default Header;
