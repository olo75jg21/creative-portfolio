import TextReveal from "@/animations/TextReveal";
import React from "react";
import RevealText from "../common/revealText/RevealText";

type Props = {};

const About = (props: Props) => {
  return (
    <div style={{ paddingTop: 300 }}>
      <RevealText text="Text to reveal" />
    </div>
  );
};

export default About;
