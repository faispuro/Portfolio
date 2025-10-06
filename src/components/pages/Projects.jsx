// src/components/Projects.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../assets/assets/App.css";
import "../../assets/assets/Carousel.css";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestión de Alumnos",
      desc: "Aplicación en C# (consola) para gestionar inscripciones, calcular promedios y administrar estudiantes.",
      link: "https://github.com/faispuro/Inscripcion-de-alumnos-materias",
    },
    {
      title: "Sistema de Gestión de Stock",
      desc: "Sistema desarrollado en React, Node.js y SQL con API REST para controlar inventario.",
      link: "https://github.com/faispuro/Frontend-Proyecto",
    },
    {
      title: "Carrito de Compras de Videojuegos",
      desc: "E-commerce en React y MongoDB con carrito de compras y persistencia de datos.",
      link: "https://github.com/tuusuario/juegos-app",
    },
    {
      title: "Web de Venta de Computadoras",
      desc: "Sitio web con HTML, CSS y JavaScript, diseño responsivo para catálogo online.",
      link: "https://github.com/faispuro/Ventas-de-PC",
    },
    {
      title: "Gestión de Turnos Hospitalarios",
      desc: "Sistema en React, Node.js y PostgreSQL para administrar turnos médicos.",
      link: "https://github.com/tuusuario/turnos-hospital",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="projects-title">Proyectos Destacados</h2>

        <div className="projects-carousel-wrapper">
          <div className="projects-carousel">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="project-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <FaGithub /> Ver en GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
