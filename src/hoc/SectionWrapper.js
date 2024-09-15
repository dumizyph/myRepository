import { motion } from "framer-motion";
import { styles } from "../constants/styles";

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{
          padding: styles.padding,
          position: "relative",
          zIndex: 0,
          margin: "0 auto",
          maxWidth: "112rem", // equivalent to max-w-7xl
        }}
        id={idName}
      >
        <span style={{ visibility: "hidden" }}>&nbsp;</span>

        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
