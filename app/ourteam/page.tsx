import React from "react";
import style from "./ourteam.module.css";
import OurTeam from "../components/OurTeam";

const Team = () => {
  return (
    <div>
      <div className={style.ourteam_wrapper}>
        <h1>Our Team</h1>
        <OurTeam />
      </div>
    </div>
  );
};

export default Team;
