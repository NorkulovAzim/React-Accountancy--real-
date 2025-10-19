import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="navbar">
          <a href="#">
            <img src={logo} alt="" />
          </a>

          <div className="nav-links">
            <a href="">Home</a>
            <a href="">How it works</a>
            <a href="">What we do</a>
            <a href="">Who we help</a>
            <a href="">Resources</a>
          </div>

          <div className="nav-btns">
            <a href="" className="login-btn">
              Login
            </a>
            <a href="" className="talk-btn">
              Talk to an Expert
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
