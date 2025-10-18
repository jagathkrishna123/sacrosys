

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex flex-row fixed top-0 left-0 w-full items-center justify-center'>
//         <a href="https://prebuiltui.com">
//         <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg" alt="Prebuilt UI Logo" />
//       </a>
//     <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white">
//       {/* <a href="https://prebuiltui.com">
//         <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg" alt="Prebuilt UI Logo" />
//       </a> */}
//       <nav
//         id="menu"
//         className="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal"
//       >
//         <a className="hover:text-indigo-600" href="#">
//           Products
//         </a>
//         <a className="hover:text-indigo-600" href="#">
//           Customer Stories
//         </a>
//         <a className="hover:text-indigo-600" href="#">
//           Pricing
//         </a>
//         <a className="hover:text-indigo-600" href="#">
//           Docs
//         </a>
//         <button id="closeMenu" className="md:hidden text-gray-600">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </nav>
//       <div className="flex items-center space-x-4">
        
//         <a
//           className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
//           href="#"
//         >
//           Sign up
//         </a>
       
//       </div>
//     </header>
//     </div>
//   )
// }

// export default Navbar


// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row items-center justify-center">
//       {/* 🔹 Logo outside the navbar */}
//       <a href="https://prebuiltui.com" className="mb-2">
//         <img
//           src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
//           alt="Prebuilt UI Logo"
//           className="h-10"
//         />
//       </a>

//       {/* 🔹 Centered Navbar */}
//       <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full bg-white w-full mx-auto">
//         <nav className="flex gap-8 text-gray-900 text-sm font-normal">
//           <a className="hover:text-indigo-600" href="#">
//             Products
//           </a>
//           <a className="hover:text-indigo-600" href="#">
//             Customer Stories
//           </a>
//           <a className="hover:text-indigo-600" href="#">
//             Pricing
//           </a>
//           <a className="hover:text-indigo-600" href="#">
//             Docs
//           </a>
//         </nav>

//         <div className="flex items-center space-x-4">
//           <a
//             className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
//             href="#"
//           >
//             Sign up
//           </a>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Navbar


import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row items-center justify-between max-w-5xl w-full">
      {/* 🔹 Logo outside the navbar */}
      <a href="https://prebuiltui.com">
       <h2 className='font-pop text-[40px] text-white'>SACROSYS</h2>
      </a>

      {/* 🔹 Centered Navbar */}
      <header className="flex items-center justify-between px-6 py-3 md:py-3 shadow max-w-5xl rounded-lg backdrop-blur-md bg-white/20 w-fit gap-4">
        <nav className="flex gap-8 text-white text-sm font-normal">
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
