import React from "react";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";
import HorizontalCarousel from "../horizontalCarousel/HorizontalCarousel";
import RevealTextOnScroll from "@/animations/revealTextOnScroll/RevealTextOnScroll";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <TopBar />
      <div className={`${styles.imageAndCarouselWrapper} px-main-left`}>
        <div className={styles.imageWrapper}>
          {/* <Image src={Picture} alt="picture" /> */}
        </div>
        <div className={`${styles.carouselWrapper} typo-2xl`}>
          <HorizontalCarousel speed={10} direction="right">
            <div> Frontend </div>
          </HorizontalCarousel>

          <HorizontalCarousel speed={8} direction="left">
            <div> Developer </div>
          </HorizontalCarousel>
        </div>
      </div>
      <div className={`${styles.bottomRowTexts} px-main`}>
        <div className={`typo-xl ${styles.titleWrapper}`}>
          <h1>FRONTEND</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div className={`typo-md ${styles.descriptionWrapper}`}>
          <RevealTextOnScroll
            text="Crafting visually stunning and highly interactive web experiences
              with a blend of creativity and technical expertise."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
