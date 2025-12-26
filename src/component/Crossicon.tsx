'use client';

import type { Variants } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { usePathname } from 'next/navigation'; // 1. Hook import karein

import { cn } from '@/lib/utils';

export interface MenuIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const LINE_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },
  animate: (custom: number) => ({
    rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
    y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
    opacity: custom === 2 ? 0 : 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  }),
};

const MenuIcon = forwardRef<MenuIconHandle, MenuIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);
    
    // 2. Current Pathname nikalein
    const pathname = usePathname(); 

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal'),
      };
    });

    // 3. Route change hone par animation trigger karein
    useEffect(() => {
      if (pathname === '/context') {
        controls.start('animate'); // Cross ban jayega
      } else {
        controls.start('normal'); // Wapas lines ban jayega
      }
    }, [pathname, controls]);

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        // Agar route controlled hai, to hover effect disable kar sakte hain
        // ya logic adjust kar sakte hain. Filhal main ise route pe depend rakh raha hu.
        if (!isControlledRef.current && pathname !== '/context') {
             // Optional: Sirf tab animate kare jab /context par NA ho
             // controls.start('animate'); 
        } 
        
        onMouseEnter?.(e);
      },
      [controls, onMouseEnter, pathname]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current && pathname !== '/context') {
           // controls.start('normal');
        } 
        
        onMouseLeave?.(e);
      },
      [controls, onMouseLeave, pathname]
    );

    return (
      <div
        className={cn(className, "cursor-pointer")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            variants={LINE_VARIANTS}
            animate={controls}
            custom={1}
          />
          <motion.line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            variants={LINE_VARIANTS}
            animate={controls}
            custom={2}
          />
          <motion.line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            variants={LINE_VARIANTS}
            animate={controls}
            custom={3}
          />
        </svg>
      </div>
    );
  }
);

MenuIcon.displayName = 'MenuIcon';

export { MenuIcon };