import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {

  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative"> {/* Removed w-full lg:w-3/4 to allow sidebar and main content to be side by side */}


        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Design</h1>

            {/* Hero Image and Right-side div container */}
            <div className="flex flex-col lg:flex-row">
          
          {/* Hero Image */}
          <div className="lg:w-2/3">
            <Image 
              src="/codegif.gif" 
              alt="Hero" 
              width={300} // Specify the width
              height={300} // Specify the height
              layout="responsive" // This makes the image scale with the parent element
              className="px-8" // Adjusted the margins and width for large screens
            />
          </div>
          
       {/* Right-side div (empty for now) */}
<div className="lg:block lg:w-1/3 px-4 text-xl">
I exercise design by designing digital products such as sites and apps. Creation is something sacred, and Resistance is the enemy. The battle is inside our own heads. We have a right only to our labor, not to the fruits of our labor. All the warrior can give is his life, because the most important thing about art is to work. Nothing else matters except sitting down every day and trying. Just as Resistance has its seat in hell, so Creation has its home in heaven.
</div>
</div>


{/* Blog Content */}
<div className=" py-8 lg:mr-80">
  {/* Articles */}
  {/* First Article */}
  <div className="text-xl mb-4 space-y-8 px-4 lg:px-8 mt-8">
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Barbercard</h2>
    <p className="text-xl mb-4">
      So, this whole thing started when a buddy threw me a restaurant loyalty card and dared me to make it an app. I ditched my plan for a life progress visualization and jumped in.
      First up, inspiration from Duolingo&apos;s level trail – those checkboxes were cool. I dabbled in Figma, clueless about wireframing, until a lifesaving YouTube tutorial set me straight. Then, it was coding time, but I hit a rough patch. My design draft was... let&apos;s just say a bit off, and translating it into CSS was a head-scratcher.
    </p>
    {/* Inserting the first image */}
    {/* Updated to use Next.js Image component */}
    <Image 
      src="/moodboardinspoleal.png" 
      alt="Moodboard for Barbercard" 
      width={750}
      height={500}
      layout="responsive"
      className="w-3/4 my-8 mx-auto"
    />
    <p className="text-xl mb-4">
      That&apos;s when I found Shadcn&apos;s ready-made components. Like lego bricks, they helped me piece together something way better than my initial Frankenstein design.
      But the app transformed – from a simple loyalty card to a CRM SaaS for barbershops. Three months of tweaking components made it look decent, though not quite runway-ready.
    </p>
    {/* Inserting the second image */}
    {/* Updated to use Next.js Image component */}
    <Image 
      src="/designboardbarber.png" 
      alt="Design Board for Barbercard" 
      width={750}
      height={500}
      layout="responsive"
      className="w-3/4 my-8 mx-auto"
    />
    <p className="text-xl mb-4">
      The real game-changer? Skeumorphic buttons. Discovering them was like striking gold. I used them everywhere – cards, titles, you name it. That&apos;s when the app really started to shine.
      Now, we&apos;ve got an MVP that&apos;s ready but still a work in progress. I&apos;m all for feedback to make this thing not just good, but great. Design&apos;s a journey, after all, and I&apos;m here for the ride.
    </p>
    <hr className="border-t border-gray-800 mb-8" />
  </div>

  {/* Second Article */}
  <div className="text-xl mb-4 space-y-8 px-8 mt-8">
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">
      Into Framer: My Design Playground
    </h2>
    <p className="text-xl mb-4">
      The moment I stumbled upon Framer, it was like finding the missing piece of my design puzzle. It&apos;s not just a tool; it&apos;s a playground where I can train my design skills from start to finish on website projects.
      Framer is like having a design sandbox. With its resources and templates, I can easily experiment, blend ideas, and borrow elements to see what works. It&apos;s all about trying, tweaking, and transforming designs without getting bogged down in complex code.
      Then there&apos;s the animation feature – a total game-changer. It brings designs to life, making them pop and sparkle. It&apos;s like watching your creations take their first breath – absolutely mesmerizing!
    </p>
    {/* Updated to use Next.js Image component */}
    <Image 
      src="/framersites.png" 
      alt="Framer sites" 
      width={750}
      height={500}
      layout="responsive"
      className="w-3/4 my-8 mx-auto"
    />
    <p className="text-xl mb-4">
      As a budding designer in 2024, I&apos;ve set myself a goal: craft 25 websites from the ground up.
      On this design page, I&apos;m going to document my journey. From the initial spark of inspiration to the nitty-gritty final details, I&apos;ll share it all. It&apos;s not just about showcasing the end product but also about revealing the process, the experiments, and the learning along the way.
    </p>
    <hr className="border-t border-gray-800 mb-8" />
  </div>
</div>


          {/* Third Article */}
          <article className="mb-12" >
   
          </article>
        </div>
      </div>
  );
}
