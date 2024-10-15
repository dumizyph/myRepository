"use client";
import { useContext, useRef } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { UserContext } from '../../../Context/UserContext';
import Components from '../../../Components';

export default function WebDevelopment() {
  const { Divlocation } = useContext(UserContext);
  return (


<>

<Components.ServicesComponents.HeroSection
  backgroundImage='/images/uiuxdesign.jpg' // A UI/UX-related background image
  smallHeading='Crafting Intuitive Designs' // A small heading focusing on UI/UX
  largeHeading='Designing User-Centric Experiences' // A large heading focused on UI/UX design
  description='Our UI/UX design services focus on creating seamless, user-friendly interfaces that prioritize usability and aesthetics. We craft experiences that resonate with your users, enhancing engagement and satisfaction across all platforms.'
  buttonText='Learn More'
  onButtonClick={() => alert('Explore Our UI/UX Solutions!')}
/>
<Components.ServicesComponents.WebDevelopment.ProblemSolver/>
<Components.ServicesComponents.WebDevelopment.DevelopmentProcessFlow/>
<Components.ServicesComponents.WebDevelopment.industriesWeSurve/>



</>

  );
}
