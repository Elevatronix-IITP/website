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
          <div className={style.embed_map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0656981202446!2d84.8517746759379!3d25.53618841788586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f694d904f%3A0xec61bf6ba64170a9!2sIncubation%20Centre%2C%20IIT%20patna!5e0!3m2!1sen!2sin!4v1719392988655!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default contactUs;
