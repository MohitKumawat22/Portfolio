'use client'; // Essential for accessing window/document
import { useEffect } from 'react';
import Shery from 'sheryjs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // If using scroll effects

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
    Shery.imageEffect(".harshu", {
  style: 6, 

   // Set to false when you are ready to deploy
   
  config: {
    noiseDetail: { value: 0, range: [0, 100] },
    distortionAmount: { value: 5.8, range: [0, 10] },
    scale: { value: 0, range: [0, 100] },
    speed: { value: 1, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.105263052224458 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1.21, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.08, range: [0, 2] }, 
    discard_threshold: { value: 0.67, range: [0, 1] },
    antialias_threshold: { value: 0.1, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] }
  },
  preset: "./presets/wigglewobble.json"
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