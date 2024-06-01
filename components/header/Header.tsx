import React from "react";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.container} px-main`}>
      <TopBar />
      <div className={styles.imageCarouselWrapper}>
        <div>IMG</div>
        <div>CAROUSEL</div>
      </div>
      <div className={styles.textsWrapper}>
        <div>TITLE TEXT</div>
        <div>
          I craft dynamic and visually stunning web experiences. Explore my work
          and lets build something amazing together.
        </div>
      </div>
    </div>
  );
};

export default Header;
