import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { textVariant } from "../../utils/motion";

export const Header = ({ useMotion, p, h2 }) => {
  const Content = () => (
    <>
      {/* <Typography
        variant="subtitle1"
        sx={{
          color: "black",
          fontSize: "16px",
          marginBottom: "8px",
        }}
      >
        {p}
      </Typography> */}
      <Typography
        variant="h2"
        sx={{
          // fontSize: "82px",
          fontWeight: "bold",
          color: "black",
        }}
      >
      
        {h2}
        
      </Typography>
    </>
  );

  return useMotion === true ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Box>
      <Content />
    </Box>
  );
};
