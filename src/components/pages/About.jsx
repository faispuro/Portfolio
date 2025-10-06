import React from "react";
import TrueFocus from "../ui/TrueFocus";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25,0.1,0.25,1], delay:0.2 }}
        >
      <TrueFocus sentence="Sobre mí" manualMode={false} blurAmount={5} borderColor="#22c55e" animationDuration={2} pauseBetweenAnimations={1} />

      <div className="about-scroll">
        <div className="about-panel">
          <p>
            Estudiante avanzado de la Tecnicatura en Programación en la UTN. Me apasiona el desarrollo fullstack, con experiencia en proyectos académicos y personales usando React, Node.js, Express, SQL y MongoDB.
          </p>
        </div>
        <div className="about-panel">
          <p>Me destaco por la resolución de problemas, el trabajo en equipo y el compromiso en entornos colaborativos.</p>
        </div>
        <div className="about-panel">
          <p>Actualmente busco mi primera oportunidad profesional para seguir creciendo como desarrollador.</p>
        </div>
      </div>
      </motion.div>
    </section>
    
  );
};

export default About;
