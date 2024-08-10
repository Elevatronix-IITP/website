import React from "react";
import style from "./Hero2.module.css";

const Hero2 = () => {
  return (
    <div className={style["hero_wrapper"]}>
      <div className={style.hero_text}>
        <div>
          <h1>
            This <strong> is Hero</strong> Heading
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
