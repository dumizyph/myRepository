"use client";
import { useContext, useRef } from 'react';
import Image from 'next/image';
import './page.css'; // Assuming you move the styles to a global CSS file

import About from '../Components/About';
import { UserContext } from '../Context/UserContext';
import { Button } from '@mui/material';
import Color from '../utils/Color';

export default function Home() {
  const videoRef = useRef(null);
  const { Divlocation } = useContext(UserContext);
  return (
    <main id="white-section" className="main">
      {/* Transparent and absolutely positioned header */}


      {/* Video background with centered content */}
      <div className="videoBackground">
        <video
          ref={videoRef}
          className="backgroundVideo"
          src="/videos/systemvedioFullhd.mp4" // Use relative path to the video in public folder
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
        {/* Content over video */}

        <div className="content">
          <p className="companyName">You Imagine, We Build</p>
          <h1 className="tagline">Coming Soon...</h1>
        </div>






      </div>
      <div ref={Divlocation} style={{ width: "90%", height: "100%", margin: 0 }}>
        <About />
      </div>
      <div className="videoBackground">
        <video
          ref={videoRef}
          className="backgroundVideo"
          src="/videos/join us.mp4" // Use relative path to the video in public folder
          autoPlay
          loop
          muted
        >
        </video>
        {/* Content over video */}

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="content">
          <span className="companyName">
            You next starts right here
          </span>
          <Button sx={{"&:hover": {
                color: "red", // Slight color change on hover
              },}} style={{backgroundColor:Color.Blue,color:"white",fontSize:20,paddingLeft:20,paddingRight:20}}
          >
            Join Us
          </Button>
        </div>






      </div>

    </main>
  );
}
