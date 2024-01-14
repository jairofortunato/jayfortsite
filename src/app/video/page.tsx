import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';

export default function Component() {
  
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative"> {/* Removed w-full lg:w-3/4 to allow sidebar and main content to be side by side */}

 

        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Video</h1>

        {/* Image and text content container */}
        <div className="flex flex-col lg:flex-row">
          {/* Flex container for content */}
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 p-8 ">
            <div className="flex mb-4 border-t border-black"></div>
            <h2 className="text-2xl font-bold hover:italic">Pausa pro Pito Podcast</h2>
            <div className="flex mt-4 mb-4 border-t border-black"></div>
            <Link href="https://www.youtube.com/@pausapropito1329/streams" passHref target="_blank" rel="noopener noreferrer"> 
                <Image 
                  src="/pausa.png" 
                  alt="Hero" 
                  width={500} // Specify the width
                  height={300} // Specify the height
                  layout="responsive" // This makes the image scale with the parent element
                  className="w-full h-auto" // Adjusted the margins and width for large screens
                />
            </Link>
            <p className="mt-4 text-xl">
              Comedy and interviews with notable people of Criciúma city. Podcast founded with friends. We will return!
            </p>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
            <div className="flex mb-4 border-t border-black"></div>
            <h2 className="text-2xl font-bold hover:italic">Build & Sell</h2>
            <div className="flex mt-4 mb-4 border-t border-black"></div>
            <p className="mt-4 text-xl">Videos about creating and selling products</p>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
            <div className="flex mb-4 border-t border-black"></div>
            <h2 className="text-2xl font-bold hover:italic">Jay Fort</h2>
            <div className="flex mt-4 mb-4 border-t border-black"></div>
            <p className="mt-4 text-xl">Personal Videos</p>
          </div>
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
}
