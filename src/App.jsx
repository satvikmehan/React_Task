import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Participation from "./components/Participation";
import Challenges from "./components/Challenges";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
import Rewards from "./components/Rewards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site-shell">

      <Navbar />
      <Hero />
      <About />
      <Participation />
      <Challenges />
      <Schedule />
      <Rewards />
      <FAQ />
      <Footer />

    </div>
  );
}

export default App;
