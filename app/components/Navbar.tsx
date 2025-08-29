"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; //  for navigation events
import style from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); //  loading state
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    setLoading(true); //  show loading
    setIsOpen(false); // close menu
    router.push(path); // navigate
    setTimeout(() => setLoading(false), 800); // reset after delay (optional)
  };

  return (
    <div className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.logo_wrapper}>
          <Link href="/">
            <img src="/asset/Logo.svg" alt="Company Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className={`${style.nav_menu} ${isOpen ? style.open : ""}`}>
          <li className={style.nav_list} onClick={() => handleNavigation("/")}>
            Home
          </li>
          <li
            className={style.nav_list}
            onClick={() => handleNavigation("/aboutUs")}
          >
            About Us
          </li>
          <li
            className={style.nav_list}
            onClick={() => handleNavigation("/products")}
          >
            Our Products
          </li>
          <li
            className={style.nav_list}
            onClick={() => handleNavigation("/ourteam")}
          >
            Our Team
          </li>
          <li
            className={style.nav_list}
            onClick={() => handleNavigation("/contactUs")}
          >
            Contact Us
          </li>
        </nav>

        {/* Hamburger */}
        <div className={style.hamburger} onClick={toggleNavbar}>
          <div className={style.hamburger_wrapper}>
            <div className={style.bars1}></div>
            <div className={style.bars2}></div>
            <div className={style.bars3}></div>
          </div>
        </div>
      </div>

      <hr />

      {/* Mobile Menu */}
      {isOpen && (
        <nav className={style.ham_on}>
          <li className={style.ham_list} onClick={() => handleNavigation("/")}>
            Home
          </li>
          <li
            className={style.ham_list}
            onClick={() => handleNavigation("/aboutUs")}
          >
            About Us
          </li>
          <li
            className={style.ham_list}
            onClick={() => handleNavigation("/products")}
          >
            Our Products
          </li>
          <li
            className={style.ham_list}
            onClick={() => handleNavigation("/ourteam")}
          >
            Our Team
          </li>
          <li
            className={style.ham_list}
            onClick={() => handleNavigation("/contactUs")}
          >
            Contact Us
          </li>
        </nav>
      )}

      {/*  Loading Indicator */}
      {loading && (
        <div className={style.loading_overlay}>
          <div className={style.spinner}></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
