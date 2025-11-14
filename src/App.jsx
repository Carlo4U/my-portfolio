import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="journey"><Journey /></section>
        <section id="tools"><Tools /></section>
        <section id="contact"><Contact /></section>
      </main>
   
    </>
  );
}

export default App;
