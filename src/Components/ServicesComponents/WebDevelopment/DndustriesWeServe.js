import React, { useRef, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import PlanningIcon from '@mui/icons-material/Lightbulb';
import DesignIcon from '@mui/icons-material/Brush';
import DevelopmentIcon from '@mui/icons-material/Code';
import TestingIcon from '@mui/icons-material/BugReport';
import DeploymentIcon from '@mui/icons-material/CloudDone';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Stagger timing between steps
    },
  },
};

const stepVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const SoftwareDevelopmentProcess = () => {
  // Ref and inView hook to detect scroll position
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false }); // triggerOnce: false allows the animation to replay every time the section enters the viewport

  // Use useEffect to safely access document and append the style on the client side only
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);

    // Cleanup: remove the style element when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Typography variant="h3" component="h1" align="center" sx={styles.title}>
        Code that Breathes Life into Ideas
      </Typography>

      {/* Sub-detail below the main heading */}
      <Typography variant="body1" component="p" align="center" sx={styles.subDetail}>
        A step-by-step process to turn your vision into reality with precision and clarity.
      </Typography>

      <motion.div
        ref={ref} // Attach ref to trigger when it comes into view
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'} // Start animation when in view and reset when out of view
        style={styles.chartContainer}
      >
        {/* Step 1: Planning */}
        <motion.div variants={stepVariant} style={styles.stepContainer}>
          <motion.div variants={electricEffect} whileHover="hover" style={styles.circle}>
            <PlanningIcon sx={styles.icon} />
          </motion.div>
          <Box sx={styles.stepContent}>
            <Typography variant="h5" sx={styles.stepTitle}>
              Planning & Requirement Gathering
            </Typography>
            <Typography variant="body1" sx={styles.stepDescription}>
              Understanding the client's needs, analyzing the project scope, and establishing project goals.
            </Typography>
          </Box>
          <Box sx={styles.connector}></Box>
        </motion.div>

        {/* Step 2: Design */}
        <motion.div variants={stepVariant} style={styles.stepContainer}>
          <motion.div variants={electricEffect} whileHover="hover" style={styles.circle}>
            <DesignIcon sx={styles.icon} />
          </motion.div>
          <Box sx={styles.stepContent}>
            <Typography variant="h5" sx={styles.stepTitle}>
              Design & Prototyping
            </Typography>
            <Typography variant="body1" sx={styles.stepDescription}>
              Creating wireframes, prototypes, and designing the architecture for the application.
            </Typography>
          </Box>
          <Box sx={styles.connector}></Box>
        </motion.div>

        {/* Step 3: Development */}
        <motion.div variants={stepVariant} style={styles.stepContainer}>
          <motion.div variants={electricEffect} whileHover="hover" style={styles.circle}>
            <DevelopmentIcon sx={styles.icon} />
          </motion.div>
          <Box sx={styles.stepContent}>
            <Typography variant="h5" sx={styles.stepTitle}>
              Development & Coding
            </Typography>
            <Typography variant="body1" sx={styles.stepDescription}>
              Writing clean, efficient code, and building the core functionality of the application.
            </Typography>
          </Box>
          <Box sx={styles.connector}></Box>
        </motion.div>

        {/* Step 4: Testing */}
        <motion.div variants={stepVariant} style={styles.stepContainer}>
          <motion.div variants={electricEffect} whileHover="hover" style={styles.circle}>
            <TestingIcon sx={styles.icon} />
          </motion.div>
          <Box sx={styles.stepContent}>
            <Typography variant="h5" sx={styles.stepTitle}>
              Testing & QA
            </Typography>
            <Typography variant="body1" sx={styles.stepDescription}>
              Rigorous testing of the application to ensure bug-free, high-performance software.
            </Typography>
          </Box>
          <Box sx={styles.connector}></Box>
        </motion.div>

        {/* Step 5: Deployment */}
        <motion.div variants={stepVariant} style={styles.stepContainer}>
          <motion.div variants={electricEffect} whileHover="hover" style={styles.circle}>
            <DeploymentIcon sx={styles.icon} />
          </motion.div>
          <Box sx={styles.stepContent}>
            <Typography variant="h5" sx={styles.stepTitle}>
              Deployment & Support
            </Typography>
            <Typography variant="body1" sx={styles.stepDescription}>
              Deploying the software to production and providing ongoing support and updates.
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

// Electric Glow Effect for Side Icons
const electricEffect = {
  hover: {
    borderColor: "#A3CB38", // Green for glow effect
    boxShadow: "0 0 15px rgba(163, 203, 56, 0.8)",
    transition: { duration: 0.4 },
  },
};

// Keyframe animation for the animated gradient background
const styles = {
  container: {
    width: '100%',
    padding: '20px 20px',
    borderRadius: '16px',
    background: 'linear-gradient(45deg, #0D2D43 60%, rgba(255, 255, 255, 0.2) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    flexDirection: 'column',
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 15s ease infinite',
    '@media (max-width: 600px)': {
      padding: '20px', // Adjust padding on small screens
    },
  },
  title: {
    color: '#ffffff',
    marginBottom: '20px',
    fontSize: '80px',
    '@media (max-width: 600px)': {
      fontSize: '40px', // Adjust title size on small screens but keep alignment
      marginBottom: '20px',
    },
  },
  subDetail: {
    color: '#B0D4E3',
    marginBottom: '40px',
    fontSize: '18px',
    '@media (max-width: 600px)': {
      fontSize: '14px', // Adjust font size on small screens
      marginBottom: '30px',
    },
  },
  chartContainer: {
    position: 'relative',
    maxWidth:"800px",
    '@media (max-width: 5000px)': {
      paddingLeft: '100px',
    },
  },
  stepContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '80px',
    position: 'relative',
    '@media (max-width: 600px)': {
      flexDirection: 'row', // Keep steps horizontally aligned, just smaller
      alignItems: 'center',
    },
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '3px solid transparent',
    '@media (max-width: 600px)': {
      width: 50, // Adjust circle size on small screens
      height: 50,
    },
  },
  icon: {
    fontSize: 40,
    color: '#0D2D43',
    '@media (max-width: 600px)': {
      fontSize: 35, // Adjust icon size on small screens
    },
  },
  stepContent: {
    marginLeft: '30px',
    flex: 1,
    zIndex: 1,
    '@media (max-width: 600px)': {
      marginLeft: '10px', // Keep elements aligned but reduce spacing
    },
  },
  stepTitle: {
    fontWeight: 600,
    marginBottom: '10px',
    color: '#ffffff',
    '@media (max-width: 600px)': {
      fontSize: '16px', // Adjust title size on small screens but keep alignment
    },
  },
  stepDescription: {
    fontSize: '1.1em',
    color: '#B0D4E3',
    lineHeight: '1.6',
    '@media (max-width: 600px)': {
      fontSize: '0.9em', // Adjust description size on small screens but keep alignment
    },
  },
  connector: {
    position: 'absolute',
    top: '80px',
    left: '40px',
    width: '4px',
    height: '137%',
    backgroundColor: '#A3CB38',
    borderRadius: '50px',
    '@media (max-width: 600px)': {
      top: '79px',
    },
  },
};

export default SoftwareDevelopmentProcess;
