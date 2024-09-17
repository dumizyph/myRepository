import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion for animations
import { IconButton, Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // MUI Left Arrow Icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // MUI Right Arrow Icon
import Color from '../../../utils/Color';

// Array of video data with corresponding text
const videoData = [
  {
    src: '/videos/systemvedioFullhd.mp4',
    title: 'Innovating the Future',
    subtitle: 'Revolutionizing System Design with Cutting-Edge Technology',
  },
  {
    src: '/videos/in full hd.mp4',
    title: 'Capturing Moments in HD',
    subtitle: 'Experience Unmatched Clarity and Precision in Full HD',
  },
];

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

// Custom Previous and Next Arrow Components
const PrevArrow = ({ onClick }) => (
  <IconButton
    sx={{
      backgroundColor: 'transparent',
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      color: 'white',
      position: 'absolute',
      left: '10px',
      top: '50%',
      zIndex: 3, // Ensuring the button is clickable and on top of overlay
      '&:hover': {
        color: Color.Green,
      },
    }}
    onClick={onClick}
  >
    <ArrowBackIosNewIcon sx={{ fontSize: '60px' }} />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    sx={{
      backgroundColor: 'transparent',
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      color: 'white',
      position: 'absolute',
      right: '10px',
      top: '50%',
      zIndex: 3, // Ensuring the button is clickable and on top of overlay
      '&:hover': {
        color: Color.Green,
      },
    }}
    onClick={onClick}
  >
    <ArrowForwardIosIcon sx={{ fontSize: '60px' }} />
  </IconButton>
);

// Main Slider Section using Framer Motion
const SliderSection = () => {
  const [[page], setPage] = useState([0]); // Tracks the current page
  const intervalRef = useRef();

  useEffect(() => {
    // Autoplay functionality
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 10000); // Auto-scroll every 10 seconds

    return () => clearInterval(intervalRef.current);
  }, [page]);

  const handleNext = () => {
    setPage([page === videoData.length - 1 ? 0 : page + 1]);
  };

  const handlePrev = () => {
    setPage([page === 0 ? videoData.length - 1 : page - 1]);
  };

  return (
    <div
      className="videoBackground"
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 1 } }} // Smooth fade transition
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        >
          <video
            className="backgroundVideo"
            src={videoData[page].src}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Transparent blackish overlay covering the entire video */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay
              zIndex: 2, // This should be on top of the video but under content
            }}
          >
            {/* Left-aligned content over the overlay */}
            <Box
              sx={{
                position: 'absolute',
                top:   {
                  xs: '70%', // For small screens
                  sm: '60%', // For medium screens
            
                },
                

                left: {
                  xs: '5%', // Left-aligned on small screens
                  md: '10%', // More padding on larger screens
                },
                transform: 'translateY(-50%)', // Vertical centering
                textAlign: 'left', // Left-align the text
                color: 'white',
                zIndex: 3, // Content on top of the overlay
                width: '100%',
                maxWidth: '800px', // Max width for large screens
                px: 2, // Padding for smaller screens
              }}
            >
              {/* Dynamic headline based on the current video */}
              <Box
                sx={{
                  fontSize: {
                    xs: '42px', // For small screens
                    sm: '58px', // For medium screens
                    md: '74px', // For large screens
                    lg: '80px', // For larger screens
                  },
                  fontWeight: '400', // Medium weight to keep text balanced
                  mb: '20px', // Margin for better spacing between headline and subtext
                  lineHeight: '1.2', // Consistent line-height for all screens
                }}
              >
                {videoData[page].title}
              </Box>
              {/* Dynamic subheading based on the current video */}
              <Box
                sx={{
                  fontSize: {
                    xs: '16px', // Smaller for small screens
                    sm: '20px', // Medium for small screens
                    md: '24px', // For large screens
                    lg: '28px', // For larger screens
                  },
                  fontWeight: '300', // Lighter font weight for subtitle
                  lineHeight: '1.3',
                }}
              >
                {videoData[page].subtitle}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Custom Navigation Buttons */}
      <PrevArrow onClick={handlePrev} />
      <NextArrow onClick={handleNext} />
    </div>
  );
};

export default SliderSection;
