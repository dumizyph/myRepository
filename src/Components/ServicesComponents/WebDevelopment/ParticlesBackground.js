import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const StarryBackgroundWithContent = ({ children }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create the scene, camera, and renderer for the background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Starry background setup
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starVertices = [];
    
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }
    
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    camera.position.z = 1;

    // Animate the stars (rotation)
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Wrapper styles for background and content
  const wrapperStyle = {
    position: "relative", // Ensure content stays relative to this div
    width: "100vw", // Full viewport width
    height: "100vh", // Full viewport height
    display: "flex", // Flexbox to center content
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Prevent content overflow
  };

  const contentStyle = {
    position: "absolute", // Ensure content stays above the background
    zIndex: 10, // Content above the background (higher z-index)
//     padding: "20px",
//     backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for content
//     borderRadius: "10px", // Rounded corners for content
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Light shadow effect
//     textAlign: "center", // Center text
  };

  return (
    <div style={wrapperStyle}>
      {/* This div is the container for the background */}
      <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></div>
      
      {/* This is the content that will overlay on top of the background */}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default StarryBackgroundWithContent;
