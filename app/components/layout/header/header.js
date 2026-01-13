"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import NavLink from "./NavLink";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <header className={`${styles.header} ${isScrolled ? styles.sticky : ''}`}>

     

        <div className={`container ${styles.container}`}>

          <a href="/" className={styles.headerLogo}>
            <img src="images/logo.svg" alt="logo" />
          </a>


          <div 
            className={`${styles.headerMenuToggle} ${isMenuOpen ? styles.headerMenuToggleActive : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
           <span className={styles.headerMenuToggleLine}></span>
           <span className={styles.headerMenuToggleLine}></span>
           <span className={styles.headerMenuToggleLine}></span>
          </div>

          <div className={`${styles.headerMenu} ${isMenuOpen ? styles.headerMenuOpen : ''}`}>

          <div className={styles.headerMenuLinks}>
          <NavLink href="/" className={styles.headerMenuLink}>Home</NavLink>
          <NavLink href="/" className={styles.headerMenuLink}>About me</NavLink>
          <NavLink href="/" className={styles.headerMenuLink}>Portfolio</NavLink>
          <NavLink href="/" className={styles.headerMenuLink}>Services</NavLink>
          </div>

          <div className={styles.headerMenuContact}>
            <a href="#" className={styles.headerMenuContactLink}>
              <span className={styles.headerMenuContactLinkText}>Contact Me</span>
              
              <img src="images/arrow-top.svg" alt="arow top" className={styles.headerMenuContactLinkIcon} /></a>
          </div>
        </div> 


        </div>

        


      </header>
    );
  }
  