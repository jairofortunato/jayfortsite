// Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/4 p-4 border-black lg:border-b-0 lg:border-r">
      {/* Navigation links */}
      <nav className="space-y-3">
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">HOME</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">VIDEO</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">BLOG</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">CODE</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">DESIGN</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">PHOTOS</a>
        <a className="block text-5xl font-light transition-transform duration-400 ease-in-out hover:translate-x-6" href="#">EXPERIENCE</a>
      </nav>

      <div className="flex mt-6 border-t border-black"></div>

      <div className="mt-8 space-y-4">
        <div className="text-5xl font-light">IDEAS</div>
        <a className="block text-3xl font-light hover:italic" href="#">→ WORK</a>
        <a className="block text-3xl font-light hover:italic" href="#">→ BODY</a>
        <a className="block text-3xl font-light hover:italic" href="#">→ MIND</a>
        <a className="block text-3xl font-light hover:italic" href="#">→ PEOPLE</a>
        <a className="block text-2xl font-light hover:italic" href="#">→ MIND VIRUS</a>
        <a className="block text-2xl font-light hover:italic" href="#">→ AI PLOT</a>
      </div>

      <div className="flex mt-6 border-t border-black"></div>

      <div
        className="w-60 h-12 mt-8 py-2 flex justify-center items-center text-2xl text-orange-500 hover:text-orange-700 border-2 rounded-lg border-orange-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ffa500,0_0_15px_#ffa500,0_0_30px_#ffa500] transition-colors hover:font-bold"
      >
        SUBSCRIBE
      </div>

      <div className="flex mt-10 border-t border-black"></div>

      <div className="mt-8 space-y-8">
        <a className="block text-3xl font-light hover:italic" href="#">jairojfortunato@gmail.com</a>
        <div className="flex px-4 mt-12 border-t border-black"></div>
        <address className="not-italic text-3xl font-light">
          Florianópolis<br/>Santa Catarina, Brazil
        </address>
        <div className="flex px-4 mt-12 border-t border-black"></div>
        <div className="flex space-x-2">
          <a className="block text-xl hover:italic" href="#">Instagram</a>
          <a className="block text-xl hover:italic" href="#">LinkedIn</a>
          <a className="block text-xl hover:italic" href="#">Twitter</a>
          <a className="block text-xl hover:italic" href="#">TikTok</a>
          <a className="block text-xl hover:italic" href="#">Vsco</a>
        </div>
        <a className="block hover:italic" href="#">Instantly Re$ult</a>
      </div>
    </div>
  );
};

export default Sidebar;
