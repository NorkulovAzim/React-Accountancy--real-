import Plans1 from "../assets/plans1.svg";
import Plans2 from "../assets/plans2.svg";
import Plans3 from "../assets/plans3.svg";

const Plans = () => {
  return (
    <section className="plans-section">
      <div className="container">
        <h2 className="plans-title">Plans built for growth</h2>
        <div className="plans-wrap">
          <div className="plans-item">
            <img src={Plans1} alt="" />

            <h2>Early stage startup</h2>

            <p>
              Need your accounting system set up? Learn financial best practice
              and prime your business for the next stage of growth. We get you
              moving quickly with an accounting solution that does what you
              need.
            </p>
          </div>

          <div className="plans-item">
            <img src={Plans2} alt="" />

            <h2>Early stage startup</h2>

            <p>
              Need your accounting system set up? Learn financial best practice
              and prime your business for the next stage of growth. We get you
              moving quickly with an accounting solution that does what you
              need.
            </p>
          </div>

          <div className="plans-item">
            <img src={Plans3} alt="" />

            <h2>Early stage startup</h2>

            <p>
              Need your accounting system set up? Learn financial best practice
              and prime your business for the next stage of growth. We get you
              moving quickly with an accounting solution that does what you
              need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
