"use client";
import { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // MUI burger icon
import styles from './Header.module.css';
import CustomDrawer from './CustomDrawer'; // Import the drawer component
import Components from '..';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">
            <img src='/images/zyfhalon-removebg-preview.png' alt="Logo" />
          </a>
        </div>

        {/* Normal Nav for larger screens */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* MUI Burger Icon for small screens */}
        <IconButton  aria-label="menu" onClick={toggleDrawer(true)} className={styles.burger}>
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>

        {/* Custom Drawer Component */}
        <Components.Header.CustomDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
}
