import React from "react";
import style from "./Footer.module.css";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div>
      <div className={style.footer_wrapper}>
        <div className={style.footer}>
          <div className={style.left}>
            <div className={style.company_logo}>
              <Image
                src="/asset/Logo_black_and_white.svg"
                width={150}
                height={50}
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
                    <Phone /> <p>+91-9835884004</p>
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
      <Copyright />
    </div>
  );
};

export default Footer;
