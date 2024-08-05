import React from "react";
import style from "./new.module.css";
const page = () => {
  return (
    <div className={style.main}>
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <div className={style.img}>
            <img src="/asset/Elevator.svg" alt="" />
          </div>
          <div className={style.description}>
            <h1>This is heading</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              soluta hic error omnis corrupti quia, accusantium quae sunt,
              asperiores mollitia odit pariatur non iusto dolor illum alias cum
              nostrum voluptates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
