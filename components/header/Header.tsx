import React from "react";
import Image from "next/image";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";
import HorizontalCarousel from "../horizontalCarousel/HorizontalCarousel";
import Picture from "@/assets/temp-picture.jpg";
import TextReveal from "@/animations/TextReveal";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <TopBar />
      <div className={`${styles.imageAndCarouselWrapper} px-main-left`}>
        <div className={styles.imageWrapper}>
          {/* <Image src={Picture} alt="picture" /> */}
        </div>
        <div className={`${styles.carouselWrapper} typo-3xl`}>
          <HorizontalCarousel speed={10} direction="left">
            <div>Item 3</div>
            <div>Item 3</div>
            <div>Item 3</div>
          </HorizontalCarousel>
        </div>
      </div>
      <div className={`${styles.bottomRowTexts} px-main`}>
        <div className={`typo-xl ${styles.titleWrapper}`}>
          <TextReveal>
            <h1>FRONTEND</h1>
          </TextReveal>
          <TextReveal>
            <h1>DEVELOPER</h1>
          </TextReveal>
        </div>
        <div className={`${styles.descriptionWrapper}`}>
          <TextReveal>
            <p className={`typo-md ${styles.description}`}>
              I craft dynamic and visually stunning web experiences. Explore my
              work and lets build something amazing together.
            </p>
          </TextReveal>
        </div>
      </div>
    </div>
  );
};

export default Header;
