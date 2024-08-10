import React from "react";
import Card from "./Card";
import style from "./OurExpertise.module.css";

function OurExpertise() {
  return (
    <div>
      <div className={style.our_expertise}>
        <Card
          imageSrc="/asset/bulb.svg"
          imageAlt="Eye Icon"
          title="Developing and refining of automated surgical tool"
          description="Developing and refining of automated surgical tool."
        />
        <Card
          imageSrc="/asset/fabrication.svg"
          imageAlt="Tooth icon"
          title="Engineering in Precise fabrication and testing"
          description="Engineering in Precise Fabrication and Testing."
        />
        <Card
          imageSrc="/asset/dental.svg"
          imageAlt="other"
          title="Digital diagnosis"
          description="Building responsive and modern web applications. Building responsive and modern web applications."
        />
        <Card
          imageSrc="/asset/doctor.svg"
          imageAlt="other"
          title="Top Global Medical practitioner and retails Giants"
          description="Building responsive and modern web applications. Building responsive and modern web applications."
        />
      </div>
    </div>
  );
}

export default OurExpertise;
