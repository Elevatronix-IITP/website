import React from "react";
import style from "./contact_us.module.css";
import Footer from "../components/Footer";

const contactUs = () => {
  return (
    <div>
      <div className={style.contact}>
        <h1>Get in Touch With Us</h1>
        <div className={style.contact_wrapper}>
          <form className={style.contact_form}>
            <h2>Contact Us</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name "
              required
            />
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Id"
              required
            />
            <label htmlFor="phone">Phone No.</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Phone Number"
              required
            />
            <label htmlFor="subject"> Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter Your Subbject "
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter Your Message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default contactUs;
