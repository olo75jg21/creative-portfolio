import { headerTopRowData } from "@/data";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        {headerTopRowData.map((value) => (
          <div key={value} dangerouslySetInnerHTML={{ __html: value }} />
        ))}
      </div>
      <nav className={styles.rightColumn}>nav</nav>
    </div>
  );
};

export default TopBar;
