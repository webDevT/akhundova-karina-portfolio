import styles from "./ServicesSection.module.scss";
import { services as servicesData } from "@/data";

export default function ServicesSection() {
  const { subtitle, title, items } = servicesData;
  const featured = items.find((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <header className={styles.header}>
          <p className="subtitle">{subtitle}</p>
          <h2 className="h2">{title}</h2>
        </header>

        <div className={styles.grid}>
          {featured && (
            <article
              className={`${styles.card} ${styles.cardFeatured}`}
              aria-labelledby={`service-${featured.id}`}
            >
              <span className={styles.cardNumber} aria-hidden>
                01
              </span>
              <h3 id={`service-${featured.id}`} className={styles.cardTitle}>
                {featured.title}
              </h3>
              <p className={styles.cardDescription}>{featured.description}</p>
            </article>
          )}
          {rest.map((item, index) => (
            <article
              key={item.id}
              className={styles.card}
              aria-labelledby={`service-${item.id}`}
            >
              <span className={styles.cardNumber} aria-hidden>
                {String(index + 2).padStart(2, "0")}
              </span>
              <h3 id={`service-${item.id}`} className={styles.cardTitle}>
                {item.title}
              </h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
