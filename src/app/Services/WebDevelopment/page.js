"use client";
import { useContext, useRef } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { UserContext } from '../../../Context/UserContext';
import Components from '../../../Components';

export default function ContactPage() {
  const { Divlocation } = useContext(UserContext);
  return (
//     <div>
//       {/* Top Section with Full Background Image and Gradient Text */}
//       <Box
//   sx={{
//     position: 'relative',
//     minHeight: '100vh', // Full screen height for the container
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     textAlign: 'center',
//     overflow: 'hidden',
//   }}
// >
//   {/* Full Background Image */}
//   <Box
//     sx={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: "60%", // Image height scaled to 60%
//       backgroundImage: 'url("/images/ContactUs/stars.jpg")', // Replace with the actual image URL
//       backgroundPosition: 'center',
//       backgroundSize: 'cover', // Ensure the image covers the entire area
//       backgroundRepeat: 'no-repeat',
//       zIndex: 0,
//     }}
//   />

//   {/* Content Over Image */}
//   <Box
//     sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'flex-start',
//       marginTop: { xs: '12rem', md: '14rem' }, // Responsive margin for different screen sizes
//       zIndex: 1,
//       padding: { xs: '16px', md: '64px' }, // Responsive padding
//       width: { xs: '90%', md: '80%' }, // Responsive width
//       maxWidth: '1200px', // Max width to prevent overflow
//       textAlign: 'left',
//     }}
//   >
//     <Typography
      // sx={{
      //   fontSize: { xs: '2.5rem', md: '4rem', lg: '5.5rem' }, // Responsive large font size
      //   lineHeight: { xs: '3rem', md: '5rem', lg: '6.5rem' }, // Responsive line height for readability
      //   position: 'relative',
      //   zIndex: 1,
      //   background: `linear-gradient(to bottom, white 50%, black 50%)`, // Gradient effect for text color
      //   WebkitBackgroundClip: 'text',
      //   WebkitTextFillColor: 'transparent', // Fills the text with gradient
      //   width: '100%',
      //   display: 'inline-block',
      //   textAlign: 'left',
      //   whiteSpace: 'normal', // Ensure text wraps normally instead of breaking
      //   wordBreak: 'break-word', // Prevent long words from breaking awkwardly
      // }}
//     >
//       Build a Resilient Bank to Scale Faster with our Cloud First Services
//     </Typography>
    
//     <Button
//       sx={{
//         marginTop: '2rem',
//         backgroundColor: '#1a1a1a', // Dark background to contrast the white text
//         color: 'white',
//         padding: { xs: '10px 20px', md: '12px 28px' }, // Adjust button padding for responsiveness
//         fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size for button
//       }}
//     >
//       GET IN TOUCH
//     </Button>
//   </Box>
// </Box>





//       {/* Form Section (Bottom Section) */}
//       <Box
//         ref={Divlocation}
//         sx={{
//           backgroundColor: 'white',
//           width: '100%',
//           height: 'auto', // Adjust height based on content
//           padding: { xs: '16px', sm: '24px', md: '32px' },
//           textAlign: 'center',
//           // marginTop: '-100px', // Bring the form up, creating an overlap with the top section
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             marginBottom: '16px',
//             color: 'black',
//             fontSize: { xs: '18px', sm: '20px', md: '22px' },
//           }}
//         >
//           Please fill the form below
//         </Typography>

//         {/* Form Fields */}
//         <form>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Your name*" variant="outlined" required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="City*" variant="outlined" required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Email address*" variant="outlined" required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Phone number*" variant="outlined" required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Company name*" variant="outlined" required />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Your title/role" variant="outlined" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={4}
//                 label="Please tell us a bit about what you're looking for"
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#a3cb38',
//                   '&:hover': { backgroundColor: '#81b532' },
//                   width: 100,
//                 }}
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </div>

<>
<Box
  sx={{
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: { xs: '20px', md: '40px' },
    color: 'white',
    overflow: 'hidden',
    zIndex: 1,
  }}
>
  {/* Darker Animated Gradient Background */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(-45deg, #02060A, #09121A, #0D2D43, #051017)', // Darker shades
      backgroundSize: '400% 400%',
      animation: 'gradientAnimation 15s ease infinite',
      zIndex: 0,
      opacity: 0.9, // Darker effect with less transparency
    }}
  />

  {/* Fused Background Image */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("/images/pexels-pixabay-161154.jpg")', // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.25, // Further reduced opacity for more prominence of the gradient
      zIndex: 1,
      mixBlendMode: 'overlay', // Blend mode for the image fusion
    }}
  />

  {/* CSS Animation Keyframes */}
  <style jsx global>{`
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}</style>

  {/* Content Area */}
  <Box
    sx={{
      position: 'relative',
      zIndex: 2,
      textAlign: 'left',
      maxWidth: '800px',
      px: { xs: '24px', md: '48px' },
      py: { xs: '32px', md: '64px' },
    }}
  >
    {/* Small Heading */}
    <Typography
      component="h5"
      sx={{
        fontSize: { xs: '1.2rem', md: '1.5rem' },
        fontWeight: '300',
        color: '#A3CB38', // Updated color to green
        letterSpacing: '0.05rem',
        mb: { xs: 2, md: 3 },
      }}
    >
      Empowering Your Business
    </Typography>

    {/* Large Heading */}
    <Typography
      component="h1"
      sx={{
        fontSize: { xs: '3rem', md: '5rem' },
        color: 'white',
        letterSpacing: '0.1rem',
        mb: { xs: 3, md: 4 },
        lineHeight: '1.2',
      }}
    >
      Crafting Web Solutions for Tomorrow
    </Typography>

    {/* Detailed Description */}
    <Typography
      component="p"
      sx={{
        fontSize: { xs: '1rem', md: '1.2rem' },
        color: '#ddd',
        lineHeight: '1.6',
        maxWidth: '600px',
        mb: 4,
      }}
    >
      We create innovative and scalable web solutions designed to empower your business. Whether you're looking to enhance your digital presence or streamline your business processes, our team delivers top-notch services that drive growth and success.
    </Typography>

    {/* Call to Action Button */}
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#A3CB38', // Updated button color to green
        color: '#1a1a1a',
        fontSize: { xs: '1rem', md: '1.2rem' },
        padding: { xs: '10px 20px', md: '12px 30px' },
        borderRadius: '25px',
        boxShadow: '0 4px 12px rgba(163, 203, 56, 0.3)', // Updated box shadow to match green shade
        '&:hover': {
          backgroundColor: '#8BBE31', // Slightly darker green for hover effect
        },
      }}
    >
      Discover More
    </Button>
  </Box>
</Box>










<Components.ServicesComponents.WebDevelopment.ProblemSolver/>
<Components.ServicesComponents.WebDevelopment.DevelopmentProcessFlow/>
<Components.ServicesComponents.WebDevelopment.industriesWeSurve/>



</>

  );
}
