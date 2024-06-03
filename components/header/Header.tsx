import React from "react";
import Image from "next/image";
import TopBar from "./topBar/TopBar";
import styles from "./Header.module.css";
import HorizontalCarousel from "../horizontalCarousel/HorizontalCarousel";
import Picture from "@/assets/temp-picture.jpg";

const Header = () => {
  return (
    <div className={`${styles.container} px-main`}>
      <TopBar />
      <div className={styles.imageAndCarouselWrapper}>
        <div className={styles.imageWrapper}>
          {/* <Image src={Picture} alt="picture" /> */}
        </div>
        <div className={`${styles.carouselWrapper} typo-3xl`}>
          <HorizontalCarousel text="Jakub Olcha" />
        </div>
      </div>
      <div className={styles.bottomRowTexts}>
        <div className={`typo-xl ${styles.titleWrapper}`}>
          <h1>FRONTEND</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div className={`${styles.descriptionWrapper}`}>
          <p className={`typo-md ${styles.description}`}>
            I craft dynamic and visually stunning web experiences. Explore my
            work and lets build something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
