import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavigationDock from "./components/NavigationDock";

import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="portfolio">

      <ThemeToggle />

      <main>

        <Hero />

        <Introduction />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

        <Footer />

      </main>

      <NavigationDock />

    </div>
  );
}

export default App;