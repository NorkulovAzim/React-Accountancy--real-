import HeroComp from "../assets/hero-comp.svg";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h2>Get your finances right</h2>

            <p>
              Get your finances right with Accountancy Cloud. We offer the best
              accounting, R&D credits and CFO services for ambitious businesses
              who want to grow.
            </p>

            <span>Switching to us is simple</span>

            <a href="#">
              <button>Talk to us</button>
            </a>
          </div>

          <div className="hero-img">
            <img src={HeroComp} alt="" />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </main>
  );
};

export default Hero;
