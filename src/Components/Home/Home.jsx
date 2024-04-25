import "../layout/layout.css";
import Navbar from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import HeroNav from "../HeroNav";
import Hero from "../Hero";

export const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <LocationSection /> */}
      <HeroNav />
      <Hero />
      <Footer />
    </>
  );
};
