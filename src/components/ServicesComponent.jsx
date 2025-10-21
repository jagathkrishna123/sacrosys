import React, { useState } from "react";
import Mapimg from "../assets/mapimg.jpg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";


// --- Data Structure for Services ---
const servicesData = [
  {
    id: 1,
    title: "Entreprise Service",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    subServices: [
      { name: "POS Softwares & Service", image: Mapimg },
      { name: "Design & Development", image: pic1 },
      { name: "CCTV & Networking", image: pic2 },
    ],
  },
  {
    id: 2,
    title: "Expertise Service",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet posuere consequat donec suspendisse lorem enim. Elit viverra nisl non nisl eleifend. Cursus erat mattis fames et mollis risus at.",
    subServices: [
      { name: "Web Hosting & Domain", image: pic3 },
      { name: "Custom Software", image: Mapimg },
      { name: "Cloud Solutions", image: pic4 },
    ],
  },
  {
    id: 3,
    title: "Process",
    description: "Details about our project process and methodology.",
    subServices: [
      { name: "Web Hosting & Domain", image: Mapimg },
      { name: "Custom Software", image: pic4 },
      { name: "Cloud Solutions", image: pic3 },
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Our full-cycle service for developing iOS and Android applications.",
    subServices: [
      { name: "Web Hosting & Domain", image: pic1 },
      { name: "Custom Software", image: pic2 },
      { name: "Cloud Solutions", image: pic4 },
    ],
  },
];

// --- Service Item Component (Now includes details rendering) ---
const ServiceItem = ({ service, isActive, onClick }) => {
  const hasDetails = service.subServices.length > 0;

  // Icon style changes for the active item
  const iconStyle = isActive
    ? "text-white rotate-45" // Active: Rotate the arrow/X
    : "text-purple-400   transition duration-300"; // Inactive: Standard arrow

  // Arrow/X icon (rotated for the active state)
  const arrowIcon = (
    <svg
      className={`w-9 h-9 transition-transform duration-300 ${
        isActive ? "rotate-45" : ""
      }`}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="49"
        height="49"
        rx="24.5"
        stroke="url(#paint0_linear_225_1169)"
      />
      <path
        d="M35.3121 25H15.3124"
        stroke="#9C9C9C"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M28.2375 32.075C28.2375 28.4379 31.4408 25 35.3127 25"
        stroke="#9C9C9C"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M28.2375 17.9248C28.2375 21.562 31.4408 24.9999 35.3127 24.9999"
        stroke="#9C9C9C"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear_225_1169"
          x1="47.2603"
          y1="-12.1212"
          x2="-10.9424"
          y2="-9.10044"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00F0FF" />
          <stop offset="0.482483" stopColor="#5200FF" />
          <stop offset="1" stopColor="#FF2DF7" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="group">
      {/* 1. Header (Clickable List Item) */}
      <div
        className={`cursor-pointer py-4`}
        onClick={() => onClick(service.id)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span
              className={`text-[22px] md:text-[28px] font-rale font-normal ${
                isActive ? "text-[#FFFFFF]" : "text-[#FFFFFF]"
              }`}
            >
              {service.id.toString().padStart(2, "0")}
            </span>
            <h3
              className="text-[22px] md:text-[28px] font-rale font-normal bg-clip-text text-transparent transition duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(96.45deg, #FFFFFF 10.29%, rgba(255, 255, 255, 0) 145.86%)",
              }}
            >
              {service.title}
            </h3>
          </div>

          {/* Arrow/X icon */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${iconStyle}`}
          >
            {arrowIcon}
          </div>
        </div>

        {/* Gradient Line Separator */}
        <div
          className={`mt-4 h-0.5 w-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] ${
            isActive ? "opacity-100" : "opacity-50"
          } transition-opacity duration-300`}
        ></div>
      </div>

      {/* 2. Details Section (Conditional Rendering) */}
      {isActive && hasDetails && (
        <div className="pl-16 pt-4 pb-8 space-y-6 transition-all duration-500 ease-in-out">
          {/* Description Text */}
          <div className="border-l-4 border-purple-600 pl-6">
            <p className="text-sm md:text-lg text-gray-400 max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Sub-Services Images and Text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.subServices.slice(0, 3).map((sub, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group shadow-lg"
              >
                {/* Image Placeholder */}
                <div className="w-full h-40 relative overflow-hidden">
                  <img
                    src={sub.image} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 z-0"></div>
                </div>
                <div className="absolute inset-0  bg-opacity-60 flex items-center p-4 transition duration-300 group-hover:bg-opacity-40">
                  <p className="text-[18px] font-medium font-rale  text-slate-200">{sub.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Services Component ---
const ServicesComponent = () => {
  // State to track the currently active service ID. Default to 2 to match the image.
  const [activeServiceId, setActiveServiceId] = useState(2);

  // Handle click: if the same item is clicked, close it (set to null/0). Otherwise, set the new ID.
  const handleItemClick = (id) => {
    setActiveServiceId(activeServiceId === id ? null : id);
  };

  return (
    <div className=" text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <p className="text-center text-[#9C9C9C] uppercase tracking-widest text-[14px] md:text-[18px] font-radio mb-2">
          Our Services
        </p>
        <h2 className="text-center text-[22px] sm:text-[28px] font-normal mb-12 leading-tight font-radio">
          Your Aspiration, Our Expertise: Tailored Services for Unmatched
          Excellence.
        </h2>

        {/* Services List */}
        <div className="space-y-0">
          {" "}
          {/* Adjusted spacing for better accordion look */}
          {servicesData.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isActive={service.id === activeServiceId}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
