import Header from "./components/layout/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero">
       
        <div className="container">
 <div className="hero-sidebar">
          <div className="hero-sidebar-text">Web Developer</div>
          <div className="hero-sidebar-line"></div>
          <div className="hero-sidebar-text">2026</div>
        </div>
          <div className="hero-content">

            <div className="hero-statistics">
              <div className="hero-statistics-item">
                <div className="hero-statistics-item-value">
                <span className="plus">+</span>300
                  </div>
                <div className="hero-statistics-item-label">
                Projects completed</div>
              </div>
              <div className="hero-statistics-item">
                <div className="hero-statistics-item-value">
                <span className="plus">+</span>50
                </div>

                <div className="hero-statistics-item-label">
                  Startup raise
                </div>
              </div>
            </div>
            <h1 className="hero-title">
              <div className="hero-title-span text-4xl not-italic">Hello</div>
              <div className="hero-title-span">
              I'm, Karina!<br />
              Full-stack developer / UI/UX Designer
                </div>
            </h1>


            <div className="flex flex-wrap gap-4 scroll-down-wrapper">
              <a href="#" className="flex items-center gap-2 text-base font-normal transition-all hover:opacity-80 scroll-down">
                <span>Scroll down</span>
                <img src="images/arrow-down.svg" alt="arrow down" className="w-4 h-4" />
              </a>
            </div>



          </div>
          
    
    <img className="hero-image" src="images/hero-image.png" alt="hero image" />
        </div>
      </section>
    </>
  );
}
