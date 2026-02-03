import Image from "next/image";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">


          <div className="col-span-1">
          <h2 className="h2">
          About
        </h2>

        <p>
        Experienced web developer and designer with over +8 years of successful practice. Specializing in creating effective and creative websites from concept and design to full implementation on platforms such as React/Next.js, HTML, CSS, and JavaScript. Proficient in design tools such as Figma, Photoshop, and Adobe XD. Skilled in logo design. Experienced with various CMS, including WordPress. Successfully delivered a range of projects resulting in increased website traffic and enhanced user experience.
        </p>

        <Image 
          className={styles.aboutArrow} 
          src="/images/arrow.svg" 
          alt="arrow"
          width={150}
          height={170}
          priority
        />

          </div>
          
          <div className="col-span-1">
            <div className={styles.aboutCard}>
              <div className={styles.aboutBageWrapper}>
                <Image 
                src="/images/bage.svg" 
                alt="arrow"
                width={33}
                height={29}
                priority
              />
              </div>

              <div className={styles.aboutBageValue}>
                100%
              </div>

           
                <p>
                Job Success. Proudly ranked within the top 3% of freelancers worldwide on Upwork, earning the exclusive Top Rated Plus recognition.  
                </p>

                <Image 
                className={styles.aboutPhoto1}
                src="/images/photo2.png" 
                alt="arrow"
                width={267}
                height={319}
                priority
              />

                
             



            </div>
          </div>
          
          <div className="col-span-1">
            <div className={styles.aboutTextWrapper}>
              <Image 
              className={styles.aboutPhoto2} 
              src="/images/photo1.png" 
              alt="arrow"
              width={218}
              height={193}
              priority
            />
            <div className={styles.aboutSectionText}>
            
              <p>
              
Proven track record of delivering high-quality work and consistently achieving excellent client satisfaction. Adept at managing multiple projects simultaneously, meeting tight deadlines, and exceeding client expectations. Committed to staying abreast of the latest trends and technologies in web development and design to ensure the delivery of cutting-edge solutions.
              </p>
            </div>
            
            </div>
          </div>

        </div>
 
      </div>
    </section>
  );
}

