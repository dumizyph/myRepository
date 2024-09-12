import { Button, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // MUI close icon
import styles from './CustomDrawer.module.css'; // Separate CSS for the drawer

export default function CustomDrawer({ isOpen, toggleDrawer,isScrolled }) {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}

      sx={{
        '& .MuiDrawer-paper': {
          width: {
            xs: '100%', // Full width on extra small screens (mobile)
            sm: '300px', // 300px on small screens
            md: '400px', // 400px on medium and larger screens
          },
        },
      }} // Set the responsive width




    >
      <div className={styles.drawerHeader}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <img src="/images/zyfhalon-removebg-preview.png" alt="Logo" />
          </a>
        </div>
        {/* Close Button */}
        <IconButton onClick={toggleDrawer(false)} className={styles.closeButton}>
          <CloseIcon />
        </IconButton>
      </div>
      
      {/* Drawer List */}
      <List className={styles.drawerList}>
        <ListItem button component="a" href="#home" onClick={toggleDrawer(false)} className={styles.drawerItem}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#about" onClick={toggleDrawer(false)} className={styles.drawerItem}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="#services" onClick={toggleDrawer(false)} className={styles.drawerItem}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component="a" href="#contact" onClick={toggleDrawer(false)} className={styles.drawerItem}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Button
           onClick={()=>{
            router.push("/Contact")
           }}
          style={{ }}>
              Get in touch
             </Button>
    </Drawer>
  );
}
