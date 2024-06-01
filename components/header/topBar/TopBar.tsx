import { headerTopRowData, navigationData } from "@/data";
import styles from "./TopBar.module.css";
import { NavigationData } from "@/types";

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        {headerTopRowData.map((value) => (
          <div key={value} dangerouslySetInnerHTML={{ __html: value }} />
        ))}
      </div>
      <div className={styles.rightColumn}>
        <nav className={styles.navWrapper}>
          {navigationData.map((value: NavigationData) => (
            <div key={value.value}>{value.value}</div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
