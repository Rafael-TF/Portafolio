// Transition.js
import React from "react";
import { motion } from "framer-motion";

const Transition = ({ children, transitionKey }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.95 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <motion.div
      key={transitionKey} // Cambia 'key' por 'transitionKey'
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;