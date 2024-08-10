import React from "react";
import DirectorCard from "./DirectorCard";
import style from "./Director.module.css";
import Image from "next/image";

const Director = () => {
  return (
    <div>
      <div className={style.director_wrapper}>
        <DirectorCard
          ImageSrc="/asset/Dr shashi.png"
          ImageAlt="Dr shashi"
          name="Dr Shashi Kumar"
          description="Dr. Shashi Kumar brings over 15 years of experience as a dentist to Elevatronix Pvt. Ltd. With a robust academic background, including a BDS, a Postgraduate Diploma in Hospital and Health Management (PGDHH), and an MBA in Hospital Management, he combines clinical expertise with strong management skills. His extensive experience in the dental field provides invaluable insights into the practical applications of our automated surgical instruments."
          position="Co-Founder"
        />
        <DirectorCard
          ImageSrc="/asset/Partha sarthi.png"
          ImageAlt="Dr shashi"
          name="Partha sarathi Mallick"
          description="Partha Sarathi Mallick is a distinguished PhD research scholar at the Indian Institute of Technology, Patna. With extensive research experience in the development of customized products, he has adeptly applied various manufacturing processes to innovate and enhance product design and functionality. His deep understanding of engineering principles and his hands-on approach to solving complex problems have been pivotal in his research journey."
          position="Co-Founder"
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
            alt="Dr "
          />
          <h4>Dr. Karali Patra</h4>
          <h6>Professor IIT Patna</h6>
          <p>
            He has research experience of more than a decades in the field of
            Smart sensors , actuators and energy harvesting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
