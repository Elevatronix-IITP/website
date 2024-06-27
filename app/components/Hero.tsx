import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero_wrapper}>
      <div className={style.hero_text}>
        <h1>
          This<strong> is Hero</strong> Heading
        </h1>
      </div>
    </div>
  );
};

export default Hero;
