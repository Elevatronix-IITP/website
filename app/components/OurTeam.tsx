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
        Linkedin_link="https://www.linkedin.com/in/adityagecv21/"
        github_link=""
      />
      <OurTeamCard
        ImageSrc="/asset/Adityapic.jpeg"
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web developer Lead"
        description="He is the web Lead. He is so curious about his work and always see forward"
        Linkedin_link="https://www.linkedin.com/in/adityagecv21/"
        github_link=""
      />
      <OurTeamCard
        ImageSrc="/asset/Adityapic.jpeg"
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web developer Lead"
        description="He is the web Lead. He is so curious about his work and always see forward"
        Linkedin_link="https://www.linkedin.com/in/adityagecv21/"
        github_link=""
      />
    </div>
  );
};

export default OurTeam;
