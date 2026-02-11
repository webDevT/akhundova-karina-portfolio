import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioPreviewSection.module.scss";
import { portfolio } from "@/data";
import Button from "@/app/components/ui/Button";

const LATEST_COUNT = 4;

const DEFAULT_INTRO =
  "I design and build websites and digital products — from concept and UI/UX in Figma to implementation in React, Next.js, and WordPress. Here are some of my recent projects.";

const DEFAULT_OUTRO =
  "8+ years in web development and design. I focus on clear interfaces, smooth user experience, and code that delivers — and I’m committed to exceeding client expectations.";

/** Секція використовує ті самі дані, що й сторінка /portfolio (data/portfolio.js). */
export default function PortfolioPreviewSection({
  introText = DEFAULT_INTRO,
  outroText = DEFAULT_OUTRO,
}) {
  const latestItems = portfolio.items.slice(0, LATEST_COUNT);
  const [item1, item2, item3, item4] = latestItems;

  const renderCard = (item) => (
    <article key={item.id} className={styles.card}>
      <Link href={`/portfolio/${item.id}`} className={styles.cardLink}>
        <div className={styles.cardImageWrap}>
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title || ""}
              width={500}
              height={380}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className={styles.cardImagePlaceholder} aria-hidden />
          )}
        </div>
      </Link>
    </article>
  );

  return (
    <section className={styles.section} aria-label="Превʼю портфоліо">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <div className={styles.introBlock}>
              <p className={styles.introText}>{introText}</p>
              <Button variant="dark" href="/portfolio" showArrow>
                VIEW ALL
              </Button>
            </div>
            {item1 && renderCard(item1)}
            {item3 && renderCard(item3)}
          </div>
          <div className={styles.rightCol}>
            {item2 && renderCard(item2)}
            {item4 && renderCard(item4)}
            <div className={styles.outroBlock}>
              <p className={styles.outroText}>{outroText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
