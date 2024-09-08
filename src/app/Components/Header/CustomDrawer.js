import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // MUI close icon
import styles from './CustomDrawer.module.css'; // Separate CSS for the drawer

export default function CustomDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{ width: '400px', '& .MuiDrawer-paper': { width: '400px' } }} // Set the width
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
    </Drawer>
  );
}
