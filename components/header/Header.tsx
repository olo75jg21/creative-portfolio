import React from "react";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <TopBar />
    </div>
  );
};

export default Header;
