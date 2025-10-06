import React from "react";
import "../../assets/assets/App.css";
import "../../assets/assets/Carousel.css"; 
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact-sectio">
      <div className="contact-section">
        <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25,0.1,0.25,1], delay:0.2 }}
        >
          <h2>Contacto</h2>
          <p>Si querés ponerte en contacto conmigo, podés usar este formulario o mis redes sociales 👇</p>

          {/* Formulario */}
          <form className="contact-form">
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu correo" required />
            <textarea placeholder="Tu mensaje" rows="5" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </motion.div>
      </div>
      </div>
    
    </section>
  );
};

export default Contact;
