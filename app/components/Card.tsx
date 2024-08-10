import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div>
      <div className={styles.card_container}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={100}
          height={100}
          className={styles.img}
        />
        <div>
          <h3>{title}</h3>
          {/* <h6>{description}</h6> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
