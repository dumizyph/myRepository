// Import dependencies
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Color from '../../../utils/Color';
import { fadeIn, textVariant } from '../../../utils/motion';

// Data for cards
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

// 3D Component - Rotating Sphere (Optional)
const RotatingSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

const ProblemSolutionCards = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      style={{
        padding: '40px 0',
        backgroundColor: 'white',
        overflow: 'hidden', // Prevent overflow issues

      }}
    >
      {/* 3D Background Animation using react-three-fiber */}
  

      <Box
        sx={{
          width: { xs: '100%', sm: '90%', md: '80%' },
          maxWidth: 1500,
          margin: '0 auto',
          backgroundColor: 'white',
          textAlign: 'center',
          borderRadius: '15px',
          padding: '40px',
         
        }}
      >
        {/* Main Heading */}
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

        {/* Sub Detail */}
        <motion.div variants={textVariant()}>

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
        </motion.div>
        {/* Cards */}
        <motion.div variants={textVariant()}>

        <Grid container spacing={3} justifyContent="center">
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ padding: { xs: '10px', sm: '20px' } }}
            >
              {/* Framer Motion applied to the Card */}
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Correct fadeIn usage
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    transition: 'transform 0.3s ease-in-out',
                    height: 'auto', // Let the height grow based on content
                    display: 'flex',
                    flexDirection: 'column', // Ensure the card grows vertically
                    overflow: 'visible', // Ensure that all text content is visible
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                    {/* Animated Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Problem */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#333',
                        marginTop: '20px',
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                      }}
                    >
                      {item.problem}
                    </Typography>

                    {/* Solution */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#777',
                        marginTop: '10px',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        overflow: 'visible', // Allow text to fully show
                        whiteSpace: 'normal', // Wrap text normally
                        wordWrap: 'break-word', // Ensure words break correctly
                      }}
                    >
                      {item.solution}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        </motion.div>

      </Box>
    </motion.section>
  );
};

export default ProblemSolutionCards;
