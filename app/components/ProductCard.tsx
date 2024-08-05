import React from "react";
import style from "./ProductCard.module.css";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.image_wrapper}>
          <img src="/asset/Elevator.svg" alt="Elevator image" />
        </div>
        <div className={style.description}>
          <h2>Automated Elevator</h2>
          <hr />
          <p>
            The Automatic Elevator is an innovative dental device designed to
            automate tooth extraction by applying precise motion and pressure.
            This advanced tool enhances accuracy and efficiency, reducing
            procedure time and minimizing patient discomfort. Equipped with
            state-of-the-art sensors and control mechanisms, it ensures optimal
            force application, promoting safer extractions. Its user-friendly
            interface allows for easy operation by dental professionals. The
            Automatic Elevator revolutionizes dental surgery by integrating
            automation into traditional extraction techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
