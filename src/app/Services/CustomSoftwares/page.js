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
  backgroundImage='/images/customsoftwaredevelopment.jpg' // A custom software-related background image
  smallHeading='Tailored Software Solutions' // A small heading focusing on custom software
  largeHeading='Building Software That Fits Your Needs' // A large heading focused on custom software development
  description='We provide bespoke software development services designed to meet the unique requirements of your business. Our team crafts reliable, scalable, and high-performance software solutions that drive your business forward.'
  buttonText='Get Your Solution'
  onButtonClick={() => alert('Explore Our Custom Software Solutions!')}
/>

<Components.ServicesComponents.WebDevelopment.ProblemSolver/>
<Components.ServicesComponents.WebDevelopment.DevelopmentProcessFlow/>
<Components.ServicesComponents.WebDevelopment.industriesWeSurve/>



</>

  );
}
