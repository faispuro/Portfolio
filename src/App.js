// src/App.js
import React from "react";

// 🔹 Estilos
import "./assets/assets/App.css";
import "./assets/assets/Carousel.css";

// 🔹 Layouts
import Hero from "./components/layouts/Hero";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
// 🔹 UI Components

// 🔹 Pages
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact"; // ⚠️ Asegurate de crearlo

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
