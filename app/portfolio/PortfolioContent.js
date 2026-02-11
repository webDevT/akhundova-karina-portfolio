"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.scss";

export default function PortfolioContent({ data }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const { heroSubtitle, heroTitleLine1, heroTitleLine2, filters, items } = data;

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.tags?.includes(activeFilter));
  }, [items, activeFilter]);

  return (
    <>
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.heroSubtitle}>• {heroSubtitle}</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>{heroTitleLine1}</span>
            <span className={styles.heroTitleLine}>{heroTitleLine2}</span>
          </h1>
          <div className={styles.filterWrap}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className={styles.section} aria-label="Projects">
        <div className="container">
          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <article key={item.id} className={styles.card}>
                <Link
                  href={`/portfolio/${item.id}`}
                  className={styles.cardLink}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      sizes="(max-width: 600px) 100vw, 50vw"
                    />
                    <div className={styles.cardOverlay}>
                      <div className={styles.cardContent}>
                        {item.cardCategory && (
                          <p className={styles.cardCategory}>{item.cardCategory}</p>
                        )}
                        <p className={styles.cardDescription}>
                          {item.description}
                        </p>
                        {item.tags?.length > 0 && (
                          <div className={styles.cardTags}>
                            {item.tags.map((tag, index) => (
                              <span key={`${tag}-${index}`} className={styles.tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
