

import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row items-center justify-between max-w-6xl w-full z-50">
      {/* 🔹 Logo outside the navbar */}
      <a href="https://prebuiltui.com">
       <h2 className='font-pop text-[40px] text-white'>SACROSYS</h2>
      </a>

      {/* 🔹 Centered Navbar */}
      <header className="flex items-center justify-between px-6 py-3 md:py-3 shadow max-w-5xl rounded-lg backdrop-blur-md bg-white/20 w-fit gap-4">
        <nav className="flex gap-8 text-white text-sm font-normal font-pop text-[16px]">
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
          <a
            className="hidden md:flex bg-[#00B597] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-cyan-400 transition"
            href="#"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
