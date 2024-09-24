// Import dependencies
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';
import SecurityIcon from '@mui/icons-material/Security';  // For security vulnerabilities
import AssessmentIcon from '@mui/icons-material/Assessment'; // For high bounce rates
import DesignServicesIcon from '@mui/icons-material/DesignServices'; //
import Color from '../../../utils/Color';

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
]


// 3D Component - Rotating Sphere
const RotatingSphere = () => {
  const sphereRef = useRef();

  // Use `useFrame` to rotate the sphere on every frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; // Rotate slowly on Y-axis
      sphereRef.current.rotation.x += 0.005; // Optional rotation on X-axis
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
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '50vh',
        padding: '20px',
        backgroundColor: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '90%', md: '80%' },
          maxWidth:1500,
          padding: '20px',
          backgroundColor: 'white',
          textAlign: 'center',
          borderRadius: '15px',
        }}
      >
        {/* 3D Background Animation using react-three-fiber */}
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} />
          <RotatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </Canvas>

        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            color: '#333',
            // fontWeight: 'bold',
            marginBottom: '20px',
            fontSize: { xs: '1.8rem', md: '3.5rem' }, // Responsive font size
          }}
        >
          Why Settle for Less? Let's Fix What's Holding You Back
        </Typography>

        {/* Sub Detail */}
        <Typography
          variant="h5"
          sx={{
            color: '#555',
            marginBottom: '30px',
            fontSize: { xs: '1.2rem', md: '1.5rem' }, // Responsive font size
          }}
        >
          Common Web Development Challenges We Solve
        </Typography>

        {/* Cards */}
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
              <motion.div whileHover="hover" transition={{ duration: 0.3 }}>
                <Card
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    {/* Animated Icon */}
                    <motion.div
                      variants={{ hover: { rotate: 360 } }}
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
      </Box>
    </Box>
  );
};

export default ProblemSolutionCards;
