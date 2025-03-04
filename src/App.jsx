import Navbar from "./parts/Navbar.jsx";
import Hero from "./parts/Hero.jsx";
import About from "./parts/About.jsx";
import Projects from "./parts/Projects.jsx";
import Contact from "./parts/Contact.jsx";
import Footer from "./parts/Footer.jsx";
import Experience from "./parts/Experience.jsx";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
