"use client";
import localFont from "next/font/local";
import "./globals.css";
import Components from "@/Components";
import { Box } from "@mui/material";
import { UserProvider } from '@/Context/UserContext';

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

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
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent header
        
      }}
    >
      {/* Insert your header component here */}
      <Components.Header.header />
    </Box>
      </header>
        {children}
        <Components.Footer.footer />
        </Box>
      </UserProvider>


     
      </body>
    </html>
  );
}
