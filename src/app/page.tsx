import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

{/* Main content */}
<div className="flex flex-col w-full lg:w-3/4 bg-stone-200 relative"> {/* Adjust the background color and set position relative */}

  {/* Language switcher */}
  <div className="absolute right-0 top-0 px-24 py-4 text-xl"> {/* Use absolute positioning */}
    PT / EN
  </div>

  {/* Title */}
  <h1 className="p-4 text-6xl font-medium mt-24">Jay Fort</h1> {/* Keep the title at the top */}

  {/* Image and text content container */}
  <div className="flex flex-col lg:flex-row"> {/* Apply flex-row on large screens */}

    {/* Left side - Image */}
    <div className="lg:w-1/2 p-4 mr-38"> {/* Adjust width to take up half the space on large screens and add padding */}
      <img
        alt="Open Office"
        className="mt-4"
        src="/hero.gif" // Assuming the image is responsive and fills its container
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Right side - Text content */}
    <div className=" lg:w-1/2 ml-32 mt-4 lg:mt-0 p-12"> {/* Add left padding and adjust margins on large screens */}
      <div className="flex-grow border-t border-black"></div>
      <p className="mt-4 text-xl hover:italic">
      I'm storyteller, designer and developer. I'm currently growing Barbercard, a SaaS product
    and also offering my skills through the Build & Sell Web Studio.
      I studied Administration in Florianópolis but the real world experience came from running a family business.
      There, I honed my skills in leadership, problem-solving, process improvement and sales.
      My childhood dream was to create movies,  inspired by how well-told stories have moved people throughout history. Growing up, technology added a new dimension to this dream, fueling my belief in the transformative power of not just stories, but systems as well. 
      </p>
    </div>
  </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 p-8 ">

          <div className="flex mb-4 border-t border-black"></div>
            <h2 className="text-2xl font-bold hover:italic">Build & Sell</h2>
          <div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">Specialize in crafting bespoke digital solutions that bring your ideas to life.</p>
            <p className="mt-4 text-xl">
              Innovative development, and strategic marketing to create websites and web applications.  Building digital presences and selling visions to the world.
           
            </p>
            <a className="underline mt-4 text-xl hover:italic" href="#">
                Read more here →
              </a>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
          <div className="flex mb-4 border-t border-black"></div>

            <h2 className="text-2xl font-bold hover:italic">Barbercard</h2>
          <div className="flex mt-4 mb-4 border-t border-black"></div>
          <p className="mt-4 text-xl">           SaaS platform dedicated to enhancing client loyalty through WhatsApp marketing automation.
</p>

            <p className="mt-4 text-xl">
            Making barbershops to connect with their clients easy and effective. Comprehensive CRM system, expertly designed to manage and grow your customer relationships.
            </p>
            <a className="underline mt-4 text-xl hover:italic" href="#">
              Read more here →
            </a>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
          <div className="flex mb-4 border-t border-black"></div>

<h2 className="text-2xl font-bold hover:italic">Data Analysis</h2>
<div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">My current role at a corporate company is in interpreting and analyzing data to drive business solutions.</p>
            <p className="mt-4 text-xl">
              Transforming raw data into meaningful insights that inform strategic decision-making.
           
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

