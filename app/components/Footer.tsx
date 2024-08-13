import React from "react";
import style from "./Footer.module.css";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Twitter } from "lucide-react";
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
                Elevatronix Private Limited is an start-up company, specializes
                in designing, developing and fabricating cutting-edge automated
                surgical equipment and advanced digital diagnosis solutions.
              </p>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.quick_link}>
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/aboutUs">About Us</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/contactUs">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={style.contact_us}>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a
                    href="https://maps.app.goo.gl/VuPs5ouSNuAQUyCV9"
                    target="blank"
                  >
                    <MapPin />
                    <p>Incubation Centre, IIT Patna, Bihta, Bihar 801103</p>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@elevatronix.in">
                    <Mail />
                    <p>info@elevatronix.in</p>
                  </a>
                </li>
                <li>
                  <a href="tel:+91-9835884004">
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
                  <a
                    href="https://www.linkedin.com/company/elevatronix-official/"
                    target="blank"
                  >
                    <div className={style.icons_bg}>
                      <Linkedin />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/elevatronix" target="blank">
                    <div className={style.icons_bg}>
                      <Twitter />
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
