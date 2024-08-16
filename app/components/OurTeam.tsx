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
        description="Passionate about creating seamless user experiences, he blend creativity with technical expertise to deliver exceptional web solutions. Leveraging a strong foundation in modern web technologies, he develop responsive, high-performance websites that enhance digital presence."
        Linkedin_link="https://www.linkedin.com/in/adityagecv21/"
        github_link="https://github.com/adityagecv"
        mail="mailto:aditya.gecv21@gmail.com"
      />
      <OurTeamCard
        ImageSrc="/asset/Gaurav.png"
        ImageAlt="Gaurav Pic"
        name="Gaurav Singh"
        position="Project Intern"
        description="Using cutting-edge testing techniques, he ensure that surgical equipment meets the highest standards of precision and reliability."
        Linkedin_link="https://www.linkedin.com/in/gaurav-singh-9a7399253/"
        github_link="#"
        mail="mailto:gaurav325r@gmail.com"
      />
      <OurTeamCard
        ImageSrc="/asset/Ashotoush.jpeg"
        ImageAlt="Ashutosh Dubey"
        name="Ashutosh Dubey"
        position="Project Intern"
        description="With extensive expertise in 3D software, he craft precise and visually striking models that are crucial for product design and development."
        Linkedin_link="https://www.linkedin.com/in/ashutosh-dubey-a4435322b/"
        github_link="#"
        mail="mailto:akdubey1796082@gmail.com"
      />
      <OurTeamCard
        ImageSrc="/asset/Raushan.jpeg"
        ImageAlt="Raushan"
        name="Raushan Kumar"
        position="Project Intern"
        description="He spearheads redesign and testing of advanced surgical equipment with a keen focus on precision and innovation."
        Linkedin_link="#"
        github_link="#"
        mail="mailto:raushan_2021bmec062@nitsri.ac.in"
      />
      <OurTeamCard
        ImageSrc="/asset/Capture.jpg"
        ImageAlt="Purushottam Singh"
        name="Purushottam Singh"
        position="Project Intern"
        description="He has expertise in transforming concepts into precise, functional prototypes through  CAD design and 3D printing of innovative equipment prototype. "
        Linkedin_link="#"
        github_link="#"
        mail="#"
      />
    </div>
  );
};

export default OurTeam;
