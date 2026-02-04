import styles from "./ContactSection.module.scss";
import { contact } from "@/data";

function EmailIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactSection() {
  const { section } = contact;

  return (
    <section className={styles.contactSection}>
      <div className="container container-s">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={`h2 ${styles.title}`}>{section.title}</h2>
            <p className={styles.description}>{section.description}</p>
          </div>
          <div className={styles.right}>
            <a href={`mailto:${contact.email}`} className={styles.contactItem}>
              <span className={styles.iconWrap}>
                <EmailIcon />
              </span>
              <span className={styles.contactText}>{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={styles.contactItem}>
              <span className={styles.iconWrap}>
                <PhoneIcon />
              </span>
              <span className={styles.contactText}>{contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
