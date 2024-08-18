import React from "react";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";
import HorizontalCarousel from "../horizontalCarousel/HorizontalCarousel";
import Container from "../layout/container/Container";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <TopBar />
      <div className={`${styles.topRowContainer}`}>
        <div className={`${styles.header} typo-4xl typo-bold`}>FRONT-END</div>
        <div className={`${styles.description} typo-rg`}>
          <p>
            Crafting visually stunning and highly interactive web experiences
            with a blend of creativity and technical expertise.
          </p>
        </div>
      </div>
      <HorizontalCarousel speed={4} direction="right">
        <div className="typo-2xl">JAKUB OLCHA</div>
      </HorizontalCarousel>
      <div className={styles.secondHeaderContainer}>
        <div className={`${styles.header} typo-4xl typo-bold`}>DEVELOPER</div>
      </div>
      <div className={`${styles.bottomRowTexts} px-main`}>
        <div className={`typo-md ${styles.descriptionWrapper}`}></div>
      </div>
    </div>
  );
};

export default Header;
