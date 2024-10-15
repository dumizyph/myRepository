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
  backgroundImage='/images/cloudsolutions.jpg' // A cloud-related background image
  smallHeading='Empowering Cloud Innovation' // A small heading focusing on cloud solutions
  largeHeading='Transforming Businesses with Cloud Solutions' // A large heading focused on cloud services
  description='We offer custom cloud solutions that optimize your digital infrastructure. Our expert team ensures seamless integration, scalability, and security to meet your business needs, driving innovation and efficiency in the cloud.'
  buttonText='Discover More'
  onButtonClick={() => alert('Explore Our Cloud Solutions!')}
/>
<Components.ServicesComponents.WebDevelopment.ProblemSolver/>
<Components.ServicesComponents.WebDevelopment.DevelopmentProcessFlow/>
<Components.ServicesComponents.WebDevelopment.industriesWeSurve/>



</>

  );
}
