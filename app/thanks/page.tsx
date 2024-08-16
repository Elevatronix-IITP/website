import React from "react";
import style from "./thanks.module.css";

const Thanks = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.thanks_wrapper}>
          <h1>Thank You!</h1>
          <p>
            Your inquiry has been successfully submitted. We will get back to
            you shortly.
          </p>
          <a href="/" className={style.button}>
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
