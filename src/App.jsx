import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreSkills from "./components/CoreSkills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ToolsSkills from "./components/ToolsSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark min-h-screen text-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <CoreSkills />
      <Experience />
      <Education />
      <ToolsSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
