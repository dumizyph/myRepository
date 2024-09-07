"use client";
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/"><img  src='/images/zyfhalon-removebg-preview.png'/></a>
        </div>
        <nav className={`${styles.nav} ${isDrawerOpen ? styles.drawerOpen : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className={styles.burger} onClick={toggleDrawer}>
          <span className={`${isDrawerOpen ? styles.open : ''}`}></span>
          <span className={`${isDrawerOpen ? styles.open : ''}`}></span>
          <span className={`${isDrawerOpen ? styles.open : ''}`}></span>
        </div>
      </div>

      {/* Fullscreen Drawer for small screens */}
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <h2>Zyphalon</h2>
          <button className={styles.closeButton} onClick={toggleDrawer}>&times;</button>
        </div>
        <ul>
          <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
          <li><a href="#about" onClick={toggleDrawer}>About</a></li>
          <li><a href="#services" onClick={toggleDrawer}>Services</a></li>
          <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
