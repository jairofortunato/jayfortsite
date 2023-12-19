'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar';


export default function BlogPage() {

    const handleMouseOver = () => {
      const heroImage = document.getElementById('heroImage');
      if (heroImage) {
        heroImage.style.opacity = '1';
      }
    };
  
    const handleMouseOut = () => {
      const heroImage = document.getElementById('heroImage');
      if (heroImage) {
        heroImage.style.opacity = '0';
      }
    };
    return (
        <div className="flex flex-col lg:flex-row bg-stone-200">
          <Sidebar />
    
          <div className="flex flex-col w-full lg:w-3/4 bg-stone-200 relative">
            {/* Language switcher */}
            <div className="absolute right-0 top-0 px-24 py-4 text-xl">PT / EN</div>
    
           {/* Image (Initially Hidden) */}
           <img
              src="/hero.gif"
              alt="Hero"
              className="absolute right-0 top-20 hidden lg:block lg:w-1/3 lg:h-auto opacity-0 transition-opacity duration-300"
              id="heroImage"
            />

            {/* Blog Title */}
            <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Blog</h1>
    
            {/* Blog Content */}
            <div className="px-8 py-8 lg:mr-80">
          {/* Articles */}

          {/* First Article */}
          <article className="mb-12" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">"What Edward Said" — Gaza Fundraising T-shirt</h2>
            <p className="text-xl mb-4">
              28.11.2023 — Bergen Assembly and 10/10 have initiated a re-print of Bidoun Magazine's "What Edward Said"
              t-shirt. All profits (approximately 150 NOK pr t-shirt) are donated to Medical Aid for Palestine (MAP.org.uk).
            </p>
            <hr className="border-t border-gray-800 mb-8" />
          </article>

          {/* Second Article */}
          <article className="mb-12" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">
              Bergen Assembly announces Ravi Agarwal, Adania Shibli and Bergen School of Architecture as joint conveners of
              its 2025 edition
            </h2>
            <p className="text-lg mb-4">18.08.2023 — Bergen Assembly has announced its conveners for its 2025 edition.</p>
            <hr className="border-t border-gray-800 mb-8" />
          </article>

          {/* Third Article */}
          <article className="mb-12" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Available Now: The Heptahedron</h2>
            <p className="text-lg mb-4">[Content for the third article]</p>
            <hr className="border-t border-gray-800 mb-8" />
          </article>
        </div>
      </div>
    </div>
  );
}
