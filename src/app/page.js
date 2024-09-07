"use client";
import { useRef } from 'react';
import Image from 'next/image';
import './page.css'; // Assuming you move the styles to a global CSS file
import Components from './Components';

export default function Home() {
  const videoRef = useRef(null);

  return (
    <main className="main">
      <Components.Header.header />
      
      {/* Video background with centered content */}
      <div className="videoBackground">
        <video
          ref={videoRef}
          className="backgroundVideo"
          src="/videos/5838634-uhd_3840_2160_30fps.mp4" // Use relative path to the video in public folder
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
    </main>
  );
}
