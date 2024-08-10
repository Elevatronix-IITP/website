import React from "react";
import style from "./aboutUs.module.css";
import { Suspense } from "react";

const AboutUsPage = () => {
  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <video autoPlay muted loop>
          <source src="/asset/actuator-casing.mkv" type="video/mkv" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutUsPage;
