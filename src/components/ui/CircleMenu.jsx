import React from "react";
import { motion } from "framer-motion";
import "../styles/CircleMenu.css";

const buttons = [
  { name: "HTML", color: "#e34c26", link: null },
  { name: "CSS", color: "#264de4", link: null },
  { name: "JavaScript", color: "#e68d1aff", link: null },
  { name: "React", color: "#3fa2ffff", link: null },
  { name: "Python", color: "#022e68ff", link: null },
  { name: "TypeScript", color: "#2a79d3ff", link: null },
  { name: "C#", color: "#6c0075ff", link: null}
];

const CircleMenu = () => {
  return (
    <div className="circle-container">
      {/* círculo central */}
      <div className="center-circle">
        <div className="user-icon">👤</div>
      </div>

      {/* animación de rotación */}
      <motion.div
        className="orbit"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {buttons.map((btn, index) => (
          <motion.div
            key={index}
            className="circle-btn"
            style={{ "--i": index, "--color": btn.color }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() => {
              if (btn.link) window.open(btn.link, "_blank");
            }}
          >
            {btn.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CircleMenu;
