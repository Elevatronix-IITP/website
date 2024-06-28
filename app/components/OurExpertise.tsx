import React from "react";
import Card from "./Card";
import style from "./OurExpertise.module.css";

function OurExpertise() {
  return (
    <div>
      <div className={style.our_expertise}>
        <Card
          imageSrc="../../public/asset/eye_img_our_expertise.jpg"
          imageAlt="Eye Icon"
          title="Automated Eye Surgical Equipment"
          description="Building responsive and modern web applications. Building responsive and modern web applications. Building responsive and modern web applications."
        />
        <Card
          imageSrc="../../public/asset/eye_img_our_expertise.jpg"
          imageAlt="Tooth icon"
          title="Dental Equipment"
          description="Building responsive and modern web applications. Building responsive and modern web applications. Building responsive and modern web applications."
        />
        <Card
          imageSrc="../../public/asset/eye_img_our_expertise.jpg"
          imageAlt="other"
          title="Automation"
          description="Building responsive and modern web applications. Building responsive and modern web applications."
        />
      </div>
    </div>
  );
}

export default OurExpertise;
