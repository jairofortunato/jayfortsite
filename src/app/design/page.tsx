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
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Design</h1>

        {/* Hero Image and Right-side div container */}
        <div className="flex flex-col lg:flex-row"> {/* This will contain both the image and the right-side div */}
          
          {/* Hero Image */}
          <div className="lg:w-2/3">
            <img src="/hero.gif" alt="Hero" className="w-full h-auto px-8" /> {/* Adjusted the margins and width for large screens */}
          </div>

          {/* Right-side div (empty for now) */}
          <div className="lg:block lg:w-1/3 p-4 px-8 text-xl"> {/* Adjusted the background and padding for styling */}
            {/* Content goes here */}
            I exercise design by designing digital products as sites and apps. 

Creation is something sacred and Resistance is the enemy . The battle is inside our own heads . We have a right only to our labor , not to the fruits of our labor . All the warrior can give is his life ; Because the most important thing about art is to work . Nothing else matters except sitting down every day and trying . Just as Resistance has its seat in hell , so Creation has its home in heaven .          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 p-8 ">

          <div className="flex mb-4 border-t border-black"></div>
            <h2 className="text-2xl font-bold hover:italic">Build & Sell</h2>
          <div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">Bergen Assembly’s offices function as both a public work- and event space.</p>
            <p className="mt-4 text-xl">
              Are you or your group interested in using our office?
           
            </p>
            <a className="underline mt-4 text-xl hover:italic" href="#">
                Read more here →
              </a>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
          <div className="flex mb-4 border-t border-black"></div>

            <h2 className="text-2xl font-bold hover:italic">Barbercard</h2>
          <div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">
              La Cantina de la Touriste is a permanent installation by the artist Sol Calero that reimagines the
              interior of Kafé Mat & prat. The installation was made as part of the fourth edition of Bergen Assembly,
              Yasmine and the Seven Sides of the Hepathedron, in 2022.
            </p>
            <a className="underline mt-4 text-xl hover:italic" href="#">
              Read more here →
            </a>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
          <div className="flex mb-4 border-t border-black"></div>

<h2 className="text-2xl font-bold hover:italic">Data Analysis</h2>
<div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">Bergen Assembly’s offices function as both a public work- and event space.</p>
            <p className="mt-4 text-xl">
              Are you or your group interested in using our office?
           
            </p>
            <a className="underline mt-4 text-xl hover:italic" href="#">
                Read more here →
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
