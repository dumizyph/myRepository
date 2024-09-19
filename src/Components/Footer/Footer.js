import React from 'react';
import { Box, Grid, Typography, Link, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#062D43', // Dark blue background similar to the screenshot
        color: 'white',
        padding: '40px 0',
        textAlign: 'left',
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Company Information */}
        <Grid item xs={12} md={3}>
          {/* Replace company name with company logo */}
          <Box sx={{ marginBottom: '20px' }}>
            <img src="/images/zyfhalon-removebg-preview.png" alt="Company Logo" style={{ width: '150px', height: 'auto' }} />
          </Box>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            123 Main Street, City Name, Country
          </Typography>
          <Link
            href="mailto:info@zyphalon.com"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'inline-block', // Ensure it's restricted to the text width
              position: 'relative',
              marginBottom: '10px',
              '&:hover': {
                color: '#a3cb38',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                left: '0',
                backgroundColor: '#a3cb38',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              },
            }}
          >
            info@zyphalon.com
          </Link>
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#a3cb38' } }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#a3cb38' } }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#a3cb38' } }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#a3cb38' } }}>
              <Twitter />
            </IconButton>
          </Box>
        </Grid>

        {/* Company Links - Corrected the hover effect here */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Services & Solutions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}> {/* Column layout */}
            <Link
              href="#home"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content', // Ensure the hover line stays within the text bounds
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Web Development
            </Link>
            <Link
              href="#about"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Mobile Development
            </Link>
            <Link
              href="#reviews"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Cloud Solutions
            </Link>
            <Link
              href="#careers"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Careers
            </Link>
          </Box>
        </Grid>
 <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Company
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}> {/* Column layout */}
            <Link
              href="#home"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content', // Ensure the hover line stays within the text bounds
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Home
            </Link>
            <Link
              href="#about"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              About
            </Link>
            <Link
              href="#reviews"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Reviews
            </Link>
            <Link
              href="#careers"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Careers
            </Link>
          </Box>
        </Grid>
        {/* Industries Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Industries We Serve
          </Typography>
          <Box>
            <Link
              href="#healthcare"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Healthcare
            </Link>
            <Link
              href="#banking"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Banking & Finance
            </Link>
            <Link
              href="#ecommerce"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                position: 'relative',
                width: 'fit-content',
                marginBottom: '10px',
                '&:hover': {
                  color: '#a3cb38',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '-2px',
                  left: '0',
                  backgroundColor: '#a3cb38',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              E-commerce
            </Link>
          </Box>
        </Grid>

        {/* Subscribe Section */}
        <Grid item xs={12} md={3}  >

          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Subscribe
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            Stay updated with the latest in tech.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',width:"80%" }}>
          <TextField
  label="Email"
  variant="outlined"
  fullWidth
  style={{ width: '100%' }}
  InputLabelProps={{
    style: { color: 'white' }, // Label color
  }}
  sx={{
    input: { color: 'white' }, // Text color inside the input
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' }, // Border color
      '&:hover fieldset': { borderColor: '#a3cb38' }, // Border color on hover
    },
    '& .MuiInputBase-input': {
      color: 'white', // Ensures the text inside is white
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#a3cb38', // Border color when focused
    },
  }}
/>

            <Button variant="contained" sx={{marginTop:2, backgroundColor: '#a3cb38', '&:hover': { backgroundColor: 'white',color:"#a3cb38" } }}>
              Submit
            </Button>
          </Box>
         
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', marginTop: '20px', padding: '10px 0', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Terms & Conditions | Privacy Policy
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          © 2024 Zyphalon. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
