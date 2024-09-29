import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";
import { Box, Typography } from "@mui/material";
import Color from "../../../utils/Color";
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

// Data array based on the problems and solutions
const data = [
  {
    icon: <SpeedIcon style={{ fontSize: '3rem', color: Color.Green }} />,
    problem: "Slow website speeds",
    solution: "We optimize every line of code to make your site blazing fast. By implementing advanced caching mechanisms, reducing the size of image assets, and compressing files, we ensure that your site loads almost instantly. Our developers are experts in lazy-loading and using modern performance techniques to make sure your website delivers an excellent user experience across all devices.",
  },
  {
    icon: <DevicesIcon style={{ fontSize: '3rem', color: Color.Green }} />,
    problem: "Poor mobile responsiveness",
    solution: "Our designs adapt perfectly across all devices. We follow a mobile-first approach, ensuring that your website looks and works beautifully on smartphones, tablets, and desktops. We create fluid grids, use flexible images, and apply media queries to make sure your site is both visually appealing and functional, no matter the screen size. Responsive design is a key part of delivering a seamless experience to your users.",
  },
  {
    icon: <SearchIcon style={{ fontSize: '3rem', color: Color.Green }} />,
    problem: "Low search engine rankings",
    solution: "We integrate SEO best practices into the core of your website. From optimizing meta tags and keywords to ensuring fast page load times, we focus on all the factors that improve your website’s search engine visibility. Our team also ensures proper use of structured data, internal linking strategies, and mobile optimization so that search engines rank your site higher, bringing you more organic traffic and potential customers.",
  },
  {
    icon: <SecurityIcon style={{ fontSize: '3rem', color: Color.Green }} />,
    problem: "Security vulnerabilities",
    solution: "We prioritize your website’s security by implementing robust security measures like SSL encryption, secure data storage, and regular security audits. Our team ensures that your website follows OWASP standards to mitigate risks such as cross-site scripting (XSS), SQL injection, and data breaches. With strong authentication and role-based access controls, we protect your sensitive information and maintain data integrity.",
  },
  {
    icon: <AssessmentIcon style={{ fontSize: '3rem', color: Color.Green }} />,
    problem: "High bounce rates",
    solution: "We reduce your website’s bounce rates by improving user experience and engagement. Our strategy includes creating intuitive navigation, faster loading times, and delivering high-quality content that retains user interest. We also focus on mobile responsiveness and interactive elements that engage users and keep them on your site longer. This results in a higher conversion rate and better retention.",
  },
  {
    icon: <DesignServicesIcon style={{ fontSize: '3rem', color: Color.Green }} />,
    problem: "Outdated design",
    solution: "We modernize your website with a fresh, sleek design that aligns with current trends and your brand identity. Our designers work to create visually appealing layouts, intuitive interfaces, and user-friendly navigation that delivers a positive experience. A modern, responsive design helps build trust with your audience and makes a lasting first impression.",
  },
];

// Service Card Component
const ServiceCard = ({ index,icon, problem, solution }) => {
  return (
    <div
     
      style={{
        width: "100%",
        maxWidth: "350px",
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
            minHeight: "300px", // Allow card to expand based on content
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "20px",
            padding: "20px",
            "&:hover h6": {
              color: "#A3CB38",
              transitionDelay: "0.2s",
            },
          }}
        >
          {/* Display the Icon */}
          {icon}

          {/* Display the Problem */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: Color.Blue,
              fontSize: "20px",
              fontWeight: "bold",
              transition: "color 0.2s ease",
              position: "relative",
            }}
          >
            {problem}
          </Typography>

          {/* Display the Solution */}
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: "#666",
              fontSize: "14px",
              marginTop: "10px",
              // Ensure the text wraps and the box can expand
              whiteSpace: "normal",
              textOverflow: "ellipsis",
            }}
          >
            {solution}
          </Typography>
        </Box>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <div style={{ backgroundColor: "white", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <motion.div variants={textVariant()}>
        <Typography
          variant="h3"
          sx={{
            color: '#333',
            marginBottom: '20px',
            fontSize: { xs: '1.8rem', md: '3.5rem' },
          }}
        >
          Why Settle for Less? Let's Fix What's Holding You Back
        </Typography>
      </motion.div>

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
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#555',
            marginBottom: '30px',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          Common Web Development Challenges We Solve
        </Typography>
      </motion.p>

      <Box
        sx={{
         
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: { xs: "center", sm: "flex-start" },
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 15,
          
        }}
      >
        {/* Map over the data array and pass data to the ServiceCard */}
        {data.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </Box>
    </div>
  );
};

export default SectionWrapper(About, "about");
