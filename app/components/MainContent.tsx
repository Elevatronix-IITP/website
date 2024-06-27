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
          Lorem ipsum dolor sit amet consectetur. Non lacus non vestibulum quam
          sagittis amet lacinia. Vulputate suspendisse egestas vel ullamcorper
          lacus.Lorem ipsum dolor sit amet consectetur. Non lacus non vestibulum
          quam sagittis amet lacinia. Vulputate suspendisse egestas vel
          ullamcorper lacus. Lorem ipsum dolor sit amet consectetur. Non lacus
          non vestibulum quam sagittis amet lacinia. Vulputate suspendisse
          egestas vel ullamcorper lacus.Lorem ipsum dolor sit amet consectetur.
          Non lacus non vestibulum quam sagittis amet lacinia. Vulputate
          suspendisse egestas vel ullamcorper lacus.
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
