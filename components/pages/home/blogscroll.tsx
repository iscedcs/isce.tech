"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface BlogItem {
  id: number;
  image: string;
  post_title: string;
  post: string;
  date: string;
}

interface SmoothBlogScrollProps {
  blog: BlogItem[];
  speed?: number; // pixels per second
  cardWidth?: number; // Optional fixed card width
}

const SmoothBlogScroll: React.FC<SmoothBlogScrollProps> = ({ 
  blog, 
  speed = 40, // Slightly slower for blog cards
  cardWidth = 300 // matches min-w-[300px]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || blog.length === 0) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const gap = 24; // gap-6 = 24px

    const itemsPerSet = blog.length;
    
    // Calculate width of ONE set of blog cards
    const totalWidth = (cardWidth * itemsPerSet) + (gap * (itemsPerSet - 1));

    // Set widths for container and content
    container.style.width = `${totalWidth}px`;
    content.style.width = `${totalWidth * 2}px`;

    let isPaused = false;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        positionRef.current -= (speed * deltaTime) / 1000;
        
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
  }, [blog, speed, cardWidth]);

  return (
    <div className="overflow-hidden py-8">
      <div 
        ref={containerRef}
        className="relative mx-auto overflow-visible"
      >
        <div 
          ref={contentRef}
          className="flex"
          style={{ gap: '24px' }}
        >
          {/* Render TWO sets of blog cards */}
          {[...blog, ...blog].map((item, idx) => (
            <article
              key={idx}
              className="relative pb-12 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              {/* Top Image */}
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.post_title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category + Date */}
                <div className="flex gap-10 items-center justify-left text-xs text-[#404040] mb-3">
                  <span className="text-[#325239] rounded-full text-[11px] font-medium">
                    {item.post}
                  </span>
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] md:text-base font-semibold text-gray-900 leading-snug mb-6">
                  {item.post_title}
                </h3>

                {/* Button row */}
                <div className="absolute left-5 top-110 flex justify-start items-center">
                  <Link href={`/blog/${item.id}`}>
                    <button
                      aria-label="read more"
                      className="w-8 h-8 rounded-full border border-[#8C8C8C] bg-white flex items-center justify-center text-[#000000] hover:bg-gray-100 shadow-sm">
                      +
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothBlogScroll;