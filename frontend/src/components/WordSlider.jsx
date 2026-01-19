import { useState, useEffect } from 'react';

const words = ['Learn', 'Discover', 'Grow', 'Lead', 'Innovate', 'Excel', 'Achieve', 'Succeed'];

export const WordSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 600);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block min-w-[200px] text-left transition-all duration-400 ${
        isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      {words[currentIndex]}
    </span>
  );
};