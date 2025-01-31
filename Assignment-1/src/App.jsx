import About from "./About";
import "./App.css";
import Available from "./Available";
import Contact from "./Contact";
import Cta from "./Cta";
import Features from "./Features";
import Footer from "./Footer";
import Fqa from "./Fqa";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Team from "./Team";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Available />
      <About />
      <Cta />
      <Fqa />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
