'use client'; // Essential for accessing window/document
import { useEffect } from 'react';
import Shery from 'sheryjs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // If using scroll effects
import { debug } from 'console';

// Register ScrollTrigger if you use scroll-based effects
gsap.registerPlugin(ScrollTrigger);

const SheryEffects = () => {
  useEffect(() => {
    // Determine if code is running on client to avoid SSR errors
    if (typeof window !== 'undefined') {
      
    
Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
    Shery.imageEffect(".haha", {
  style: 5, 
  debug:true,
gooey:true,
   // Set to false when you are ready to deploy
   
});
      // Cleanup function (optional but recommended for single-page apps)
      return () => {
        // Remove mouse follower element if component unmounts
        const follower = document.querySelector('.mousefollower');
        if (follower) follower.remove();
      };
    }
  }, []);

  return null; // This component doesn't render UI, just effects
};

export default SheryEffects;