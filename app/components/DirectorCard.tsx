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
}

const DirectorCard: React.FC<DirectorCardProps> = ({
  ImageSrc,
  ImageAlt,
  name,
  description,
  position,
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
            <a href="#" target="blank">
              <Linkedin />
            </a>
            <a href="#" target="blank">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
