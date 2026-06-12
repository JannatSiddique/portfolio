import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollAnimation from "@/components/ScrollAnimation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollAnimation><About /></ScrollAnimation>
        <ScrollAnimation><Experience /></ScrollAnimation>
        <ScrollAnimation><Skills /></ScrollAnimation>
        <ScrollAnimation><Education /></ScrollAnimation>
        <ScrollAnimation><Projects /></ScrollAnimation>
        <ScrollAnimation><Certifications /></ScrollAnimation>
        <ScrollAnimation><Contact /></ScrollAnimation>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
