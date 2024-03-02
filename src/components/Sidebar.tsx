'use client'
// Sidebar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Disable main content scrolling when sidebar is open
    const body = document.querySelector('body');
    if (isSidebarOpen) {
      body!.style.overflow = 'hidden';
    } else {
      body!.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      body!.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Icon - only visible on small screens and when sidebar is not open */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-0 left-0 z-20 p-4 ${isSidebarOpen ? 'hidden' : ''}`}
      >
        ☰
      </button>

      {/* Sidebar - shown based on state */}
                         
      <aside className={`fixed inset-y-0 left-0 transform flex flex-col bg-stone-200 w-full lg:w-1/4 p-4 border-black lg:border-b-0 lg:border-r z-30 ease-in-out  overflow-auto transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block`}>
        {/* Navigation links */}
        <nav className="space-y-3" onClick={() => setIsSidebarOpen(false)}>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/">HOME</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/design">DESIGN</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/books">BOOKS</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/code">CODE</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/video">VIDEO</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/blog">BLOG</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/photos">PHOTOS</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="/experience">EXPERIENCE</a>
      </nav>


      <div className="flex mt-6 border-t border-black"></div>

      <div className="mt-8 space-y-4">
        <div className="text-5xl font-light">IDEAS</div>
        <a className="block text-3xl font-light hover:italic" href="/work">→ WORK</a>
        <a className="block text-3xl font-light hover:italic" href="/body">→ BODY</a>
        <a className="block text-3xl font-light hover:italic" href="/mind">→ MIND</a>
        <a className="block text-3xl font-light hover:italic" href="/people">→ PEOPLE</a>
        <a className="block text-2xl font-light hover:italic" href="/mindvirus">→ MIND VIRUS</a>
        <a className="block text-2xl font-light hover:italic" href="/aiplot">→ AI PLOT</a>
      </div>

      <div className="flex mt-6 border-t border-black"></div>

 <Link href="https://twitter.com/jayfortunato3" passHref target="_blank" rel="noopener noreferrer">     <div
        className="w-60 h-12 mt-8 py-2 flex justify-center items-center text-2xl text-orange-500 hover:text-orange-700 border-2 rounded-lg border-orange-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ffa500,0_0_15px_#ffa500,0_0_30px_#ffa500] transition-colors hover:font-bold"
      >
        SUBSCRIBE 
      </div>
      </Link>
      <div className="flex mt-10 border-t border-black"></div>

      <div className="mt-8 space-y-8">
      <a className="block text-3xl font-light hover:italic" href="mailto:jairojfortunato@gmail.com">jairojfortunato@gmail.com</a>
        <div className="flex px-4 mt-12 border-t border-black"></div>
        <address className="not-italic text-3xl font-light">
          Florianópolis<br/>Santa Catarina, Brazil
        </address>
        <div className="flex px-4 mt-12 border-t border-black"></div>
        <div className="flex space-x-2">
        <Link href="https://www.instagram.com/jairofortunato3/" passHref target="_blank" rel="noopener noreferrer" className="block text-xl hover:italic" >Instagram</Link>
        <Link href="https://www.linkedin.com/in/jairofortunato/" passHref target="_blank" rel="noopener noreferrer" className="block text-xl hover:italic" >LinkedIn</Link>
          <Link href="https://twitter.com/jayfortunato3" passHref target="_blank" rel="noopener noreferrer" className="block text-xl hover:italic">Twitter </Link>
          <Link href="https://www.tiktok.com/@jayfortunato3" passHref target="_blank" rel="noopener noreferrer" className="block text-xl hover:italic" >TikTok</Link>
          <Link href="https://vsco.co/jairofortuna2/gallery" passHref target="_blank" rel="noopener noreferrer" className="block text-xl hover:italic">Vsco</Link>
        </div>
      </div>
      </aside>
    </>
  );
};

export default Sidebar;
