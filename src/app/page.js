"use client";
import { useContext, useRef } from 'react';
import Image from 'next/image';
import './page.css'; // Assuming you move the styles to a global CSS file

import { UserContext } from '../Context/UserContext';
import { Button } from '@mui/material';
import Components from '../Components';

export default function Home() {
  const videoRef = useRef(null);
  const { Divlocation } = useContext(UserContext);
  return (
    <main id="white-section" className="main">
      {/* Transparent and absolutely positioned header */}


      {/* Video background with centered content */}
      <Components.Home.SliderSection/>
    
      <div ref={Divlocation} style={{ width: "90%", height: "100%", margin: 0 }}>
        <Components.Home.About />
      </div>
      <Components.Home.JoinUs />

    </main>
  );
}
