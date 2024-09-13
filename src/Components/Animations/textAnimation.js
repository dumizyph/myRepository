import React from "react";
import { Animator, MoveIn } from "react-scroll-motion";

// Create a wrapper component for left-to-right text animation with higher intensity
const LeftToRightWrapper = ({ children }) => {
  return (
    <Animator animation={MoveIn(-2000, 0, { duration: 0.5 })}>
      <span>{children}</span>
    </Animator>
  );
};

export default LeftToRightWrapper;
