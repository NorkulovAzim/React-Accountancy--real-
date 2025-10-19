import Paper from "../assets/paper.svg";

const GetStart = () => {
  return (
    <section className="get-start-section">
      <div className="container">
        <div className="get-start-wrapper">
          <div className="get-start-text">
            <h2>The AC Hub</h2>

            <p>
              Explore our dedicated online resources. We've got the tips, tricks
              and online accounting know-how for business success.
            </p>

            <a href="#">
              <button>View Hub</button>
            </a>
          </div>

          <div>
            <img src={Paper} alt="paper" />
          </div>
        </div>

        <div className="ready-section">
          <div className="ready-wrapper">
            <div className="ready-text">
              <h2>Ready to Switch? It's simple.</h2>
              <p>Speak to an expert today</p>
            </div>

            <div className="ready-btn">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStart;
