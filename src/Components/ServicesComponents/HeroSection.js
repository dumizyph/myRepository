import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = ({
  backgroundImage = '/images/pexels-pixabay-161154.jpg', // Default image
  smallHeading = 'Empowering Your Business', // Default small heading
  largeHeading = 'Crafting Web Solutions for Tomorrow', // Default large heading
  description = 'We create innovative and scalable web solutions designed to empower your business. Whether you\'re looking to enhance your digital presence or streamline your business processes, our team delivers top-notch services that drive growth and success.',
  buttonText = 'Discover More', // Default button text
  onButtonClick = () => {}, // Default button action (no-op)
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: { xs: '20px', md: '40px' },
        color: 'white',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Darker Animated Gradient Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(-45deg, #02060A, #09121A, #0D2D43, #051017)', // Darker shades
          backgroundSize: '400% 400%',
          animation: 'gradientAnimation 15s ease infinite',
          zIndex: 0,
          opacity: 0.9, // Darker effect with less transparency
        }}
      />

      {/* Fused Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`, // Background image from props
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25, // Further reduced opacity for more prominence of the gradient
          zIndex: 1,
          mixBlendMode: 'overlay', // Blend mode for the image fusion
        }}
      />

      {/* CSS Animation Keyframes */}
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Content Area */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'left',
          maxWidth: '800px',
          px: { xs: '24px', md: '48px' },
          py: { xs: '32px', md: '64px' },
        }}
      >
        {/* Small Heading */}
        <Typography
          component="h5"
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            fontWeight: '300',
            color: '#A3CB38', // Updated color to green
            letterSpacing: '0.05rem',
            mb: { xs: 2, md: 3 },
          }}
        >
          {smallHeading}
        </Typography>

        {/* Large Heading */}
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            color: 'white',
            letterSpacing: '0.1rem',
            mb: { xs: 3, md: 4 },
            lineHeight: '1.2',
          }}
        >
          {largeHeading}
        </Typography>

        {/* Detailed Description */}
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            color: '#ddd',
            lineHeight: '1.6',
            maxWidth: '600px',
            mb: 4,
          }}
        >
          {description}
        </Typography>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#A3CB38', // Updated button color to green
            color: '#1a1a1a',
            fontSize: { xs: '1rem', md: '1.2rem' },
            padding: { xs: '10px 20px', md: '12px 30px' },
            borderRadius: '25px',
            boxShadow: '0 4px 12px rgba(163, 203, 56, 0.3)', // Updated box shadow to match green shade
            '&:hover': {
              backgroundColor: '#8BBE31', // Slightly darker green for hover effect
            },
          }}
          onClick={onButtonClick} // Button click action
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
