"use client";
import { useContext, useRef } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { UserContext } from '../../Context/UserContext';

export default function ContactPage() {
  const videoRef = useRef(null);
  const { Divlocation } = useContext(UserContext);
  return (
    <div >
      {/* Transparent and Fixed Header */}


      {/* Background Image (positioned behind the header) */}

      <Box
      
        sx={{
          width: "100%",
          height: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
          backgroundImage: 'url("/images/ContactUs/stars.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "red",
          marginTop: { xs: "0", sm: "0" }, // Removes margin from the image
        }}
      >
        {/* Content over background image */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "",
            zIndex: 2,
            width: "100%",

            display: "flex",
            justifyContent: "flex-start",

            alignItems: "flex-end",
            padding: 2,

            height: "100%",
            // Ensure text is above image
          }}
        >
          <Grid style={{display:"flex",flexDirection:"column"}}>
          <Typography
            variant="h1"
            sx={{
              // fontSize: { xs: "40px", sm: "48px", md: "80px" },
              // fontWeight: "bold",
              fontSize: 20,
              padding:1,
              whiteSpace: "nowrap",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "35px", sm: "58px", md: "90px" },
              fontWeight: 500,
              whiteSpace: "nowrap",
              lineHeight: 1.2, // Adjust this to control vertical spacing between lines
              transform: "scaleY(1.3)", // Stretch text vertically
              display: "inline-block" // Required for `scaleY` to work correctly
            }}
          >
            How can we help you?
          </Typography>
          </Grid>
          
        </Box>
      </Box>
      {/* Form Section */}
      <Box
      ref={Divlocation}
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: 800,
          padding: { xs: "16px", sm: "24px", md: "32px" },
          textAlign: "center",
          // marginTop: "-100px", // This brings the form up, making it look seamless with the image
        }}
      >
        <Typography
          variant="h6"
          sx={{ marginBottom: "16px", color: "black", fontSize: { xs: "18px", sm: "20px", md: "22px" } }}
        >
          Please fill the form below
        </Typography>
     {/* <Logo/> */}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your name*" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="City*" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email address*" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone number*" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Company name*" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your title/role" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Please tell us a bit about what you're looking for"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#a3cb38",
                  '&:hover': { backgroundColor: "#81b532" },
                  width: 100,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}
