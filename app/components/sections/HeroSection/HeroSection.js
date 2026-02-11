import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { hero } from "@/data";

export default function HeroSection() {
  const { images } = hero;
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroSidebar}>
          <div className={styles.heroSidebarText}>{hero.sidebar.role}</div>
          <div className={styles.heroSidebarLine}></div>
          <div className={styles.heroSidebarText}>{hero.sidebar.year}</div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroStatistics}>
            <div className={styles.heroStatisticsItem}>
              <div className={styles.heroStatisticsItemValue}>
                <span className={styles.plus}>+</span>{hero.stats.projects.value}
              </div>
              <div className={styles.heroStatisticsItemLabel}>
                {hero.stats.projects.label}
              </div>
            </div>
            <div className={styles.heroStatisticsItem}>
              <div className={styles.heroStatisticsItemValue}>
                <span className={styles.plus}>+</span>{hero.stats.clients.value}
              </div>
              <div className={styles.heroStatisticsItemLabel}>
                {hero.stats.clients.label}
              </div>
            </div>
          </div>
          <h1 className={styles.heroTitle}>
            <div className={`${styles.heroTitleSpan} text-4xl not-italic`}>{hero.title.greeting}</div>
            <div className={styles.heroTitleSpan}>
              {hero.title.name}<br />
              {hero.title.role}
            </div>
          </h1>

          <div className={`flex flex-wrap gap-4 ${styles.scrollDownWrapper}`}>
            <a href="#about" className={`flex items-center gap-2 text-base font-normal transition-all hover:opacity-80 ${styles.scrollDown}`} aria-label={hero.scrollDown}>
              <span>{hero.scrollDown}</span>
              <Image 
                src={images.arrowDown.src}
                alt={images.arrowDown.alt}
                width={images.arrowDown.width}
                height={images.arrowDown.height}
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>

        <Image 
          className={styles.heroImage} 
          src={images.hero.src}
          alt={images.hero.alt}
          width={images.hero.width}
          height={images.hero.height}
          priority
        />
      </div>
    </section>
  );
}

