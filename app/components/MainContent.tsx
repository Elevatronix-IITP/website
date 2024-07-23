import React from "react";
import style from "./MainContent.module.css";
import OurExpertise from "./OurExpertise";

const MainContent = () => {
  return (
    <div>
      <div className={style.mainContent}>
        <h1>Elevatronix Pvt. Ltd.</h1>
        <hr />
        <p>
          At Elevatronix Pvt. Ltd., we are at the forefront of a revolution in
          surgical technology, pioneering the automation of surgical
          instruments. By integrating cutting-edge technology into the operating
          room, we are transforming the way surgeries are performed, making them
          more precise, efficient, and safe.
        </p>
      </div>
      <div className={style.specsOfCompany}>
        <h1>Our Expertise</h1>
        <OurExpertise />
      </div>
    </div>
  );
};

export default MainContent;
