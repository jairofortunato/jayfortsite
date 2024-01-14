import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
const TextPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-stone-200 px-4 py-8">
<Sidebar/>

      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">The Heros Journey Within</h1>

        <div className='py-4'>
          <Image 
            src="/neo.gif" 
            alt="Hero" 
            width={500} // Specify the width
            height={300} // Specify the height
            layout="responsive" // This makes the image scale with the parent element
            className="w-full h-auto py-4" // Adjusted the margins and width for large screens
          />

<h2 className="text-2xl font-semibold mb-4">
  Mimetic narratives, like children exclaiming &quot;I am him&quot; while pointing to a main character in a movie, reflect our innate desire to take control as the protagonist of our own lives. This concept resonates deeply with Carl Jung&apos;s theory of the Hero&apos;s Journey, which he connects to the story of life itself.
</h2>
<ul className="list-none space-y-2 mb-8">
  <li>Jung proposed that universal patterns of images, symbols, and myths are present in the collective unconscious of all cultures. These archetypes symbolize fundamental human experiences and emotions, such as the hero, the wise, the lover, and the shadow, among others. He saw the Hero&apos;s Journey not just as a literary framework but as a symbolic representation of the path every individual must undertake for personal fulfillment and psychological integration.</li>
  <li>This journey involves adventure and the overcoming of fear, crafting stories that shape our identity. By creating and recalling stories with clear objectives, obstacles, and characters, we can resolve past traumas and motivate future actions. This narrative approach brings a sense of peace as it unites meaning within our minds, allowing us to experience life as emanating from us, rather than happening to us.</li>
  <li>Jung&apos;s concept of individuation, the development and integration of the entirety of the personality, is intricately linked with the Hero&apos;s Journey. He believed that this journey is a symbolic pathway each person must navigate to achieve self-realization and psychological wholeness.</li>
  <li>By assuming responsibility for our choices and actions, we empower ourselves to shape our destiny, rather than merely reacting to circumstances. We are the authors, directors, and protagonists of our own life story, and it is in this realization that we find true freedom.</li>
  <li>To embrace this journey, we must take the reins, chart our path, and embrace the adventure. The past can be healed, and the future can be shaped by our own hands. This is the essence of embracing our role as the protagonist in the narrative of our lives, where each challenge and triumph contributes to our personal and spiritual growth.</li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default TextPage;
