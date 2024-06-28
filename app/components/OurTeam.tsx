import React from "react";
import OurTeamCard from "./OurTeamCard";
import style from "./OurTeam.module.css";
import Aditya from "../../public/asset/Adityapic.jpeg";

const OurTeam = () => {
  return (
    <div>
      <OurTeamCard
        ImageSrc={Aditya}
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web developer Lead"
        description="He is the web Lead. He is so curious about his work and always see forward"
      />
    </div>
  );
};

export default OurTeam;
