import React from "react";
import OurTeamCard from "./OurTeamCard";
import style from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <div className={style.our_team_card}>
      <OurTeamCard
        ImageSrc="/asset/Adityapic.png"
        ImageAlt="Aditya Pic"
        name="Aditya Kumar"
        position="Web Developer"
        description="Passionate about creating seamless user experiences, I blend creativity with technical expertise to deliver exceptional web solutions. Leveraging a strong foundation in modern web technologies, I bring innovative ideas to life. My commitment is to develop responsive, high-performance websites that enhance our digital presence."
        Linkedin_link="https://www.linkedin.com/in/adityagecv21/"
        github_link="https://github.com/adityagecv"
        mail="mailto:aditya.gecv21@gmail.com"
      />
      <OurTeamCard
        ImageSrc="/asset/Gaurav.png"
        ImageAlt="Gaurav Pic"
        name="Gaurav Singh"
        position="Project Intern"
        description="As an automation testing specialist for surgical equipment, I meticulously verify the functionality and safety of our advanced devices. Using cutting-edge automation techniques, I ensure that each piece of equipment meets the highest standards of precision and reliability."
        Linkedin_link="https://www.linkedin.com/in/gaurav-singh-9a7399253/"
        github_link="#"
        mail="mailto:gaurav325r@gmail.com"
      />
      <OurTeamCard
        ImageSrc="/asset/Ashotoush.jpeg"
        ImageAlt="Ashutosh Dubey"
        name="Ashutosh Dubey"
        position="Project Intern"
        description="With extensive expertise in 3D software and a sharp eye for detail, I craft precise and visually striking models that are crucial for product design and development. My skillful work enhances our projects by ensuring both accuracy and aesthetic appeal. "
        Linkedin_link="https://www.linkedin.com/in/ashutosh-dubey-a4435322b/"
        github_link="#"
        mail="#"
      />
    </div>
  );
};

export default OurTeam;
