import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';


export default function Component() {
  
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

{/* Main content */}
<div className="flex flex-col w-full lg:w-3/4 bg-stone-200 relative"> {/* Adjust the background color and set position relative */}



  {/* Title */}
  <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Jay Fort</h1>

  {/* Image and text content container */}
  <div className="flex flex-col lg:flex-row"> {/* Apply flex-row on large screens */}

  <div className="lg:w-2/3">
            <Image 
              src="/home.gif" 
              alt="Hero" 
              width={500} // Specify the width
              height={300} // Specify the height
              layout="responsive" // This makes the image scale with the parent element
              className="px-8 mt-10" // Adjusted the margins and width for large screens
            />
          </div>
          

{/* Right side - Text content */}
<div className=" lg:w-1/2 lg:ml-32 mt-4 lg:mt-0 p-12"> {/* Add left padding and adjust margins on large screens */}
  <div className="flex-grow border-t border-black"></div>
  <p className="mt-4 text-xl hover:italic">
    I&apos;m a storyteller, designer, and developer. I&apos;m currently growing Barbercard, a SaaS product, and also offering my skills through the Build & Sell Web Studio. I studied Administration in Florianópolis, but the real-world experience came from running a family business. There, I honed my skills in leadership, problem-solving, process improvement, and sales. My childhood dream was to create movies, inspired by how well-told stories have moved people throughout history. Growing up, technology added a new dimension to this dream, fueling my belief in the transformative power of not just stories, but systems as well.
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
      Innovative development, and strategic marketing to create websites and web applications. Building digital presences and selling visions to the world.
    </p>
    <Link  className="underline mt-4 text-xl hover:italic" href="https://buildsellwebstudio.framer.website/" passHref target="_blank" rel="noopener noreferrer">
        Check more here →
    </Link>

  </div>
  <div className="w-full lg:w-1/3 p-8 ">
    <div className="flex mb-4 border-t border-black"></div>
    <h2 className="text-2xl font-bold hover:italic">Barbercard</h2>
    <div className="flex mt-4 mb-4 border-t border-black"></div>
    <p className="mt-4 text-xl">SaaS platform dedicated to enhancing client loyalty through WhatsApp marketing automation.</p>
    <p className="mt-4 text-xl">
      Making it easy and effective for barbershops to connect with their clients. Comprehensive CRM system, expertly designed to manage and grow your customer relationships.
    </p>
    <Link  className="underline mt-4 text-xl hover:italic" href="https://barbercardapp.vercel.app/" passHref target="_blank" rel="noopener noreferrer">
        Check more here →
    </Link>
  </div>
  <div className="w-full lg:w-1/3 p-8 ">
    <div className="flex mb-4 border-t border-black"></div>
    <h2 className="text-2xl font-bold hover:italic">Current role: Customer Success </h2>
    <div className="flex mt-4 mb-4 border-t border-black"></div>
    <p className="mt-4 text-xl">My current role at a startup company is in activation of medical clinics to sell more with the company Saas.</p>
    <p className="mt-4 text-xl">
    </p>

  </div>
</div>
</div>
</div>
  )
}

