import React from "react";
import style from "./ourteam.module.css";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import Director from "../components/Director";

const Team = () => {
  return (
    <div>
      <div className={style.ourteam_wrapper}>
        <div className={style.ourteam_text}>
          <h1>Our Team</h1>
          <p className={style.our_team_text}>
            At Elevatronix Pvt. Ltd., our strength lies in the expertise and
            passion of our team. We are a startup dedicated to revolutionizing
            the field of surgical instruments through advanced automation. Our
            diverse team comprises experienced professionals who bring together
            a wealth of knowledge in engineering, medical technology, and
            innovative design.
          </p>
        </div>
        <Director />
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
