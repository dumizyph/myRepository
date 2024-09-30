import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Color from "../../../utils/Color";

// Data for industries
const industries = [
  {
    title: "Technology and IT Services",
    description: `We collaborate with tech companies to provide custom software solutions, cloud infrastructure, cybersecurity, and IT consulting. Whether you're building innovative SaaS platforms or need support for your internal IT operations, our expertise in emerging technologies such as AI, blockchain, and IoT helps you stay ahead of the curve.`,
  },
  {
    title: "Healthcare and Life Sciences",
    description: `Our solutions for the healthcare sector are designed to improve patient care, streamline medical processes, and enhance data management. We provide robust healthcare software, secure patient data systems, and telemedicine platforms that meet regulatory standards like HIPAA.`,
  },
  {
    title: "Finance and Banking",
    description: `From fintech startups to established banks, we help financial institutions with secure payment processing, online banking platforms, investment tools, and regulatory compliance.`,
  },
  {
    title: "Retail and E-Commerce",
    description: `We empower retailers with e-commerce solutions, personalized shopping experiences, and advanced inventory management systems.`,
  },
  {
    title: "Manufacturing and Supply Chain",
    description: `Our digital transformation solutions optimize manufacturing processes and supply chain management.`,
  },
  {
    title: "Education and E-Learning",
    description: `We work with educational institutions and e-learning providers to build online platforms, mobile learning apps, and interactive learning tools.`,
  },
  {
    title: "Media and Entertainment",
    description: `The media industry is constantly evolving, and we help businesses adapt by developing streaming platforms, content management systems, and immersive experiences like AR and VR.`,
  },
  {
    title: "Real Estate and Construction",
    description: `We provide digital solutions to streamline real estate operations, property management, and construction project management.`,
  },
  {
    title: "Transportation and Logistics",
    description: `Our technology-driven solutions help optimize logistics operations, fleet management, and supply chain visibility.`,
  },
  {
    title: "Energy and Utilities",
    description: `We offer technology solutions that drive operational efficiency for energy and utility companies.`,
  },
];

// Creative Section Component
const CreativeIndustriesSection = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#000", // Black background for bold contrast
        padding: "60px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal background design */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "200px",
          backgroundColor: Color.Blue, // Blue diagonal section
          transform: "skewY(-10deg)", // Diagonal effect
          zIndex: 0,
        }}
      ></Box>

      <Typography
        variant="h3"
        sx={{
          color: "#ffffff", // White text for contrast
          marginBottom: "40px",
          fontSize: { xs: "2.5rem", md: "4.5rem" },
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        Industries We Serve
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10, // Hover lift effect
              scale: 1.05, // Slight scale effect on hover
              boxShadow: "0 12px 20px rgba(255, 255, 255, 0.2)", // Shadow on hover
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: "300px",
              backgroundColor: "#ffffff", // White background for cards
              padding: "20px",
              borderRadius: "15px",
              position: "relative",
              transform: index % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)", // Alternate card tilts
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Base shadow
              zIndex: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: Color.Blue, // Blue text
                marginBottom: "15px",
                fontWeight: "bold",
              }}
            >
              {industry.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#333", // Darker text for description
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {industry.description}
            </Typography>
          </motion.div>
        ))}
      </Box>

      {/* Bottom diagonal divider */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "150px",
          backgroundColor: Color.Blue,
          transform: "skewY(-10deg)",
          zIndex: 0,
        }}
      ></Box>
    </Box>
  );
};

export default CreativeIndustriesSection;


