"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import NavLink from "./NavLink";
import { header as headerContent } from "@/data";

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
            <Image 
              src={headerContent.images.logo.src} 
              alt={headerContent.images.logo.alt} 
              width={headerContent.images.logo.width} 
              height={headerContent.images.logo.height} 
            />
          </a>


          <div 
            className={`${styles.headerMenuToggle} ${isMenuOpen ? styles.headerMenuToggleActive : ''}`}
            onClick={toggleMenu}
            aria-label={headerContent.menuToggleAria}
          >
           <span className={styles.headerMenuToggleLine}></span>
           <span className={styles.headerMenuToggleLine}></span>
           <span className={styles.headerMenuToggleLine}></span>
          </div>

          <div className={`${styles.headerMenu} ${isMenuOpen ? styles.headerMenuOpen : ''}`}>

          <div className={styles.headerMenuLinks}>
          <NavLink href="/" className={styles.headerMenuLink}>{headerContent.nav.home}</NavLink>
          <NavLink href="/" className={styles.headerMenuLink}>{headerContent.nav.about}</NavLink>
          <NavLink href="/" className={styles.headerMenuLink}>{headerContent.nav.portfolio}</NavLink>
          <NavLink href="/" className={styles.headerMenuLink}>{headerContent.nav.services}</NavLink>
          </div>

          <div className={styles.headerMenuContact}>
            <a href="#" className={styles.headerMenuContactLink}>
              <span className={styles.headerMenuContactLinkText}>{headerContent.contact}</span>
              
              <Image 
                src={headerContent.images.arrowTop.src}
                alt={headerContent.images.arrowTop.alt}
                width={headerContent.images.arrowTop.width}
                height={headerContent.images.arrowTop.height}
                className={styles.headerMenuContactLinkIcon} 
              /></a>
          </div>
        </div> 


        </div>

        


      </header>
    );
  }
  