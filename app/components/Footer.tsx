import React from "react";
import style from "./Footer.module.css";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className={style.footer_wrapper}>
        <div className={style.footer}>
          <div className={style.left}>
            <div className={style.company_logo}>
              <Image
                src="public/asset/Logo_black_and_white.svg"
                width={100}
                height={70}
                alt="Logo"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                veritatis culpa dolorum cupiditate omnis accusamus similique
                inventore.
              </p>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.quick_link}>
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={style.contact_us}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <MapPin />
                    <p>Incubation Centre, IIT Patna, Bihta, Bihar 801103</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Mail />
                    <p>abcd@gmail.com</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Phone /> <p>+91-123456789</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.social_media}>
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="">
                    <div className={style.icons_bg}>
                      <Instagram />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className={style.icons_bg}>
                      <Facebook />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className={style.icons_bg}>
                      <Linkedin />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <div className={style.quick_link}>
//   <h2>Quick Link</h2>
//   <ul>
//     <a href="#">
//       <li>Home</li>
//     </a>
//     <a href="#">
//       <li>Our Product</li>
//     </a>
//     <a href="#">
//       <li>About Us</li>
//     </a>
//   </ul>
// </div>
// <div className={style.follow_us}>
//   <h2>Follow Us</h2>
//   <div className={style.icons}>
//     <Instagram />
//     <Facebook />
//     <Linkedin />
//   </div>
// </div>
// <div className={style.contact_us}>
//   <h2>Contact Us</h2>
//   <a href="#">
//     <p>
//       <MapPin />
//       Incubation Center, IIT Patna, Amhara Road, Bihta, Patna, Bihar-
//       801103
//     </p>
//   </a>

//   <a href="#">
//     <p>
//       <Mail />
//       abc@gmail.com
//     </p>
//   </a>
//   <a href="#">
//     <p>
//       <Phone /> {"\u00A0"}
//       +91-1234567890
//     </p>
//   </a>
// </div>
// {<div className={style.embed_map}>
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0656981202446!2d84.8517746759379!3d25.53618841788586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f694d904f%3A0xec61bf6ba64170a9!2sIncubation%20Centre%2C%20IIT%20patna!5e0!3m2!1sen!2sin!4v1719392988655!5m2!1sen!2sin"
//     width="400"
//     height="300"
//     loading="lazy"
//   ></iframe>
// </div> }
