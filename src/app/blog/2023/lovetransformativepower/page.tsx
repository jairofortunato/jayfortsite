import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
const TextPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-stone-200 px-4 py-8">
<Sidebar/>

      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Embracing Loves Transformative Power</h1>

        <div className='py-4'>
          <Image 
            src="/love.jpg" 
            alt="Hero" 
            width={500} // Specify the width
            height={300} // Specify the height
            layout="responsive" // This makes the image scale with the parent element
            className="py-4" // Adjusted the margins and width for large screens
          />

          <h2 className="text-2xl font-semibold mb-4">
            When love seizes our hearts, it wields a transformative power, ushering in a new chapter of our lives filled with mysteries, adventures, and profound connections. This love-infused state brings with it a complex blend of present satisfaction and a tantalizing anxiety for a potential future with our beloved. As the romantic journey progresses, feelings of apprehension and self-doubt may surface, challenging us to present our best selves.
          </h2>
          <ul className="list-none space-y-2 mb-8">
            <li>Jordan Peterson delves into this concept on the Joe Rogan Podcast. He articulates that love enables us to see beyond the ordinary, to perceive the soul of another person, and to envision their potential, as well as our own. This mutual recognition of potential, he argues, is not a delusion but the very foundation of life itself. Its a realization of loves true depth and its ability to reveal the best in us and our partners.</li>
            <li>This perspective challenges the simplistic view often perpetuated by science articles that equate love to a drug-induced high. Instead, it suggests that love involves a lifting of the veil of ignorance, allowing us to see and aspire to a greater version of ourselves and our partners. In the throes of a romantic relationship, we find our rational thinking and long-term vision beautifully intertwined with our emotions.</li>
            <li>As we embrace this enchanting vision of love, a subtle yet powerful anxiety emerges. This anxiety serves as a reminder that the fulfillment of our dreams is not guaranteed. Its a gentle nudge that propels us to strive for self-improvement and to become the best versions of ourselves. This motivating anxiety is not just a fear of falling short; its a driving force that spurs us to cultivate the qualities necessary to build the future we dream of with our loved ones.</li>
            <li>In this journey, love is not just an emotion but a catalyst for personal growth and self-discovery. It awakens a sense of purpose within us, urging us to evolve and contribute meaningfully to the relationship we cherish. Recognizing that love alone is not enough, we are inspired to actively work on ourselves, ensuring that we are equipped to nurture and sustain the bond we hold dear. Love, in its truest form, becomes a transformative journey, one that shapes our identity and our destiny.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
