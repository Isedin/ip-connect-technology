import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer /> 
      
    </>
  );
}

export default App;

