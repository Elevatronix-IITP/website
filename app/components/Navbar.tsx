"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.logo_wrapper}>
          <Link href="/">
            <img src="/asset/Logo.svg" alt="Company Logo" />
          </Link>
        </div>
        <nav className={`${style.nav_menu} ${isOpen ? style.open : ""}`}>
          <li className={style.nav_list}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.nav_list}>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li className={style.nav_list}>
            <Link href="/products">Our Products</Link>
          </li>
          <li className={style.nav_list}>
            <Link href="/ourteam">Our Team</Link>
          </li>
          <li className={style.nav_list}>
            <Link href="/contactUs">Contact US</Link>
          </li>
        </nav>
        <div className={style.hamburger} onClick={toggleNavbar}>
          <div className={style.hamburger_wrapper}>
            <div className={style.bars1}></div>
            <div className={style.bars2}></div>
            <div className={style.bars3}></div>
          </div>
        </div>
      </div>
      <hr />
      {isOpen && (
        <nav className={style.ham_on}>
          <li className={style.ham_list}>
            <Link href="/">Home</Link>
          </li>
          <li className={style.ham_list}>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li className={style.ham_list}>
            <Link href="/products">Our Products</Link>
          </li>
          <li className={style.ham_list}>
            <Link href="/ourteam">Our Team</Link>
          </li>
          <li className={style.ham_list}>
            <Link href="/contactUs">Contact US</Link>
          </li>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
