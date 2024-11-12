import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Extension from "./components/Extension";
import Customize from "./components/Customize";
import EveryWhere from "./components/EveryWhere";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <Extension />
      <Customize />
      <EveryWhere />
      <Sponsors />
      <Footer />
    </div>
  );
}
