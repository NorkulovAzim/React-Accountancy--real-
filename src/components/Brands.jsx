import Frizzenti from "../assets/fizzenti.svg";
import Remy from "../assets/remy.svg";
import Fell from "../assets/fell.svg";
import Manyone from "../assets/manyone.svg";
import Olio from "../assets/olio.svg";
import Buffer from "../assets/buffer.svg";
import Beam from "../assets/beam.svg";
import Fuel from "../assets/fuel.svg";
import Chaser from "../assets/chaser.svg";

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <div class="brand-wrap">
          <div className="brand-text">
            <p>Join 200+ amazing companies</p>
          </div>

          <div class="div1">
            <img src={Frizzenti} alt="Frizzenti" />
            <img src={Remy} alt="Remy" />
            <img src={Fell} alt="Fell" />
            <img src={Manyone} alt="Manyone" />
            <img src={Olio} alt="Olio" />
            <img src={Buffer} alt="Buffer" />
            <img src={Beam} alt="Beam" />
            <img src={Fuel} alt="Fuel" />
            <img src={Chaser} alt="Chaser" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
