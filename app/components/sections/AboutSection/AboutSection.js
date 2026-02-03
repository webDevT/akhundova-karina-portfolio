import Image from "next/image";
import styles from "./AboutSection.module.scss";
import { about } from "@/data";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">


          <div className="col-span-1">
          <h2 className="h2">
          {about.title}
        </h2>

        <p>
        {about.intro}
        </p>

        <Image 
          className={styles.aboutArrow} 
          src={about.images.arrow.src}
          alt={about.images.arrow.alt}
          width={about.images.arrow.width}
          height={about.images.arrow.height}
          priority
        />

          </div>
          
          <div className="col-span-1">
            <div className={styles.aboutCard}>
              <div className={styles.aboutBageWrapper}>
                <Image 
                src={about.images.badge.src}
                alt={about.images.badge.alt}
                width={about.images.badge.width}
                height={about.images.badge.height}
                priority
              />
              </div>

              <div className={styles.aboutBageValue}>
                {about.card.badgeValue}
              </div>

           
                <p>
                {about.card.text}
                </p>

                <Image 
                className={styles.aboutPhoto1}
                src={about.images.photo1.src}
                alt={about.images.photo1.alt}
                width={about.images.photo1.width}
                height={about.images.photo1.height}
                priority
              />

                
             



            </div>
          </div>
          
          <div className="col-span-1">
            <div className={styles.aboutTextWrapper}>
              <Image 
              className={styles.aboutPhoto2} 
              src={about.images.photo2.src}
              alt={about.images.photo2.alt}
              width={about.images.photo2.width}
              height={about.images.photo2.height}
              priority
            />
            <div className={styles.aboutSectionText}>
            
              <p>
                {about.outro}
              </p>
            </div>
            
            </div>
          </div>

        </div>
 
      </div>
    </section>
  );
}

