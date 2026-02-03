import Image from "next/image";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroSidebar}>
          <div className={styles.heroSidebarText}>Web Developer</div>
          <div className={styles.heroSidebarLine}></div>
          <div className={styles.heroSidebarText}>2026</div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroStatistics}>
            <div className={styles.heroStatisticsItem}>
              <div className={styles.heroStatisticsItemValue}>
                <span className={styles.plus}>+</span>300
              </div>
              <div className={styles.heroStatisticsItemLabel}>
                Projects completed
              </div>
            </div>
            <div className={styles.heroStatisticsItem}>
              <div className={styles.heroStatisticsItemValue}>
                <span className={styles.plus}>+</span>50
              </div>
              <div className={styles.heroStatisticsItemLabel}>
                Startup raise
              </div>
            </div>
          </div>
          <h1 className={styles.heroTitle}>
            <div className={`${styles.heroTitleSpan} text-4xl not-italic`}>Hello</div>
            <div className={styles.heroTitleSpan}>
              I'm, Karina!<br />
              Full-stack developer / UI/UX Designer
            </div>
          </h1>

          <div className={`flex flex-wrap gap-4 ${styles.scrollDownWrapper}`}>
            <a href="#" className={`flex items-center gap-2 text-base font-normal transition-all hover:opacity-80 ${styles.scrollDown}`}>
              <span>Scroll down</span>
              <Image 
                src="/images/arrow-down.svg" 
                alt="arrow down" 
                width={16} 
                height={16}
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>

        <Image 
          className={styles.heroImage} 
          src="/images/hero-image.png" 
          alt="hero image"
          width={550}
          height={800}
          priority
        />
      </div>
    </section>
  );
}

