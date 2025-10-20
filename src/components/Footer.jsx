import React from 'react'

const linkSections = [
    {
        title: "About us",
        links: ["About WebTech", "Mission & Values", "Our Team", "Careers", "Blogs"]
    },
    {
        title: "Services",
        links: ["Software Development", "IT consulting", "Web Design", "Digital Transformation", "Project Management"]
    },
    {
        title: "Solutions",
        links: ["Industry Solutions", "Custom Solutions", "Case Studies", "Client Success", "Testimonials"]
    },
    {
        title: "Contact us",
        links: ["Get in Touch", "Support", "Sales", "Locations","Contact Form"]
    }
];

const Footer = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-6xl mx-auto py-10 border-b border-gray-500/30 text-gray-500">
                <div className="flex flex-wrap justify-between gap-10">
                    {linkSections.map((section, index) => (
                        <div key={index} className="flex-1 min-w-[150px]">
                            <h3 className="font-semibold text-base text-gray-300 mb-4">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center text-sm md:text-base text-gray-500/80 mt-6">
                Copyright © 2025-26 Sacrosys Technologies | All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer
