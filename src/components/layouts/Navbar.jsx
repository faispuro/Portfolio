import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;