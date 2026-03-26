import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatusBar from "../components/StatusBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatusBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}