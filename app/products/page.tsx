import React from "react";
import ProductCard from "../components/ProductCard";
import style from "./product.module.css";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.topHead}>
          <h1>Cutting-edge Surgical Automation Equipment and Technologies</h1>
          <hr />
          <p>
            Our latest innovations in surgical automation equipment bring
            unprecedented precision and efficiency to medical procedures.
            Utilizing advanced robotics and intelligent control systems, these
            technologies enhance surgical outcomes and reduce recovery times.
            With features like real-time monitoring and adaptive responses, our
            equipment ensures optimal performance in complex operations.
            Designed for user-friendly integration into existing medical
            practices, these tools are set to revolutionize the field of
            surgery. Experience the future of healthcare with our cutting-edge
            solutions.
          </p>
        </div>
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
