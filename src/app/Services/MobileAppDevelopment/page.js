"use client";
import { useContext, useRef } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { UserContext } from '../../../Context/UserContext';
import Components from '../../../Components';

export default function MobileAppDevelopment() {
  const { Divlocation } = useContext(UserContext);
  return (

<>
<Components.ServicesComponents.HeroSection
 backgroundImage='/images/mobileaapdevelopment.jpg' // A mobile-related background image
 smallHeading='Empowering Mobile Experiences' // A small heading focusing on mobile
 largeHeading='Creating Mobile Apps for the Future' // A large heading focused on app development
 description='We specialize in delivering custom mobile app solutions designed to enhance your digital presence. Our team builds scalable, intuitive, and innovative apps that cater to your business needs, ensuring seamless user experiences on all devices.'
 buttonText='Get Started'
 onButtonClick={() => alert('Explore Our Mobile Solutions!')}
/>
<Components.ServicesComponents.WebDevelopment.ProblemSolver/>
<Components.ServicesComponents.WebDevelopment.DevelopmentProcessFlow/>
<Components.ServicesComponents.WebDevelopment.industriesWeSurve/>



</>

  );
}
