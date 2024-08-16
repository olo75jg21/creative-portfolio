import React from "react";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";
import HorizontalCarousel from "../horizontalCarousel/HorizontalCarousel";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <TopBar />
      <div>
        <div>FRONTEND</div>
        <div>
          <p>
            Crafting visually stunning and highly interactive web experiences
            with a blend of creativity and technical expertise.
          </p>
        </div>
      </div>
      <HorizontalCarousel speed={1} direction="right">
        <div>JAKUB OLCHA</div>
      </HorizontalCarousel>
      <div>DEVELOPER</div>
      <div className={`${styles.bottomRowTexts} px-main`}>
        <div className={`typo-md ${styles.descriptionWrapper}`}></div>
      </div>
    </div>
  );
};

export default Header;
