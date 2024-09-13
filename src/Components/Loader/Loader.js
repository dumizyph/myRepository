import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // Track pathname
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(false); // Loader state
  const router = useRouter(); // App Router hook
  const pathname = usePathname(); // Track current pathname

  useEffect(() => {
    // Show the loader when the pathname changes (route change detected)
    const handleRouteChangeStart = () => {
      setLoading(true); // Set loading to true when the route change starts
    };

    // Hide the loader after route change is complete
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after a longer delay to show the loader for more time
      }, 3000); // Increased delay to 3 seconds
    };

    // Trigger loader on route change start
    handleRouteChangeStart();

    // Simulate the route change completion after 4 seconds
    const timer = setTimeout(() => {
      handleRouteChangeComplete();
    }, 4000); // Adjust this delay to 4 seconds to keep the loader visible longer

    return () => clearTimeout(timer); // Cleanup the timer to avoid memory leaks
  }, [pathname]); // Re-run this effect whenever the pathname changes

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }} // Loader starts fully visible
            animate={{ opacity: 0 }}  // Animate to transparent
            exit={{ opacity: 0 }}     // Ensures loader fades out before exit
            transition={{
              duration: 3, // Increased duration for fade-out to make the loader stay longer
              ease: [0.42, 0, 0.58, 1], // Smooth easing with gradual curve
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <img
              src="/videos/Zyphalontest.gif"
              alt="Loading..."
              style={{
                width: "50%",
                maxWidth: "400px",
                height: "auto",
                maxHeight: "80vh",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }} // Content starts hidden with opacity
        animate={{ opacity: 1 }} // Animate to fully visible
        transition={{
          duration: 2.5,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        {children} {/* The children (child component) will be rendered here */}
      </motion.div>
    </>
  );
};

export default Loader;
