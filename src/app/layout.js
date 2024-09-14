"use client";
import localFont from "next/font/local";
import "./globals.css";
import Components from "@/Components";
import { Box } from "@mui/material";
import { UserProvider } from '@/Context/UserContext';
import Loader from "@/Components/Loader/Loader";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import MotionFramerDrawer from "@/Components/Header/MotionFramerDrawer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Zyphalon",
//   description: "You Imagine, We Build",
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader will be visible for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <html lang="en">
       
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

      <Loader>
          <>


           <UserProvider>
          <Box sx={{ width: "100%", position: "relative" }}>

       <header className="transparentHeader">

       <Box
       component="header"
       sx={{
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%",
         zIndex: 10,
         
       }}
     >
       <Components.Header.header />
     </Box>
       </header>
         {children}
        
         <Components.Footer.footer />
         </Box>
           </UserProvider> 
 </>
 
  </Loader>
      
      </body>
    </html>
  );
}
