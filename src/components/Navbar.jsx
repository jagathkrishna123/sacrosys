import React, { useEffect, useState } from 'react';
import LogoTitle from './LogoTitle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      {/* Navbar Container */}
      {/* <div className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row items-center justify-between max-w-6xl w-full z-50 px-4 sm:px-0"> */}
      <div className="fixed top-6 left-0 right-0 flex flex-row items-center justify-between max-w-7xl mx-auto w-full z-50 px-4 sm:px-0">

        {/* Logo */}
        <a href="">
          <LogoTitle />
        </a>

        <button className={`md:hidden flex items-center text-white z-[60] transition-all duration-500
          ${scrolled ? 'backdrop-blur-md bg-white/20 px-4 py-2 rounded-lg' : ''}`}
          onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>


        {/*........................ Desktop.................... */}
        <header className="hidden md:flex items-center justify-between px-6 py-3 shadow max-w-6xl  rounded-lg backdrop-blur-md bg-white/20 w-fit gap-4">
          <nav className="flex flex-row gap-8 text-white text-sm font-normal font-pop text-[16px]">
            <a className="hover:text-gray-100 transition transform duration-500" href="#">
              Products
            </a>
            <a className="hover:text-gray-100 transition transform duration-500" href="#">
              Service
            </a>
            <a className="hover:text-gray-100 transition transform duration-500" href="#">
              About
            </a>
            <a className="hover:text-gray-100 transition transform duration-500" href="#">
              Help
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a className="bg-[#00B597] text-white px-5 py-3 rounded-lg text-sm font-medium font-pop hover:bg-cyan-400 transition text-center"
              href="#">
              Contact
            </a>
          </div>
        </header>
      </div>

      {/* .................. MOBILE SIDEBAR .................... */}
<div
  className={`fixed inset-0 z-50 bg-white/5 backdrop-blur-none transition-opacity duration-500 ease-in-out rounded-md ${
    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}
  onClick={() => setIsOpen(false)}></div>

{/* Sidebar......................... */}
<div
  className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#185751] backdrop-blur-md shadow-2xl z-[55] transform transition-transform duration-500 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
  <div className="flex flex-col items-start p-6 text-white h-full">
    <button
      onClick={() => setIsOpen(false)}
      className="self-end text-3xl mb-6">
      &times;
    </button>

    <nav className="flex flex-col gap-6 text-lg font-pop">
      <a className="hover:text-gray-200 transition" href="#">
        Products
      </a>
      <a className="hover:text-gray-200 transition" href="#">
        Service
      </a>
      <a className="hover:text-gray-200 transition" href="#">
        About
      </a>
      <a className="hover:text-gray-200 transition" href="#">
        Help
      </a>
      <a className="hover:text-gray-200 transition" href="#">
        Contact
      </a>
      {/* <a
              className="bg-[#00B597] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-cyan-400 transition text-center"
              href="#"
            >
              Contact
            </a> */}
    </nav>

    {/* <div className="mt-auto w-full">
      <a className="block bg-cyan-800 text-white text-center px-5 py-3 rounded-lg font-medium font-pop hover:bg-cyan-400 transition"
        href="#">
        contact
      </a>
    </div> */}
  </div>
</div>

    </>
  );
};

export default Navbar;
