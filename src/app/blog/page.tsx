import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {



  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      <div className="flex flex-col w-full lg:w-3/4 bg-stone-200 relative">
        <div className="absolute right-0 top-0 px-24 py-4 text-xl">
          PT / EN
        </div>


        <div className="flex flex-col lg:flex-row">
          {/* Image initially hidden */}

        </div>
            {/* Blog Title */}
            <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Blog</h1>
    
            {/* Blog Content */}
            <div className="px-8 py-8 lg:mr-80">
          {/* Articles */}
          <Link href="/blog/2023/systemsovergoals">       
  <article className="mb-12" >
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Embracing Systems over Goals</h2>
    <p className="text-xl mb-4">
      05.07.2023 — In a society driven by mimetic desires, where we constantly compare ourselves to the glorified images of millionaire entrepreneurs and celebrities, the pressure to achieve can be overwhelming. This is particularly true for Generation Z, who often find themselves caught in a relentless pursuit of external validation and success. But is this the only way to live?
    </p>
    <hr className="border-t border-gray-800 mb-8" />
  </article>
</Link>

{/* Second Article */}
<Link href="/blog/2023/herojourneywithin"> 
  <article className="mb-12">
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">
      the Hero&apos;s Journey Within
    </h2>
    <p className="text-lg mb-4">18.07.2023 — Mimetic narratives, like children exclaiming &quot;I am him&quot; while pointing to a main character in a movie, reflect our innate desire to take control as the protagonist of our own lives.</p>
    <hr className="border-t border-gray-800 mb-8" />
  </article>
</Link>

<Link href="/blog/2023/lovetransformativepower">
  <article className="mb-12" >
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Embracing Love&apos;s Transformative Power</h2>
    <p className="text-lg mb-4">09.05.2023 When love seizes our hearts, it wields a transformative power, ushering in a new chapter of our lives filled with mysteries, adventures, and profound connections. This love-infused state brings with it a complex blend of present satisfaction and a tantalizing anxiety for a potential future with our beloved. As the romantic journey progresses, feelings of apprehension and self-doubt may surface, challenging us to present our best selves.</p>
    <hr className="border-t border-gray-800 mb-8" />
  </article>
</Link>

<Link href="/blog/2023/imperfectioninbusinessandlife">
  <article className="mb-12" >
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Imperfection in Business and Life</h2>
    <p className="text-lg mb-4">09.05.2023 — The desire to propel one&apos;s business and life forward is a common aspiration, yet many find themselves immobilized when it comes to deciding the next step. The quest for the perfect decision often leads to endless hours of sifting through others&apos; opinions and advice, resulting in an exhausting state of information overload. This begs the question: what move should one make, and which direction is the right one?</p>
    <hr className="border-t border-gray-800 mb-8" />
  </article>
</Link>

<Link href="/blog/2023/faithandgrowth">
  <article className="mb-12" >
    <h2 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Navigating Faith and Personal Growth Through Writing</h2>
    <p className="text-lg mb-4">03.06.2023 — The power of writing, akin to the power of meditation, offers clarity and enlightenment. It resonates deeply with the meaning of my name – the one who carries light. This makes me ponder if destiny has inscribed a specific role in my life.</p>
    <hr className="border-t border-gray-800 mb-8" />
  </article>
</Link>

        </div>
      </div>
    </div>
  );
}
