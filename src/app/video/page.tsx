import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function Component() {
  
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
    <Sidebar />

    {/* Main content */}
{/* Main content */}
<div className="flex flex-col w-full lg:w-3/4 bg-stone-200 relative"> {/* Adjust the background color and set position relative */}

  {/* Language switcher */}
  <div className="absolute right-0 top-0 px-24 py-4 text-xl"> {/* Use absolute positioning */}
    PT / EN
  </div>

  {/* Title */}
  <h1 className="p-4 text-6xl font-medium mt-24">Video</h1> {/* Keep the title at the top */}

  {/* Image and text content container */}
  <div className="flex flex-col lg:flex-row"> {/* Apply flex-row on large screens */}

   

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
  )
}

