import React from "react";
import style from "./OurTeamCard.module.css";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

interface OurTeamCard_props {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  description: string;
  position: string;
  Linkedin_link: string;
  github_link: string;
}

const OurTeamCard: React.FC<OurTeamCard_props> = ({
  ImageSrc,
  ImageAlt,
  name,
  description,
  position,
  Linkedin_link,
  github_link,
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

        <div className={style.socialIcon}>
          <a href={Linkedin_link} target="blank">
            <Linkedin className={style.icon} />
          </a>
          <a href={github_link}>
            <Github className={style.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
