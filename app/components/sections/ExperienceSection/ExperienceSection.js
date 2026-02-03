import Image from "next/image";
import styles from "./ExperienceSection.module.scss";
import { experience } from "@/data";

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className="container">
        <div className={styles.experienceSectionHeader}>
          <div className={styles.experienceSectionHeaderTitles}>
            <h2 className="subtitle">{experience.subtitle}</h2>
            <div className="h2">{experience.title}</div>
          </div>
          <div className={styles.experienceSectionHeaderText}>
            {experience.text && (
              <p className={styles.text}>{experience.text}</p>
            )}
          </div>
        </div>

        <ul className={styles.list}>
          {experience.items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemTop}>
                <div className={styles.itemLeft}>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.service}>{item.service}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
                <div className={styles.itemRight}>
                  {item.logo && (
                    <div className={styles.logoBlock}>
                      {item.logo.image ? (
                        item.logo.website ? (
                          <a
                            href={item.logo.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.logoLink}
                            aria-label={`Visit ${item.logo.companyName} website`}
                          >
                            <Image
                              src={item.logo.image}
                              alt={item.logo.companyName}
                              width={48}
                              height={48}
                              className={styles.logoImage}
                            />
                          </a>
                        ) : (
                          <Image
                            src={item.logo.image}
                            alt={item.logo.companyName}
                            width={48}
                            height={48}
                            className={styles.logoImage}
                          />
                        )
                      ) : (
                        <div className={styles.logoPlaceholder} aria-hidden />
                      )}
                    </div>
                  )}
                  <span className={styles.period}>{item.period}</span>
                </div>
              </div>
              <ul className={styles.skills}>
                {item.skills.map((skill) => (
                  <li key={skill} className={styles.skillTag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
