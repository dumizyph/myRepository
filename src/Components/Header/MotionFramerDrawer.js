import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styles from './CustomDrawer.module.css'; // Separate CSS for the drawer
import { Button, Divider } from "@mui/material";
import { useRouter } from "next/navigation";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};



const Path = (props) => (
     <motion.path
       fill="transparent"
       strokeWidth="3"
       strokeLinecap="round"
       {...props}
     />
   );
   
   const MenuToggle = ({ toggle, isScrolled, isOpen }) => (
     <button
       onClick={toggle}
       style={{
         outline: "none",
         border: "none",
         cursor: "pointer",
         position: "absolute",
         color: isScrolled ? "black" : isOpen ? "black" : "white",
         top: 18,
         left: 15,
         width: 50,
         height: 50,
         borderRadius: "50%",
         background: "transparent",  // Ensures transparent background
         zIndex: 2,
         pointerEvents: "auto", // Ensures the toggle button is interactable
         padding: 0, // Removes any padding
       }}
     >
       <svg width="20" height="20" viewBox="0 0 23 23">
         {/* First Path (Top Line) */}
         <Path
           initial={{ d: "M 2 2.5 L 20 2.5", opacity: 1 }} // Ensure it's visible initially
           animate={{
             stroke: isScrolled ? "black" : isOpen ? "black" : "white", // Animate stroke color based on isScrolled and isOpen
           }}
           transition={{
             stroke: {
               duration: 0.5,
               delay: isOpen ? 0 : 1.5, // Increased delay when closing (black to white)
               ease: "easeInOut",
             },
           }}
           variants={{
             closed: { d: "M 2 2.5 L 20 2.5" },
             open: { d: "M 3 16.5 L 17 2.5" },
           }}
         />
   
         {/* Second Path (Middle Line) */}
         <Path
           initial={{ opacity: 1 }} // Ensure it's visible on page load
           animate={{
             stroke: isScrolled ? "black" : isOpen ? "black" : "white", // Path color changes based on isScrolled and isOpen
             opacity: isOpen ? 0 : 1, // Make it disappear when open and reappear when closed
           }}
           transition={{
             stroke: { duration: 0.5, delay: isOpen ? 0 : 1.5, ease: "easeInOut" }, // Increased delay for stroke color change
             opacity: { duration: 0.3, delay: isOpen ? 0 : 1 }, // Slightly increased delay for opacity when closing
           }}
           d="M 2 9.423 L 20 9.423"
         />
   
         {/* Third Path (Bottom Line) */}
         <Path
           initial={{ d: "M 2 16.346 L 20 16.346", opacity: 1 }} // Ensure it's visible initially
           animate={{
             stroke: isScrolled ? "black" : isOpen ? "black" : "white", // Animate stroke color based on isScrolled and isOpen
           }}
           transition={{
             stroke: {
               duration: 0.5,
               delay: isOpen ? 0 : 1.5, // Increased delay when closing (black to white)
               ease: "easeInOut",
             },
           }}
           variants={{
             closed: { d: "M 2 16.346 L 20 16.346" },
             open: { d: "M 3 2.5 L 17 16.346" },
           }}
         />
       </svg>
     </button>
   );


   

const MenuItem = ({ i, isOpen, values }) => {
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        pointerEvents: isOpen ? "auto" : "none",
        width: "100%",
      }}
      className={styles.drawerItem}
    >
      {values}
    </motion.li>
  );
};

const Navigation = ({ isOpen }) => {
  const itemIds = ["Home", "About", "Service", "Contact"];
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.ul
      variants={navVariants}
      style={{
        padding: "25px",
        position: "absolute",
        top: "100px",
        width: "100%",
        margin: 0,
        zIndex: 1,
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      {itemIds.map((values, i) => (
        <>
          <MenuItem i={i} key={i} values={values} isOpen={isOpen} />
          {isOpen?<Divider style={{width:"100%"}} />:""}

        </>
      ))}
    </motion.ul>
  );
};

const MotionFramerDrawer = ({ isOpen, toggleOpen,isScrolled }) => {
     const Router=useRouter()

  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "400px",
        height: "100vh",
        zIndex: 1,
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <motion.div
        variants={sidebarVariants}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          background: "white",
          zIndex: 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        animate={{
          backgroundColor: isOpen ? "white" : "transparent",
        }}
        transition={{
          backgroundColor: {
            delay: isOpen ? 0 : 1.8,
            duration: 1.8,
            ease: "easeInOut",
          },
        }}
      >
      <motion.div
  initial={{ opacity: 0 }} // Start hidden
  animate={{
    opacity: isOpen ? 1 : 0, // Fade in or out based on isOpen
  }}
  transition={{
    duration: 0.5, // Duration of the animation
    ease: "easeInOut", // Smooth transition
  }}
  style={{
    display: "flex", // Keep the original flex display
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 65,
    marginRight: 30,
    width: "100%",
    paddingRight: 20,
  }}
>
 
    <img onClick={()=>{

toggleOpen(false)
Router.push("/")
    }} style={{width:"auto",height:34}} src="/images/Black-Zyphalon-Logo.png" alt="Logo" />
  
</motion.div>
      </motion.div>

      <Navigation isOpen={isOpen} />

      {/* Add "Get in Touch" Button with animation */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 50, // Slide in/out vertically
        }}
        transition={{
     
          x: {
            delay: isOpen ? 0 : 1.5,
            duration: 0.5,
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "90%",
            backgroundColor: "#0D2D43",
            color: "white",
          }}
          onClick={()=>{
            
               toggleOpen(false)
               Router.push("/Contact")
             }}
        >
          Get in Touch
        </Button>
      </motion.div>

      <MenuToggle isOpen={isOpen} isScrolled={isScrolled} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MotionFramerDrawer;
