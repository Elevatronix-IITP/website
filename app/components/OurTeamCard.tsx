import React from "react";
import style from "./OurTeamCard.module.css";
import Image from "next/image";

interface OurTeamCard_props {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  description: string;
  position: string;
}

const OurTeamCard: React.FC<OurTeamCard_props> = ({
  ImageSrc,
  ImageAlt,
  name,
  description,
  position,
}) => {
  return (
    <div className={style.our_team_card}>
      <div className={style.our_team_card_wrapper}>
        <div className={style.bg}></div>
        <Image
          src={ImageSrc}
          alt={ImageAlt}
          width={100}
          height={100}
          className={style.image}
        />
        <div className={style.text}>
          <h3>{name}</h3>
          <h6>{position}</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
