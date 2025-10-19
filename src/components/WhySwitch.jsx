import Whyswitch1 from "../assets/whyswitch1.svg";
import Whyswitch2 from "../assets/whyswitch2.svg";
import Whyswitch3 from "../assets/whyswitch3.svg";

const WhySwitch = () => {
  return (
    <section>
      <div className="container">
        <h2 className="switch-title">Why Switch?</h2>

        <div className="swtitch-wrapper">
          <div className="swtich-1">
            <img src={Whyswitch1} alt="" />
            <h3>Powerful software</h3>
            <p>
              Included in our service, each customer gets in-house software to
              access live financial dashboards and real-time management reports.
            </p>
          </div>

          <div className="swtich-1">
            <img src={Whyswitch2} alt="" />
            <h3>Powerful software</h3>
            <p>
              Included in our service, each customer gets in-house software to
              access live financial dashboards and real-time management reports.
            </p>
          </div>

          <div className="swtich-1">
            <img src={Whyswitch3} alt="" />
            <h3>Powerful software</h3>
            <p>
              Included in our service, each customer gets in-house software to
              access live financial dashboards and real-time management reports.
            </p>
          </div>
        </div>

        <a className="switch-btn" href="#">
          <button className="btn">Discover what we do</button>
        </a>
      </div>
    </section>
  );
};

export default WhySwitch;
