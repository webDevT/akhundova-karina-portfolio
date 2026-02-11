"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectDetail.module.scss";

const CTA_SECTION_ID = "cta-section";

export default function VisitSiteBar({ url, projectTitle }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ctaEl = document.getElementById(CTA_SECTION_ID);
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > 320;
      if (!ctaEl) {
        setVisible(scrolledPastHero);
        return;
      }
      const rect = ctaEl.getBoundingClientRect();
      const ctaInView = rect.top < window.innerHeight;
      setVisible(scrolledPastHero && !ctaInView);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!url) return null;

  return (
    <div
      className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ""}`}
      role="banner"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.stickyBarLink}
        aria-label={`Visit ${projectTitle} (opens in new tab)`}
      >
        <span className={styles.stickyBarText}>Visit live site</span>
        <Image
          src="/images/arrow-top.svg"
          alt=""
          width={9}
          height={9}
          className={styles.stickyBarArrow}
          aria-hidden
        />
      </a>
    </div>
  );
}
