// src/components/layouts/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="footer-section">
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25,0.1,0.25,1], delay:0.2 }}
        >
      <div className="footer-content">
        <h2>Francisco Aispuro</h2>
        <p>Desarrollador FullStack | Creando experiencias digitales </p>

        <div className="footer-links">
          <a href="mailto:tuemail@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Francisco Aispuro. Todos los derechos reservados.</p>
      </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
