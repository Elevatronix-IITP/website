import React from "react";
import style from "./Footer.module.css";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className={style.footer_wrapper}>
        <div className={style.quick_link}>
          <h2>Quick Link</h2>
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Our Product</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
          </ul>
        </div>
        <div className={style.follow_us}>
          <h2>Follow Us</h2>
          <div className={style.icons}>
            <Instagram />
            <Facebook />
            <Linkedin />
          </div>
        </div>
        <div className={style.contact_us}>
          <h2>Contact Us</h2>
          <a href="#">
            <p>
              <MapPin />
              Incubation Center, IIT Patna, Amhara Road, Bihta, Patna, Bihar-
              801103
            </p>
          </a>

          <a href="#">
            <p>
              <Mail />
              abc@gmail.com
            </p>
          </a>
          <a href="#">
            <p>
              <Phone /> {"\u00A0"}
              +91-1234567890
            </p>
          </a>
        </div>
        <div className={style.embed_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0656981202446!2d84.8517746759379!3d25.53618841788586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f694d904f%3A0xec61bf6ba64170a9!2sIncubation%20Centre%2C%20IIT%20patna!5e0!3m2!1sen!2sin!4v1719392988655!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
