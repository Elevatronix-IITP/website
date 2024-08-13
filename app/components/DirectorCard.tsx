import React from "react";
import style from "./DirectorCard.module.css";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

interface DirectorCardProps {
  ImageSrc: string;
  ImageAlt: string;
  name: string;
  description: string;
  position: string;
  linkedin: string;
}

const DirectorCard: React.FC<DirectorCardProps> = ({
  ImageSrc,
  ImageAlt,
  name,
  description,
  position,
  linkedin,
}) => {
  return (
    <div>
      <div className={style.Dcard_wrapper}>
        <div className={style.Dcard}>
          <div className={style.img_wrapper}>
            <Image
              src={ImageSrc}
              alt={ImageAlt}
              width={300}
              height={300}
              className={style.image}
            />
          </div>

          <div className={style.text}>
            <h3>{name}</h3>
            <h5>{position}</h5>
            <p>{description}</p>
          </div>
          <div className={style.socialIcon}>
            <a href={linkedin} target="blank">
              <Linkedin className={style.icon} />
            </a>
            <a href="#" target="blank">
              <Twitter className={style.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
