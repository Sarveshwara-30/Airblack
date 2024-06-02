import Image1 from "../components/Image1";
import HeroText from "../components/HeroText";
import FrameComponent1 from "../components/FrameComponent1";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import Footer from "../components/Footer";
import "./Mobile.css";

const Mobile = () => {
  return (
    <div className="mobile">
      <Image1 />
      <section className="hero-section">
        <HeroText />
        <FrameComponent1 />
      </section>
      <Component1 />
      <Component />
      <Footer />
    </div>
  );
};

export default Mobile;
