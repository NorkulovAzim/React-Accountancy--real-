import FooterLogo from "../assets/footer-logo.svg";
import Acca from "../assets/acca.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <img src={FooterLogo} alt="" />
          <p>Your new finance team</p>
        </div>

        <div className="footer-links">
          <div className="links">
            <a href="#">How it works</a>
            <a href="#">Hassle Free Switching</a>
          </div>

          <div className="links">
            <a href="#">What we do</a>
            <a href="#">Finance Teams</a>
            <a href="#">Tax</a>
            <a href="#">R&D Tax Credits</a>
            <a href="#">A platform for success</a>
            <a href="">Software Integrations</a>
          </div>

          <div className="links">
            <a href="">Who we help</a>
            <a href="">Startups</a>
            <a href="">Small Business</a>
            <a href="">Medium Business</a>
            <a href="">CFO & Head of Finance</a>
          </div>

          <div className="links">
            <a href="">Resources</a>
            <a href="">Case Studies</a>
            <a href="">Blogs</a>
            <a href="">Guides</a>
            <a href="">Podcasts</a>
          </div>

          <div className="links">
            <a href="">Company</a>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Contact Us</a>
          </div>
        </div>

        <div className="speak">
          <p>Speak to us</p>
          <a href="tel:+998998284431">Call 020 4530 8432</a>
          <a href="">Refer a friend for £175</a>
          <a href="">Partner with us</a>
        </div>

        <div className="footer-bottom">
          <div className="reference">
            <a href="">© Accountancy Cloud 2021</a>
            <a href="">Privacy Policy & Cookies</a>
            <a href="">Terms of Service</a>
          </div>

          <div className="social-media">
            <a href="">
              <img src={Acca} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
