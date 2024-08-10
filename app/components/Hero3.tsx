import React from "react";
import style from "./Hero3.module.css";

const Hero3 = () => {
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

export default Hero3;
