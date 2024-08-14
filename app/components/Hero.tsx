import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style["hero_wrapper"]}>
      <div className={style.hero_text}>
        <h1>
          Automating the <strong> Future of Surgery </strong> with Innovative
          Technology
        </h1>
      </div>
    </div>
  );
};

export default Hero;
