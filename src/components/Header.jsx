import React from 'react'
import SwipeToSwitch from './SwipeToSwitch'

const Header = () => {
  return (
     <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
        {/* <p className='bg-gray-200 bg-opacity-50 px-4 py-1.5 rounded-full mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base'>Unparalleled luxuary and comfort await at the world's most exclusive hotels and resorts. <br /> Start your journey today </p> */}
        <div className='max-w-6xl w-full p-2'>
            <div className='max-w-2xl font-bold text-[40px] font-pop flex flex-col'>
                <div className='mb-4'>
                    <p className='text-[#08F7C3]'><span className='bg-gradient-to-r from-[#F9F9F9] to-[#05915B] bg-clip-text text-transparent'>Comprehensive </span>CCTV And</p>
                    <p className='text-[#08F7C3]'>Network Solutions Tailored for</p>
                    <p className='bg-gradient-to-r from-white to-[#08F7c3] bg-clip-text text-transparent'>Every Organization</p>
                </div>
                <div className='text-[16px] font-normal font-pop'>
                    <p>The top CCTV and networking solutions in Dubai are essential for any business owner to consider for their security.</p>
                </div>
                <hr className="h-[2px] border-0 bg-gradient-to-r from-[#08F7c3] to-[#05915B] my-1" />

            </div>
            

        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
  <SwipeToSwitch />
</div>

    </div>
  )
}

export default Header