import Header from "./components/Header";
import Hero from "./components/Hero";
import Finance from "./components/Finance";
import WhySwitch from "./components/WhySwitch";
import Plans from "./components/Plans";
import Brands from "./components/Brands";
import GetStart from "./components/GetStart";
import Footer from "./components/Footer";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Finance />
      <WhySwitch />
      <Plans />
      <Brands />
      <GetStart />
      <Footer />
    </div>
  );
}

export default App;
