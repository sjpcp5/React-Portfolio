import React from "react";
import Navbar from "./components/nav";
import Header from "./components/header";
import About from "./components/aboutus";
import Portfolio from "./components/portfolio";
import ServiceCounter from "./components/service";
import Resume from "./components/resume";
import SectionFooter from "./components/sectionFooter";
import Contact from "./components/contactus";
import Footer from "./components/footer";
import "./App.css";
import Contactus from "./components/contactus";

function App() {
  return (
    <div className="App" id="page-top">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <ServiceCounter />
      <Resume />
      <SectionFooter>
        <Contactus />
        <Footer />
      </SectionFooter>
    </div>
  );
}

export default App;
