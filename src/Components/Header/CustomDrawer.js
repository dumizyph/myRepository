"use client"
import { Button,Box, Drawer,ListItemIcon, IconButton, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // MUI close icon
import styles from './CustomDrawer.module.css'; // Separate CSS for the drawer
import { useRouter } from 'next/navigation';

export default function CustomDrawer({ isOpen, toggleDrawer,isScrolled }) {
  const Router=useRouter()
  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
     <div className={styles.drawerHeader}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <img src="/images/zyfhalon-removebg-preview.png" alt="Logo" />
          </a>
        </div>
        <IconButton  className={styles.closeButton}>
          <CloseIcon onClick={  () => {
            toggleDrawer(false)
          }} />
        </IconButton>
      </div>
      
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
            
            toggleDrawer(false)
            Router.push("/Contact")
          }}
      style={{margin:10,color:"white",backgroundColor:"#0D2D43",width:"90%"}}>
            Get in touch
          </Button>
   
    </Box>
  );




  return (
    
      <Drawer   anchor={'right'} open={isOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    
    
  );
}
