import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioPreviewSection.module.scss";
import { portfolio } from "@/data";

const LATEST_COUNT = 3;

/** Секція використовує ті самі дані, що й сторінка /portfolio (data/portfolio.js). */
export default function PortfolioPreviewSection() {
  const latestItems = portfolio.items.slice(0, LATEST_COUNT);

  return (
    <section className={styles.section} aria-label="Останні роботи">
      <div className="container">
        {/* <header className={styles.header}>
          <p className="subtitle">Portfolio</p>
          <h2 className="h2">Latest projects</h2>
        </header> */}
        <div className={styles.grid}>
          {latestItems.map((item) => (
            <article key={item.id} className={styles.card}>
              <Link
                href={item.url || "#"}
                className={styles.cardLink}
                target={item.url?.startsWith("http") ? "_blank" : undefined}
                rel={item.url?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className={styles.cardImageWrap}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title || ""}
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={styles.cardImagePlaceholder} aria-hidden />
                  )}
                  <div className={styles.cardOverlay}>
                    {item.cardCategory && (
                      <p className={styles.cardCategory}>{item.cardCategory}</p>
                    )}
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.actions}>
          <Link href="/portfolio" className={styles.button}>
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
