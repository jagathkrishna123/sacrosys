import React, { useState, useEffect } from 'react';

const LogoTitle = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <h2
      className={`font-pop text-[24px] md:text-[40px] text-white transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-white/20 px-4 py-1 rounded-lg w-fit' : ''
      }`}
    >
      SACROSYS
    </h2>
  );
};

export default LogoTitle;
