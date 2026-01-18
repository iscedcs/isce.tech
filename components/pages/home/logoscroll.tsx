"use client"

import React, { useEffect, useRef } from 'react';

const SmoothLogoScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const logos = [
    "/images/fidelity-bank-nigeria-seeklogo.svg",
    "/images/airs 1.svg",
    "/images/netplus 1.svg",
    "/images/ariaria 1.svg",
    "/images/mi+ 1.svg",
    "/images/anambra 1.svg",
  ];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    
    // Calculate exact width
    const logoSize = 80; // h-20 = 80px
    const gap = 80; // gap-20 = 80px
    const itemsPerSet = logos.length;
    
    // Width of ONE set: (logoSize × items) + (gap × (items - 1))
    const totalWidth = (logoSize * itemsPerSet) + (gap * (itemsPerSet - 1));
    
    // Add padding: px-[2%] = 2% padding on each side
    const containerWidth = totalWidth; // Width to show one set
    
    container.style.width = `${containerWidth}px`;
    content.style.width = `${totalWidth * 2}px`; // Two sets for seamless loop

    let isPaused = false;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        // 60 pixels per second
        positionRef.current -= (60 * deltaTime) / 1000;
        
        // Reset when first set has completely scrolled out
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current = 0;
        }

        content.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden mt-14 opacity-90">
      <div 
        ref={containerRef}
        className="relative mx-auto overflow-visible "
      >
        <div 
          ref={contentRef}
          className="flex items-center whitespace-nowrap px-[2%]"
        >
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Company Logo"
              className="h-20 w-20 mr-20 gap-20 object-contain shrink-0 basis-[5rem] transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothLogoScroll;