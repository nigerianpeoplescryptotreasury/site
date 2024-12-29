import styles from "./SideBar.module.css";

function SideBar({ onNavigate }) {
  return (
    <div className={styles["side-bar"]}>
      <ul>
        <li onClick={() => onNavigate("about")}>About</li>
        <li onClick={() => onNavigate("famous-investors")}>Famous Investors</li>
        <li onClick={() => onNavigate("apply-for-drop")}>Apply for Drop</li>
      </ul>
    </div>
  );
}

export default SideBar;
