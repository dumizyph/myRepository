"use client";
import { useContext, useRef } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { UserContext } from '../../../Context/UserContext';
import Components from '../../../Components';

export default function WebDevelopment() {
  const { Divlocation } = useContext(UserContext);
  return (


<>

<Components.ServicesComponents.HeroSection/>
<Components.ServicesComponents.WebDevelopment.ProblemSolver/>
<Components.ServicesComponents.WebDevelopment.DevelopmentProcessFlow/>
<Components.ServicesComponents.WebDevelopment.industriesWeSurve/>



</>

  );
}
