import React from "react";
import style from "./DirectorCard.module.css";
import Image from "next/image";
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
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
