import React from "react";
import style from "./aboutUs.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
const AboutUsPage = () => {
  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <h1>About Us</h1>
        <p>
          Elevatronix Pvt. Ltd. is a firm that was established in 2023 at the
          IIT Patna incubation center, with the mission of revolutionizing
          medical equipment by introducing automation within the surgical tools.
        </p>
        <div className={style.video}>
          {/* <video src="/asset/video.mp4" controls autoPlay></video> */}
        </div>
        <h1>Our Investor</h1>
        <div className={style.investor}>
          <div className={style.new}>
            <Image
              src={"/asset/Incubation-Center-IIT-Patna.png"}
              width={150}
              height={150}
              alt="Incubation-Center-IIT-Patna"
            />
            <h4>Incubation Center IIT Patna</h4>
          </div>
          <div className={style.new}>
            <Image
              src={"/asset/Birac_logo.png"}
              width={150}
              height={150}
              alt="Birac_logo"
            />
            <h4>BIRAC</h4>
          </div>
        </div>
        <div className={style.partner}>
          <h1>Our Partner</h1>
          <Image
            src={"/asset/IIT_Patna.png"}
            width={150}
            height={150}
            alt="Birac_logo"
          />
          <h4>IIT Patna</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
