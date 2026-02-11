import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer";
import { portfolio as portfolioData } from "@/data";
import CTASection from "../../components/sections/CTASection";
import ContactSection from "../../components/sections/ContactSection";
import VisitSiteBar from "./VisitSiteBar";
import ExploreProjectsSection from "./ExploreProjectsSection";
import styles from "./ProjectDetail.module.scss";

export async function generateStaticParams() {
  return portfolioData.items.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = portfolioData.items.find((p) => p.id === id);
  if (!project) return { title: "Project — Akhundova Karina" };
  return {
    title: `${project.title} — Portfolio | Akhundova Karina`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = portfolioData.items.find((p) => p.id === id);
  if (!project) notFound();

  const heroImage = project.heroImage || project.image;
  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];
  const restImages = images;
  const hasValidUrl =
    project.url &&
    typeof project.url === "string" &&
    (project.url.startsWith("http://") || project.url.startsWith("https://"));

  return (
    <div className={styles.page}>
      <Header />
      {hasValidUrl && (
        <VisitSiteBar url={project.url} projectTitle={project.title} />
      )}
      <main>
        <header className={styles.heroFull}>
          <div className={styles.heroImageWrap}>
            <Image
              src={heroImage}
              alt={project.title}
              fill
              className={styles.heroImage}
              sizes="100vw"
              priority
            />
          </div>
         

         


          

        </header>



<section className={styles.projectPageContent}>
 
    <div className={styles.heroTitleStrip}>
        <div className="container">
          <h1 className={styles.heroTitleBig}>{project.title}</h1>
          {project.cardCategory && (
              <p className={styles.category}>{project.cardCategory}</p>
            )}



<section className={styles.overview}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <div className={styles.overviewLeft}>
                <h2 className={styles.overviewLabel}>Services</h2>
                <ul className={styles.overviewList}>
                  {(project.services || [...new Set(project.tags || [])]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.overviewRight}>
                <h2 className={`h2 ${styles.overviewTitle}`}>
                  {project.overviewTitle || `${project.title}: project overview`}
                </h2>
                <div className={styles.overviewText}>
                  {(project.overview || project.description || "")
                    .split("\n")
                    .filter(Boolean)
                    .map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        </div>
    </div>



 
</section>

        {project.featureImage && (
          <section className={styles.featureImageSection}>
            <div className="container">
              <div className={styles.featureImageWrap}>
                <Image
                  src={project.featureImage}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className={styles.featureImage}
                  sizes="100vw"
                />
              </div>
            </div>
          </section>
        )}

        {project.storyBlocks && project.storyBlocks.length > 0 && (
          <section className={styles.storyBlocks}>
            <div className="container">
              {project.storyBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`${styles.storyBlock} ${index % 2 === 1 ? styles.storyBlockReverse : ""}`}
                >
                  <div className={styles.storyBlockText}>
                    <h2 className={`h2 ${styles.storyBlockTitle}`}>{block.title}</h2>
                    <p className={styles.storyBlockDescription}>{block.description}</p>
                  </div>
                  <div className={styles.storyBlockImageWrap}>
                    <Image
                      src={block.image}
                      alt={block.title}
                      width={800}
                      height={500}
                      className={styles.storyBlockImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="container">
          <div className={styles.content}>
            {restImages.length > 0 && (
              <>
              
                {/* <div className={styles.gallery}>
                  {restImages.map((src, index) => (
                    <div key={index} className={styles.galleryItem}>
                      <Image
                        src={src}
                        alt={`${project.title} — screenshot ${index + 2}`}
                        width={1200}
                        height={750}
                        sizes="100vw"
                      />
                    </div>
                  ))}
                </div> */}
              </>
            )}

            {project.tags?.length > 0 && (
              <div className={styles.tagsWrap}>
                <p className={styles.tagsLabel}>Technologies & focus</p>
                <div className={styles.tags}>
                  {[...new Set(project.tags)].map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.result && (
              <section className={styles.results}>
                <h2 className={styles.resultsTitle}>Results</h2>
                <div className={styles.resultsText}>
                  {project.result.split("\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <ExploreProjectsSection excludeId={id} />
      </main>
      <div id="cta-section">
        <CTASection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
