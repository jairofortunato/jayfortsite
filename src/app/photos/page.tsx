import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative">

 

        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16"></h1>
        <div className='px-5'>
          {/* Photo Rows */}
          {[...Array(3)].map((_, rowIndex) => ( // Create three rows
            <div key={rowIndex} className="flex flex-wrap -mx-2 mb-4">
              {[...Array(3)].map((_, colIndex) => ( // Create three columns in each row
                <div key={colIndex} className="w-full md:w-1/3 p-2">
                  <Image 
                    src="/photos.gif" 
                    alt="Gallery" 
                    className="w-full h-auto rounded" 
                    layout="responsive" 
                    width={500} // Specify the width
                    height={300} // Specify the height
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Additional content, if needed */}
        {/* ... */}
      </div>
    </div>
  );
}
