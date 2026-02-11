import Image from "next/image";
import Link from "next/link";
import { portfolio as portfolioData } from "@/data";
import Button from "@/app/components/ui/Button";
import styles from "./ExploreProjectsSection.module.scss";

const LIMIT = 2;

/**
 * Секція "Explore our projects" — показує останні проекти з портфоліо (без поточного).
 * @param {{ excludeId: string }} props — excludeId: id поточного проєкту, який не показувати
 */
export default function ExploreProjectsSection({ excludeId }) {
  const items = portfolioData.items
    .filter((p) => p.id !== excludeId)
    .slice(0, LIMIT);

  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Інші проекти">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title}>Explore my projects</h2>
          <Button variant="dark" href="/portfolio">
            View All Projects
          </Button>
        </header>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.id} className={styles.card}>
              <Link href={`/portfolio/${item.id}`} className={styles.cardLink}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
