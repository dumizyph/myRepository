"use client";
import { useState, useEffect, useContext } from 'react';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Components from '..';
import styles from './Header.module.css';
import { UserContext } from '@/Context/UserContext';
import CustomDrawer from './CustomDrawer';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const Router=useRouter()
  const { Divlocation } = useContext(UserContext); // Tracking specific div location
  const [isScrolled, setIsScrolled] = useState(false); // To change header color based on specific div
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // To track header visibility

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if we have Divlocation to handle the color change
      if (Divlocation.current) {
        const divTop = Divlocation.current.offsetTop;

        // If we've reached the specific div, change the color
        if (scrollPosition >= divTop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }

      // Hide header when scrolling down, show when scrolling up
      if (scrollPosition > lastScrollY) {
        // Scrolling down, hide header
        setIsVisible(false);
      } else {
        // Scrolling up, show header
        setIsVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, Divlocation]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if we have Divlocation to handle the color change
      if (Divlocation.current) {
        const divTop = Divlocation.current.offsetTop;

        // If we've reached the specific div, change the color
        if (scrollPosition >= divTop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      console.log("🚀 ~ handleScroll ~ lastScrollY:", lastScrollY)

      // Hide header when scrolling down, show when scrolling up
      if (scrollPosition > lastScrollY) {
        // Scrolling down, hide header
        setIsVisible(false);
      } else {
        // Scrolling up, show header
        setIsVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isVisible ? styles.show : styles.hide}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a onClick={()=>{
            Router.push('/')
          }}>
            <img src={`/images/${isScrolled ? "Black-Zyphalon-Logo.png" : "zyfhalon-removebg-preview.png"}`} alt="Logo" />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home" className={isScrolled ? styles.scrolledLink : ''}>Home</a></li>
            <li><a href="#about" className={isScrolled ? styles.scrolledLink : ''}>About</a></li>
            <li><a href="#services" className={isScrolled ? styles.scrolledLink : ''}>Services</a></li>
            <li><a href="#contact" className={isScrolled ? styles.scrolledLink : ''}>Contact</a></li>
          </ul>
          <Button
          onClick={()=>{
            Router.push('/Contact')
          }}
          style={{margin:10,color:isScrolled?"#0D2D43":"white",border:isScrolled?"2px solid #0D2D43":"2px solid white"}}>
            Get in touch
          </Button>
        </nav>
        <IconButton aria-label="menu" onClick={() => {
          console.log("🚀 ~ Header ~ onClick:")
          
          setIsDrawerOpen(true)}} className={styles.burger}>
          <MenuIcon style={{ color: isScrolled ? 'black' : 'white' }} />
        </IconButton>
        <CustomDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
}
