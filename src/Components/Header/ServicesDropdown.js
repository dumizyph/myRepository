import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { keyframes } from '@mui/system';
import { useRouter } from 'next/navigation';

const ServicesDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Router=useRouter()
  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose} // This will close the menu when the mouse leaves the button or the entire menu
      style={{ position: 'relative', display: 'inline-block' }} // Ensures relative positioning for the menu
    >
<Typography
  component="span"
  sx={{
    display: 'inline-flex', // Aligns the text and icon in a row
    alignItems: 'center',
    color: 'white',
    textTransform: 'none', // Prevents text from being capitalized
    fontSize: 18,
    padding: '0', // Removes any padding if present
    cursor: 'pointer', // Makes it look clickable
  }}
>
  Services
  <ArrowDropDownIcon  /> {/* Icon with some spacing */}
</Typography>


      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true} // Prevents body scroll lock
        transitionDuration={200} // Smooth transition
        MenuListProps={{
          onMouseLeave: handleClose, // Close the menu when the mouse leaves the menu area
        }}
        PaperProps={{
          elevation: 8,
          sx: {
            mt: 2, // Spacing between button and menu
            borderRadius: '16px', // Larger rounded corners for the dropdown
            backgroundColor: '#F5F5F5', // Light background color
            color: '#0D2D43',
            minWidth: 400, // Make the dropdown even wider for a more prominent look
            padding: '30px 40px', // Add more padding inside the dropdown
            boxShadow: '0px 12px 24px rgba(0,0,0,0.2)', // Stronger shadow effect for more depth
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {[{name:'Web Development',route:"/Services/WebDevelopment"},{name:'Mobile App Development',route:"/Services/MobileAppDevelopment"},{name:'Cloud Solutions',route:"/Services/CloudSolutions"}, {name:'Custom Software Development',route:"/Services/CustomSoftwares"}, {name:'UI/UX Design',route:"/Services/Ui-UxDesigns"}].map((item) => (
          <MenuItem 
            onClick={()=>{
               Router.push(item.route)
               handleClose()
          }}
            key={item}
            sx={{
              fontSize: '18px', // Larger font for menu items
              padding: '16px 32px', // More padding for each item
              position: 'relative', // Position relative for underline animation
              '&:hover .underline': { // Hover on the entire item triggers line animation
                width: '100%',
                backgroundColor: '#A3CB38', // Underline color changes to #A3CB38 on hover
              },
              '&:hover .text': {
                color: '#A3CB38', // Text color changes to #A3CB38 on hover
              },
              '&:hover': {
                backgroundColor: 'transparent', // No background change, focus on underline
              },
            }}
          >
            <Box sx={{ position: 'relative', width: 'fit-content' }}>
              <Typography variant="body1" className="text" sx={{ fontWeight: 700, color: '#0D2D43' }}> {/* Default text color */}
                {item.name}
              </Typography>
              {/* Underline Animation */}
              <Box
                className="underline"
                sx={{
                  position: 'absolute',
                  bottom: '-2px', // Line appears directly under the text
                  left: 0,
                  height: '2px',
                  backgroundColor: 'transparent', // Initially transparent underline
                  width: '0', // Start with no width
                  transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out', // Smooth width and color transition
                }}
              />
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ServicesDropdown;
