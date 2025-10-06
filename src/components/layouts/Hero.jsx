import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "../ui/SplitText";
import Shuffle from "../ui/Shuffle";
import CircleMenu from "../ui/CircleMenu";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline();

    // Animación intro
    tl.from(hero.querySelector(".hero-intro"), { opacity: 0, y: 20, duration: 0.5 });

    // Animación del nombre letra por letra
    const nameLetters = hero.querySelectorAll(".split-char"); // 👈 importante
    tl.from(nameLetters, { opacity: 0, y: 30, stagger: 0.05, duration: 0.5 }, "-=0.3");

    // Subtítulo
    tl.from(hero.querySelector("h3"), { opacity: 0, y: 20, duration: 0.5 }, "-=0.4");

    // Shuffle text
    tl.from(hero.querySelector(".shuffle-parent"), { opacity: 0, y: 15, duration: 0.5 }, "-=0.4");

    // Botones
    tl.from(hero.querySelector(".hero-buttons"), { opacity: 0, y: 15, duration: 0.5 }, "-=0.4");
  }, []);

  return (
    <header className="header" ref={heroRef}>
      <div className="hero-flex">
        {/* Lado izquierdo: Texto */}
        <div className="hero-left">
          <div className="hero-text">
            <div className="hero-intro">
              <span className="hero-greeting">Hola,</span>
              <span className="hero-greeting1"> soy</span>
            </div>

            <SplitText
              text="Francisco Aispuro"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              duration={0.6}
              delay={50}
              ease="power3.out"
              tag="h1"
              className="hero-name"
              splitType="chars" // 👈 clave para animación letra por letra
            />

            <h3 className="hero-subtitle">Desarrollador FullStack</h3>

            <Shuffle text="Construyendo ideas en código, línea por línea" />

            <div className="hero-buttons">
              <a href="/cv.pdf" className="btn" download>
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        {/* Lado derecho: CircleMenu / Avatar */}
        <div className="hero-right">
          <CircleMenu />
        </div>
      </div>
    </header>
  );
};

export default Hero;
