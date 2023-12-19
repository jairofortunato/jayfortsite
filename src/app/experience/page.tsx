import React from 'react';
import Sidebar from '@/components/Sidebar';

// Define a TypeScript interface for the content block
interface ContentBlock {
  title: string;
  description: string;
  readMoreLink: string;
}

export default function Component() {
  // Function to render a single content block, now with types
  const renderContentBlock = ({ title, description, readMoreLink }: ContentBlock) => (
    <div className="w-full lg:w-1/3 p-8">
      <div className="flex mb-4 border-t border-black"></div>
      <h2 className="text-2xl font-bold hover:italic">{title}</h2>
      <div className="flex mt-4 mb-4 border-t border-black"></div>
      <p className="mt-4 text-xl">{description}</p>
      <a className="underline mt-4 text-xl hover:italic" href={readMoreLink}>
        Read more here →
      </a>
    </div>
  );


  // Array of content blocks data
  const contentBlocks = [
    {
      title: "Build & Sell",
      description: "Bergen Assembly’s offices function as both a public work- and event space. Are you or your group interested in using our office?",
      readMoreLink: "#build-sell",
    },
    {
      title: "Barbercard",
      description: "La Cantina de la Touriste is a permanent installation by the artist Sol Calero that reimagines the interior of Kafé Mat & prat.",
      readMoreLink: "#barbercard",
    },
    {
      title: "Data Analysis",
      description: "Explore the latest trends in data analysis and how they are being applied in the world of art and culture.",
      readMoreLink: "#data-analysis",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative">

        {/* Language switcher */}
        <div className="absolute right-0 top-0 px-6 py-4 text-xl">
          NO / EN
        </div>

        {/* Title */}
        <h1 className="px-3 mb-8 text-6xl font-medium mt-16">Experience</h1>

        {/* Content blocks */}
        {[...Array(2)].map((_, rowIndex) => ( // For two sets of content blocks
          <div key={rowIndex} className="flex flex-wrap">
            {contentBlocks.map((block, blockIndex) => (
              // Pass the entire block object to the function
              renderContentBlock(block)
            ))}
          </div>
        ))}

      </div>
    </div>
  );
}
