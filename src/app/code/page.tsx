import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative"> {/* Removed w-full lg:w-3/4 to allow sidebar and main content to be side by side */}

        {/* Language switcher */}
        <div className="absolute right-0 top-0 px-6 py-4 text-xl">
          NO / EN
        </div>

        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Code AI Assisted</h1>

        {/* Hero Image and Right-side div container */}
        <div className="flex flex-col lg:flex-row"> {/* This will contain both the image and the right-side div */}
          
          {/* Hero Image */}
          <div className="lg:w-2/3">
          <img src="/hero.gif" alt="Hero" className="w-full h-auto px-8" /> {/* Adjusted the margins and width for large screens */}
          </div>

          {/* Right-side div (empty for now) */}
          <div className="lg:block lg:w-1/3 p-4 px-8 text-xl"> {/* Adjusted the background and padding for styling */}
            {/* Content goes here */}
            dekofjcaDIOfjADIOfjA
          </div>
        </div>

        {/* Text content below the image */}
        <div className="px-3 lg:px-6 py-6">
          <p>
            "Bergen Assembly is a perennial model for art production structured around public events that take place in the city of Bergen every three years. Each edition is..."
          </p>
        </div>

      </div>
    </div>
  );
}
