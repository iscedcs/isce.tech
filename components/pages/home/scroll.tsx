"use client"

import React, { useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
}

interface SmoothScrollProps {
  testimonials: Testimonial[];
  speed?: number; // pixels per second
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({
  testimonials,
  speed = 50
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const gap = 24; // gap-6 = 24px

    // Get width of ONE testimonial
    const firstItem = content.children[0] as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const itemsPerSet = testimonials.length;

    // Calculate width of ONE set (not two!)
    const totalWidth = (itemWidth * itemsPerSet) + (gap * (itemsPerSet - 1));

    // Container should be wide enough for TWO sets (for seamless loop)
    container.style.width = `${totalWidth * 2}px`;

    // Content should be wide enough for TWO sets
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

    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials, speed]);

  return (
    <div className="mt-10 overflow-hidden">
      <div
        ref={containerRef}
        className="relative overflow-visible"
      >
        <div
          ref={contentRef}
          className="flex"
        >
          {/* Render TWO sets */}
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="relative mr-6 gap-6 bg-gradient-to-r from-[#0E1622] to-[#0B111A] 
                border border-[#1F2937] rounded-xl pb-10 shadow-sm
                w-[360px] flex-shrink-0 hover:scale-150" // Changed from min-w to w for consistent width
            >
              <div className='flex-none basis-[5rem]'>
                <div className="flex items-start gap-4 p-3 py-5">
                  <div className="w-20 h-20 bg-[#8C8C8C] rounded-full shrink-0"></div>
                  <p className="text-[#D9D9D9] text-[11px] leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

                <div className="absolute left-0 h-px w-80 mx-6 bg-[#D9D9D9] top-[130px]"></div>

                <div className="flex justify-between absolute left-6 top-[140px] items-center text-[12px] pl-3 text-white">
                  <p>
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[#8C8C8C]"> / {item.role}</span>
                  </p>

                  <div className="flex gap-1 pr-1 absolute -right-30">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, index) => (
                        <span
                          key={index}
                          className="text-[#325239] text-[12px]"
                        >
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothScroll;
