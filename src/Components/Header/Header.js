"use client";
import { useState, useEffect, useContext } from 'react';
import { Button } from '@mui/material';
import Components from '..';
import styles from './Header.module.css';
import { UserContext } from '../../Context/UserContext';
import { useRouter } from 'next/navigation';
import MotionFramerDrawer from './MotionFramerDrawer';
import { useCycle } from 'framer-motion';
import ServicesDropdown from './ServicesDropdown'; // Import the ServicesDropdown component

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true); // For the MotionFramerDrawer

  const Router = useRouter();
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

      // Hide header when scrolling down, show when scrolling up (only if drawer is not open)
      if (!isOpen) {
        if (scrollPosition > lastScrollY) {
          // Scrolling down, hide header
          setIsVisible(false);
        } else {
          // Scrolling up, show header
          setIsVisible(true);
        }
      }

      // Update the last scroll position
      setLastScrollY(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, Divlocation, isOpen]); // Include `isOpen` in the dependency array

  return (
    <div>
      {/* Header */}
      <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isVisible ? styles.show : styles.hide}`}>
        <div className={styles.container}>
          {/* Logo and Drawer */}
          <div style={{ height: "100%" }} className={styles.logo}>
            <div className={styles.burger} style={{ position: "relative" }}>
              {/* Drawer remains visible even when header is hidden */}
              <MotionFramerDrawer isScrolled={isScrolled} isOpen={isOpen} toggleOpen={toggleOpen} />
            </div>

            <a
              onClick={() => {
                Router.push('/');
              }}
              style={{ marginLeft: 40, marginTop: 40 }}
            >
              <img src={`/images/${isScrolled ? 'Black-Zyphalon-Logo.png' : 'zyfhalon-removebg-preview.png'}`} alt="Logo" />
            </a>
          </div>

          {/* Navigation */}
          <nav className={styles.nav}>
            <ul>
              <li><a href="#home" className={isScrolled ? styles.scrolledLink : ''}>Home</a></li>
              <li><a href="#about" className={isScrolled ? styles.scrolledLink : ''}>About</a></li>
              <li>
                <ServicesDropdown /> {/* Call the ServicesDropdown component */}
              </li>
              <li><a href="#contact" className={isScrolled ? styles.scrolledLink : ''}>Contact</a></li>
            </ul>
            <Button
              onClick={() => {
                Router.push('/Contact');
              }}
              style={{ margin: 10, color: isScrolled ? '#0D2D43' : 'white', border: isScrolled ? '2px solid #0D2D43' : '2px solid white' }}
            >
              Get in touch
            </Button>
          </nav>

        </div>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          position: 'fixed', // Fix the progress bar at the top
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Components.Header.CustomDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Components.Animations.ScrollProgressBar top={isVisible} />
      </div>
    </div>
  );
}
