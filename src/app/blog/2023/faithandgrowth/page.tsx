import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
const TextPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-stone-200 px-4 py-8">
<Sidebar/>

      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">
          Navigating Faith and Personal Growth Through Writing
        </h1>

        <div className='py-4'>
          <Image 
            src="/light.gif" 
            alt="Hero" 
            width={500}
            height={100}
            layout="responsive"
            className='py-4'
          />

<h2 className="text-2xl font-semibold mb-4">
  The power of writing, akin to the power of meditation, offers clarity and enlightenment. It resonates deeply with the meaning of my name – the one who carries light. This makes me ponder if destiny has inscribed a specific role in my life.
</h2>
<ul className="list-none space-y-2 mb-8">
  <li>Growing up in a religious household, with my father as a preacher, the concepts of meaning and purpose were deeply ingrained in me from a young age. Every Sunday morning, I would sit with my father and read the Bible. I am profoundly grateful for this practice, not only for the spiritual guidance it provided but also because it fostered my love for reading and writing. This spiritual upbringing, rooted in Christianity, instilled a light within me that persists even as I embrace a more secular, scientific worldview.</li>
  <li>Unfortunately, the more challenging aspects of being a spiritual leader&apos;s child are often more apparent than the meaningful ones. The pressures to conform, the lack of autonomy, and a guilt- and fear-based mentality can lead many young people to rebel and seek meaning elsewhere. This rebellion was my form of expressing dissent, a cry for attention, and an act of defiance against the expectations set upon me by my father. Every family has its dramas, and this was mine.</li>
  <li>Breaking away from a singular worldview, especially the Christian perspective, is rarely a gentle process. In this quest for liberation, we often overlook the light and wisdom imparted by our upbringing. After going through conflicts, tears, and eventual forgiveness, one emerges changed. Sometimes, the light of our foundational teachings becomes so dim that it&apos;s barely noticeable in our external lives.</li>
  <li>So, what is this light? What is this blessing that outshines even our deepest familial conflicts?</li>
  <li>I believe it&apos;s the Meaningful Purpose of Love. Despite my shift towards a more philosophical, goal-oriented, and system-driven approach, far from my spiritual past, I sometimes glimpse the light emanating from my father&apos;s teachings within me. The concept of loving others as ourselves, a central tenet of Jesus Christ&apos;s teachings, gains new dimensions in this era of psychological awareness. We know that self-love can be challenging for many, so how can we extend this love to others? My secular mindset grapples with this, especially considering that the foremost commandment is to love God with all our heart, soul, and understanding. This forms the bedrock of a meaningful purpose of love – towards others, ourselves, and the world.</li>
  <li>My father&apos;s life is characterized by destiny, purpose, family, and power, unified by the teachings he imparted to me – teachings that continue to shine as a guiding light in my journey. However, the question remains: How can I embrace this meaningful purpose of love if I am uncertain about God, or if I believe in the immense power of humanity as divine?</li>
  <li>This is where the influence of morality and the power of meaningful help come into play, guiding my path as I navigate the complex interplay of faith, personal beliefs, and the enduring impact of my upbringing.</li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default TextPage;
