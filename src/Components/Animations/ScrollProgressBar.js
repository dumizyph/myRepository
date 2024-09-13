import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = ({ top }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <style>
        {`
          .progress-bar {
            position: fixed;
            top: ${top ? "68px" : "0"};
            left: 0;
            right: 0;
            height: 8px;
            background: #81B533;
            transform-origin: 0%;
            transition: top 0.3s ease-in-out; /* Add smooth transition to top position */
          }
        `}
      </style>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </>
  );
};

export default ScrollProgressBar;
