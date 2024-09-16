import React, { useContext } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "./Header";
import { Box, Typography } from "@mui/material";
import Color from "../../utils/Color";
import webtech from "../../assets/deployment.png";
import Image from 'next/image';
const ServiceCard = ({ index, title, icon, description, learnMoreLink }) => {
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor="#aaa6c3"
      style={{
        width: "100%",
        maxWidth: "250px",
        borderRadius: "20px",
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        style={{
          borderRadius: "20px",
          padding: "1px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "20px",
            padding: "20px",
            "&:hover h6": {
              color: "#A3CB38", // Green color on hover
              transitionDelay: "0.2s", // Increased delay before hover effect
            },
            "&:hover .line": {
              width: "100%", // Line expands to full width on hover
              transition: "width 0.2s ease",
            },
          }}
        >
          <Image
            src={icon}
            alt="web-development"
            style={{ height: "64px", width: "64px", objectFit: "contain" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: Color.Blue, // Default color
              fontSize: "20px",
              fontWeight: "bold",
              transition: "color 0.2s ease", // Smooth transition with delay
              position: "relative", // Required for absolute positioning of the line
            }}
          >

            {title}
            {/* The animated line under the title */}
            <Box
              className="line"
              sx={{
                position: "absolute",
                bottom: "-2px", // Adjust the space between title and line (Reduced space)
                left: 0,
                height: "2px",
                width: "0%", // Starts at 0% width
                backgroundColor: "#A3CB38", // Green color for the line
                transition: "width 0.2s ease", // Transition for the line to expand
              }}
            />
          </Typography>

          {/* Add details below the title */}
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: "#666", // Example: light gray text for description
              fontSize: "14px",
              backgroundColor:"red"
            }}
          >
            {description}
          </Typography>

          {/* Add Learn More Link */}
          <Typography
            align="center"
            sx={{
              color: "#A3CB38", // Green color for the "Learn More" text
              fontSize: "14px",
              marginTop: "10px", // Add some space between description and link
              cursor: "pointer",
              textDecoration: "underline",
              "&:hover": {
                color: "#81C784", // Slight color change on hover
              },
            }}
          >
            <div  underline="none">
              Learn More
            </div>
          </Typography>
        </Box>
      </motion.div>
    </Tilt>
  );
};


const About = () => {

  return (
    <>
      <div style={{ backgroundColor: "white", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Header useMotion={true} {...config.sections.about} />

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          style={{
            color: "gray",
            marginTop: "16px",
            maxWidth: "600px",
            fontSize: "17px",
            lineHeight: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center", // This centers the text

          }}
        >
          {config.sections.about.content}
        </motion.p>

        <Box
          sx={{
            marginTop: "80px",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: { xs: "center", sm: "flex-start" },
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 15

          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
