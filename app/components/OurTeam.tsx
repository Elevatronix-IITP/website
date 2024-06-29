import React from "react";
import OurTeamCard from "./OurTeamCard";
import style from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <div className={style.our_team_card}>
      <OurTeamCard
        ImageSrc="/asset/Adityapic.jpeg"
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web developer Lead"
        description="He is the web Lead. He is so curious about his work and always see forward"
      />
      <OurTeamCard
        ImageSrc="/asset/Adityapic.jpeg"
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web developer Lead"
        description="He is the web Lead. He is so curious about his work and always see forward"
      />
      <OurTeamCard
        ImageSrc="/asset/Adityapic.jpeg"
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web developer Lead"
        description="He is the web Lead. He is so curious about his work and always see forward"
      />
    </div>
  );
};

export default OurTeam;
