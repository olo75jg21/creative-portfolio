import RevealTextOnScroll from "@/animations/revealTextOnScroll/RevealTextOnScroll";
import React from "react";

const About = () => {
  return (
    <div
      style={{ height: "100vh", paddingTop: 400 }}
      className="typo-lg px-main"
    >
      <RevealTextOnScroll text="Lorem Ipsum is simply dummy text of since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
  );
};

export default About;
