import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
const TextPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-stone-200 px-4 py-8">
<Sidebar/>

      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-5xl font-normal mb-2 transition-transform duration-400 ease-in-out hover:translate-x-6">Embracing Systems over Goals</h1>

        <div className='py-4'>
          <div className="lg:w-2/3 mb-6 justify-center ml-24">
            <Image 
              src="/habits.gif" 
              alt="Hero" 
              width={500} // Specify the width
              height={300} // Specify the height
              layout="responsive" // This makes the image scale with the parent element
              className="w-full h-auto" // Adjusted the margins and width for large screens
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
  In a society driven by mimetic desires, where we constantly compare ourselves to the glorified images of millionaire entrepreneurs and celebrities, the pressure to achieve can be overwhelming. This is particularly true for Generation Z, who often find themselves caught in a relentless pursuit of external validation and success. But is this the only way to live?
</h2>
<ul className="list-none space-y-2 mb-8">
  <li>Consider a different approach: instead of being solely goal-oriented, driven by external desires and peer validation, what if we shifted our focus to systems and processes that align with our authentic purpose? This approach is not just about achieving isolated objectives; it&apos;s about creating a sustainable and fulfilling life.</li>
  <li>This systems-oriented mindset provides a safeguard against identity crises that can occur after reaching a goal. We often think that achieving a major goal will lead to perpetual satisfaction, but this isn&apos;t always the case. Reflecting on the insights of public figures like Jim Carrey or examining the roots of our desires—such as the fear of death and the need for approval—can be enlightening. It helps us see our work, physical health, mental state, and relationships as interconnected elements of a web of processes and habits that shape our reality and impact those around us.</li>
  <li>In this context, victories, medals, and achievements are not the primary reasons for living, but rather the consequences of engaging in a meaningful battle, duty, problem, or mission. Consider the memorable scenes from &quot;Star Wars: A New Hope.&quot; It&apos;s not the medal ceremony that stands out to most, but rather the iconic moments like the X-Wing flights, lightsaber battles, and Darth Vader&apos;s imposing presence. These scenes are driven by the characters&apos; beliefs and actions, underscoring the importance of a belief-driven system in shaping our experiences.</li>
  <li>I&apos;m not here to dictate your purpose or the worth of your life. My aim is to emphasize the power of the underlying mechanisms and routines that guide our actions. For instance, rather than fixating on a target weight or physique, adopting a systems-oriented approach means establishing a regular exercise routine and a healthy diet as part of your lifestyle. This system ensures consistent engagement in physical activity and nutritious choices, leading to identity-based decisions.</li>
  <li>Systems also offer a sense of control and agency. Unlike goals, which often depend on external factors and circumstances, systems empower individuals to take ownership of their lives. Developing effective systems creates a structure to navigate life&apos;s complexities, fostering confidence, resilience, and adaptability in the face of uncertainty.</li>
  <li>Furthermore, systems allow for continuous improvement. Unlike goals, which have an endpoint, systems are iterative and open to refinement. Through regular evaluation and adjustment, we can optimize our systems, making them more efficient and effective.</li>
  <li>This is not to say that goals are entirely obsolete. They still serve as guiding stars, providing direction and inspiration. However, by incorporating a systems-based approach, we can unlock a new level of productivity and fulfillment, redefining success in a way that resonates with our deepest values and aspirations.</li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default TextPage;
