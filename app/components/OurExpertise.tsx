import React from "react";
import Card from "./Card";
import style from "./OurExpertise.module.css";
import eye_icon from "../../public/asset/eye_img_our_expertise.jpg";

function OurExpertise() {
  return (
    <div>
      <div className={style.our_expertise}>
        <Card
          imageSrc={eye_icon}
          imageAlt="Eye Icon"
          title="Automated Eye Surgical Equipment"
          description="Building responsive and modern web applications. Building responsive and modern web applications. Building responsive and modern web applications."
        />
        <Card
          imageSrc={eye_icon}
          imageAlt="Tooth icon"
          title="Dental Equipment"
          description="Building responsive and modern web applications. Building responsive and modern web applications. Building responsive and modern web applications."
        />
        <Card
          imageSrc={eye_icon}
          imageAlt="other"
          title="Automation"
          description="Building responsive and modern web applications. Building responsive and modern web applications."
        />
      </div>
    </div>
  );
}

export default OurExpertise;
