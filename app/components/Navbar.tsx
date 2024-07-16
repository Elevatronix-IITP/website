"use client";
import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.logo_wrapper}>
          <a href="#">
            <img src="./asset/Logo.svg" alt="Company Logo" />
          </a>
        </div>
        <nav className={style.nav_menu}>
          <li className={style.nav_list}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.nav_list}>
            <a href="#">About Us</a>
          </li>
          <li className={style.nav_list}>
            <a href="#">Our Products</a>
          </li>
          <li className={style.nav_list}>
            <Link href="/ourteam">Our Team</Link>
          </li>
          <li className={style.nav_list}>
            <Link href="/contactUs">Contact US</Link>
          </li>
        </nav>
        <div className={style.hamburger} onClick={() => console.log("hi")}>
          <div className={style.hamburger_wrapper}>
            <div className={style.bars1}></div>
            <div className={style.bars2}></div>
            <div className={style.bars3}></div>
          </div>
        </div>
      </div>
      <hr />
      <nav className={style.ham_on}>
        <li className={style.ham_list}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.ham_list}>
          <a href="#">About Us</a>
        </li>
        <li className={style.ham_list}>
          <a href="#">Our Products</a>
        </li>
        <li className={style.ham_list}>
          <Link href="/ourteam">Our Team</Link>
        </li>
        <li className={style.ham_list}>
          <Link href="/contactUs">Contact US</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
