import React from "react";
import style from "./ourteam.module.css";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <div>
      <div className={style.ourteam_wrapper}>
        <h1>Our Team</h1>
        <p className={style.our_team_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          cupiditate numquam magni similique magnam? Repellendus facere vel sit
          sed a voluptatem in id unde voluptate sequi, eaque vitae accusantium
          ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime, itaque repellat, eveniet, ex nihil dolores deleniti voluptas
          hic aliquid praesentium ipsam. Sit, inventore? Cum dolore accusamus
          veniam autem minima est.
        </p>
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
