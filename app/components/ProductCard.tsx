import React from "react";
import style from "./ProductCard.module.css";
import Image from "next/image";
interface ProductCardProps {
  src: string;
  Product: string;
  texts: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ Product, texts, src }) => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.image_wrapper}>
          <img src={src} alt="Elevator image" />
        </div>
        <div className={style.description}>
          <h2>{Product}</h2>
          <hr />
          <p>{texts}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
