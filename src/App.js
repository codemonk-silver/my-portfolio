import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from './components/About/about';
import Experience from "./components/Experience/experience";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
