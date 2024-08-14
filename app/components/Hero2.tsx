import React from "react";
import Image from "next/image";
import style from "./Hero2.module.css";

const Hero2 = () => {
  return (
    <div className={style["hero_wrapper"]}>
      <div className={style.hero_text}>
        <div>
          <h1>
            Automating <strong> Eye Surgery</strong> with Next-Generation
            Precision Tools
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
