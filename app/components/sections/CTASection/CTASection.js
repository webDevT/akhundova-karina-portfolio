"use client";

import Image from "next/image";
import styles from "./CTASection.module.scss";
import { cta } from "@/data";
import { useContactModal } from "@/app/components/ContactModal";

export default function CTASection() {
  const { open } = useContactModal();

  return (
    <section className={styles.ctaSection} id="contact">
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={`h2 ${styles.ctaTitle}`}>{cta.title}</h2>
          <p className={styles.ctaDescription}>{cta.description}</p>
          <button
            type="button"
            onClick={open}
            className={styles.ctaButton}
            aria-label={cta.buttonText}
          >
            {cta.buttonText}
            <Image
              src="/images/arrow-top.svg"
              alt=""
              width={20}
              height={20}
              className={styles.ctaButtonArrow}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}
