import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import Color from '../../../utils/Color'; // Ensure this path is correct to your Color file

// Styled component for the video container
const VideoBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh', // Full viewport height
  overflow: 'hidden',
}));

// Styled component for the background video
const BackgroundVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensures video covers the entire area without stretching
});

// Styled component for overlay content on the video
const ContentOverVideo = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#FFFFFF', // White color for text
  zIndex: 2, // Ensure content is on top of the overlay
});

// Styled component for the semi-transparent overlay
const VideoOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  zIndex: 1, // Ensures it sits above the video but below the content
});

const JoinUs = () => {
  return (
    <VideoBackground>
      <BackgroundVideo
        src="/videos/join us.mp4"
        autoPlay
        loop
        muted
      />
      
      <VideoOverlay /> {/* Black semi-transparent overlay */}
      
      <ContentOverVideo>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: {
              xs: '2rem', // For extra-small devices
              sm: '2.5rem',   // For small devices
              md: '3rem', // For medium devices
              lg: '3.5rem',   // For large devices
              xl: '4rem'  // For extra-large devices
            }
          }}
        >
          Your next starts right here
        </Typography>
        
        <Button
          variant="contained"
          sx={{
            bgcolor: Color.Blue,
            '&:hover': {
              bgcolor: 'white',
              color: Color.Green,
            },
            fontSize: {
              xs: '1rem', // Smaller font on smaller screens
              sm: '1.25rem', // Slightly larger font on small screens
              md: '1.5rem', // Default font size
              lg: '1.75rem', // Larger font on large screens
              xl: '1.80rem' // Largest font on extra-large screens
            },
            px: 3,
          }}
        >
          Join Us
        </Button>
      </ContentOverVideo>
    </VideoBackground>
  );
}

export default JoinUs;