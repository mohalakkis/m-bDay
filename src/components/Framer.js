import React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 2, // Duração da animação
      ease: "easeInOut", // Efeito de suavização
    },
  },
};

const AnimatedIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="200" // Defina o tamanho do ícone
      height="200"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        stroke="white" // Adicione cor da borda
        strokeWidth="2" // Espessura da borda
        strokeLinecap="round" // Define o estilo das extremidades da linha
        strokeLinejoin="round" // Define o estilo dos cantos
      />
    </motion.svg>
  );
};

export default AnimatedIcon;
