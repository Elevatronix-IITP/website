import React from "react";
import style from "./ourteam.module.css";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import Director from "../components/Director";
import Image from "next/image";

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
        <h1>Project Collaborators</h1>
        <div className={style.collaborator}>
          <div className={style.collab}>
            <Image
              src="/asset/Akshya_Saxena.jpeg"
              alt="Akshya Saxena"
              width={200}
              height={200}
            />
            <h3>Akshya Saxena</h3>
            <h6>(Phd Scholar IIT Patna)</h6>
            <p>
              An accomplished researcher with more than 5 years of research
              exprience in the field of robotics and automation.
            </p>
          </div>
          <div className={style.collab}>
            <Image
              src="/asset/Abhishek-Anand.jpg"
              alt="Akshya Saxena"
              width={200}
              height={200}
            />

            <h3>Dr. Abhishek Anand</h3>
            <h6>(MS, DNB, FVRS, FRCS Assistant Professor, RIO, IGIMS-Patna)</h6>
            <p>
              He is an award-winning ophthalmologist with expertise in
              Paediatric Vitreo-Retinal Disorders, Myopic Macular Disorders, and
              Macular Buckling.
            </p>
          </div>
          <div className={style.collab}>
            <Image
              src="/asset/ravishankar.jpg"
              alt="Ravi Shankar"
              width={200}
              height={200}
            />

            <h3>Dr. Ravi Shankar Anand</h3>
            <h6>(Assistant Professor BIT Patna)</h6>
            <p>
              He has research experience in the field of micromachining,
              computer-aided design, robotics, and artificial intelligence.
            </p>
          </div>
        </div>
        <div className={style.h1Intern}>
          <h1>Engineer Working as an Intern</h1>
        </div>
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
