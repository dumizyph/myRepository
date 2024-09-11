"use client";
import { useState, useEffect, useContext } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from './CustomDrawer';
import Components from '..';
import styles from './Header.module.css';
import { UserContext } from '@/Context/UserContext';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {Divlocation } = useContext(UserContext);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (Divlocation.current) {
        const whiteSectionTop = Divlocation.current.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= whiteSectionTop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <img src={`/images/${isScrolled?"Black-Zyphalon-Logo.png":"zyfhalon-removebg-preview.png"}`} alt="Logo" />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home" className={isScrolled ? styles.scrolledLink : ''}>Home</a></li>
            <li><a href="#about" className={isScrolled ? styles.scrolledLink : ''}>About</a></li>
            <li><a href="#services" className={isScrolled ? styles.scrolledLink : ''}>Services</a></li>
            <li><a href="#contact" className={isScrolled ? styles.scrolledLink : ''}>Contact</a></li>
          </ul>
        </nav>
        <IconButton aria-label="menu" onClick={() => setIsDrawerOpen(true)} className={styles.burger}>
          <MenuIcon style={{ color: isScrolled ? 'black' : 'white' }} />
        </IconButton>
        <Components.Header.CustomDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
}
