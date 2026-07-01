import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import StatsCounter from "../../components/StatsCounter";
import Features from "../../components/Features";
import Departments from "../../components/Departments";
import Banner from "../../components/Banner";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import Gallery from "../../components/Gallery";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsCounter />
      <Features />
      <Departments />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;