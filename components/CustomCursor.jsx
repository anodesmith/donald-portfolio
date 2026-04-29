'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      if (e.target.closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-[#00ff9f] pointer-events-none z-[9999] hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%',
        y: '-50%',
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? 'rgba(0, 255, 159, 0.1)' : 'transparent',
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#00ff9f]"></div>
    </motion.div>
  );
};

export default CustomCursor;
