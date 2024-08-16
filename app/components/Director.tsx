import React from "react";
import DirectorCard from "./DirectorCard";
import style from "./Director.module.css";
import Image from "next/image";

const Director = () => {
  return (
    <div>
      <div className={style.director_wrapper}>
        <DirectorCard
          ImageSrc="/asset/new.jpg"
          ImageAlt="Dr Shashi Kumar"
          name="Dr Shashi Kumar"
          description="Dr. Shashi Kumar has 15 years of experience as a dentist. With a robust academic background, he combines clinical expertise with strong management skills. His extensive experience in the medical field provides invaluable insights into the practical applications of our automated surgical instruments."
          position="Co-Founder"
          linkedin="https://www.linkedin.com/in/dr-shashi-kumar-36832445/"
          twitter_link="#"
        />
        <DirectorCard
          ImageSrc="/asset/Partha sarthi.jpg"
          ImageAlt="Partha Sarathi Mallick"
          name="Partha Sarathi Mallick"
          description="Partha Sarathi Mallick is a distinguished PhD scholar at Indian Institute of Technology Patna. With extensive research experience in the development of customized products, he has adeptly applied various manufacturing processes to innovate and enhance product design and functionality of the product."
          position="Co-Founder"
          linkedin="https://www.linkedin.com/in/8981196700/"
          twitter_link="https://x.com/PSMALLICK96700"
        />
      </div>

      <div className={style.mentor}>
        <h1>Our Founding Advisor</h1>
        <hr />
        <div className={style.mentorCard}>
          <Image
            src="/asset/Dr Karali Patra.png"
            width={300}
            height={300}
            alt="Dr Karali Patra"
          />
          <h3>Dr. Karali Patra</h3>
          <h5>Professor IIT Patna</h5>
          <p>
            He brings over a decade of research experience in smart sensors,
            actuators, microfabrication, and the development of advanced medical
            equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
