import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion for animations
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // MUI Left Arrow Icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // MUI Right Arrow Icon
import Color from '../../../utils/Color';

const videos = [
  '/videos/systemvedioFullhd.mp4',
  '/videos/in full hd.mp4',
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
      zIndex: 2, // Ensuring the button is clickable and on top
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
      zIndex: 2, // Ensuring the button is clickable and on top
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
    }, 10000); // Auto-scroll every 6 seconds

    return () => clearInterval(intervalRef.current);
  }, [page]);

  const handleNext = () => {
    setPage([page === videos.length - 1 ? 0 : page + 1]);
  };

  const handlePrev = () => {
    setPage([page === 0 ? videos.length - 1 : page - 1]);
  };

  return (
    <div
      className="videoBackground"
     
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 1 } }} // Smooth fade transition
        >
          <video
            className="backgroundVideo"
            src={videos[page]}
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            className="content"
          >
            <p className="companyName">You Imagine, We Build</p>
            <h1 className="tagline">Video {page + 1}</h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Custom Navigation Buttons */}
      <PrevArrow onClick={handlePrev} />
      <NextArrow onClick={handleNext} />
    </div>
  );
};

export default SliderSection;
