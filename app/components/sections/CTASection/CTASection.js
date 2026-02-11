"use client";

import styles from "./CTASection.module.scss";
import { cta } from "@/data";
import { useContactModal } from "@/app/components/ContactModal";
import Button from "@/app/components/ui/Button";

export default function CTASection() {
  const { open } = useContactModal();

  return (
    <section className={styles.ctaSection} id="contact">
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={`h2 ${styles.ctaTitle}`}>{cta.title}</h2>
          <p className={styles.ctaDescription}>{cta.description}</p>
          <Button
            variant="white"
            showArrow
            onClick={open}
            className={styles.ctaButtonWrap}
            aria-label={cta.buttonText}
          >
            {cta.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
