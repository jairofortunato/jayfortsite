import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative">

        {/* Language switcher */}
        <div className="absolute right-0 top-0 px-6 py-4 text-xl">
        PT / EN
        </div>

        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Code AI Assisted</h1>

        {/* Hero Image and Right-side div container */}
        <div className="flex flex-col lg:flex-row">
          
          {/* Hero Image */}
          <div className="lg:w-2/3">
            <Image 
              src="/codegif.gif" 
              alt="Hero" 
              width={500} // Specify the width
              height={300} // Specify the height
              layout="responsive" // This makes the image scale with the parent element
              className="px-8" // Adjusted the margins and width for large screens
            />
          </div>
          
       {/* Right-side div (empty for now) */}
<div className="lg:block lg:w-1/3 px-4 text-xl">
  From a young age, I&apos;ve been brimming with app ideas. However, these ideas remained just that - ideas. My lack of coding skills felt like a barrier, as deciphering the complexities of human behavior seemed simpler in comparison. This all changed when I stepped away from my family business, fueled by a newfound purpose to build my own venture.
</div>
</div>

{/* Text content below the image */}
<div className="text-xl mb-4 space-y-8 px-8 mt-8">
  <Link href="https://github.com/jairofortunato" passHref target="_blank" rel="noopener noreferrer">
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">
      github.com/jairofortunato
    </h2>
  </Link>
  <p>
    My journey into the world of coding began with CS50. I dove into tutorials and learned data analysis from friends. At this critical point, the launch of chatGPT marked a turning point. It empowered me to embrace creativity without the usual trepidation.
  </p>

  <p>
    One might wonder, what&apos;s more challenging: coming up with the idea, building it, or selling (or retaining) it? My Notion page overflowing with ideas and my affinity for sales pointed me towards building as my personal challenge. Over the past months, I&apos;ve found increasing joy in deep, focused work on each problem.
  </p>

  <p>
    But does this make me a &apos;real&apos; developer? The market will ultimately decide. My approach, aided by AI, focuses on practical problem-solving and learning on-the-go, rather than learning in preparation for problem-solving. The critical question is whether I&apos;m genuinely learning or merely copying. I challenge anyone to try building something substantial from scratch with GPT. If done correctly, it&apos;s impossible not to understand your work. Ultimately, my customers and employers will be the judge of that.
  </p>

  <p>
    I see myself more as a product manager and designer than an engineer. My passion lies in creating products and solving people&apos;s problems, and I am grateful to be part of the AI revolution. AI-assisted coding is still in its early stages, and the role of developers is far from obsolete. The primary shift is the democratization of technology, enabling creative, non-technical individuals like myself to contribute meaningfully.
  </p>

  <p>
    In this AI era, the tools at our disposal are revolutionizing how we bring ideas to life. AI-assisted coding is not just a tool for experienced developers; it&apos;s a bridge for the creatively inclined to cross into the realm of technology. It&apos;s an exciting time to be at the intersection of imagination and innovation.
  </p>
</div>

      </div>
    </div>
  );
}
