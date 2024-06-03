import { headerTopRowData, navigationData } from "@/data";
import styles from "./TopBar.module.css";
import { NavigationData } from "@/types";

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        {headerTopRowData.map((value) => (
          <div
            key={value}
            className="typo-sm"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        ))}
      </div>
      <nav className={styles.rightColumn}>
        <li className={styles.navWrapper}>
          {navigationData.map((value: NavigationData) => (
            <ul className="typo-sm" key={value.value}>
              {value.value}
            </ul>
          ))}
        </li>
      </nav>
    </div>
  );
};

export default TopBar;
