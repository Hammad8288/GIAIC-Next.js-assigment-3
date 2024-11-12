import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Extension from "./Components/Extension";
import Customize from "./Components/Customize";
import EveryWhere from "./Components/EveryWhere";
import Sponsors from "./Components/Sponsors";
import Footer from "./Components/Footer";

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
