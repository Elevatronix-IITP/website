"use client";

import React, { useState, useEffect } from "react";
import style from "./ProductCard.module.css";
import Image from "next/image";

interface ProductCardProps {
  src: string;
  product: string;
  texts: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, texts, src }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOrTab, setIsMobileOrTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTab(window.innerWidth < 1024);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const previewText = texts.slice(0, 200);

  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.image_wrapper}>
          <Image src={src} alt={product} width={400} height={300} />
        </div>
        <div className={style.description}>
          <h2>{product}</h2>
          <hr />
          <p>
            {isMobileOrTab ? (isExpanded ? texts : `${previewText}...`) : texts}
          </p>
          {isMobileOrTab && (
            <button className={style.readMoreBtn} onClick={toggleReadMore}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
