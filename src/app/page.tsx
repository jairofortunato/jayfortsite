import Image from 'next/image'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/O3AWCUtWdSG
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row bg-stone-100">
      <div className="flex flex-col w-full lg:w-1/4 p-4 border-black lg:border-b-0 lg:border-r">
        <nav className="space-y-3">
          <a className="block text-5xl font-light" href="#">
            HOME
          </a>
          <a className="block text-5xl font-light" href="#">
            VIDEO
          </a>
          <a className="block text-5xl font-light" href="#">
            BLOG
          </a>
          <a className="block text-5xl font-light" href="#">
            CODE
          </a>
          <a className="block text-5xl font-light" href="#">
            DESIGN
          </a>
          <a className="block text-5xl font-light" href="#">
            PHOTOS
          </a>
          <a className="block text-5xl font-light" href="#">
            EXPERIENCE
          </a>
        </nav>
        <div className="flex mt-6 border-t border-black"></div>

        <div className="mt-8 space-y-4">
          <div className="text-5xl font-light">IDEAS</div>
          <a className="block text-3xl font-light" href="#">
            → WORK
          </a>
          <a className="block text-3xl font-light" href="#">
            → BODY
          </a>
          <a className="block text-3xl font-light" href="#">
            → MIND
          </a>
          <a className="block text-3xl font-light" href="#">
            → PEOPLE
          </a>
      
          <a className="block text-2xl font-light" href="#">
            → MIND VIRUS
          </a>
          <a className="block text-2xl font-light" href="#">
            → AI PLOT
          </a>
        </div>
        <div className="flex mt-6 border-t border-black"></div>

        <div
    className="w-60 h-12 mt-8 py-2 flex justify-center items-center text-2xl text-orange-500 border-2 rounded-lg border-orange-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ffa500,0_0_15px_#ffa500,0_0_30px_#ffa500]"
>
    SUBSCRIBE
</div>
<div className="flex mt-10 border-t border-black"></div>

        <div className="mt-8 space-y-8">
          <a className="block text-3xl font-light" href="#">
            jairojfortunato@gmail.com
          </a>

          <div className="flex px-4 mt-12 border-t border-black"></div>

          <address className="not-italic text-3xl font-light">
            Florianópolis
            <br />
            Santa Catarina, Brazil
          </address>

          <div className="flex px-4 mt-12 border-t border-black"></div>

          <div className="flex space-x-2">
            <a className="block text-xl" href="#">
              Instagram
            </a>
            <a className="block text-xl" href="#">
              LinkedIn
            </a>
            <a className="block text-xl" href="#">
              Twitter
            </a>
            <a className="block text-xl" href="#">
              TikTok
            </a>
            <a className="block text-xl" href="#">
              Vsco
            </a>
          </div>
          <a className="block" href="#">
          Instantly Re$ult          
          </a>
        </div>
      </div>

{/* Main content */}
<div className="flex flex-col w-full lg:w-3/4 bg-stone-100 relative"> {/* Adjust the background color and set position relative */}

  {/* Language switcher */}
  <div className="absolute right-0 top-0 px-24 py-4 text-xl"> {/* Use absolute positioning */}
    PT / EN
  </div>

  {/* Title */}
  <h1 className="p-4 text-6xl font-medium mt-24">Jay Fort</h1> {/* Keep the title at the top */}

  {/* Image and text content container */}
  <div className="flex flex-col lg:flex-row"> {/* Apply flex-row on large screens */}

    {/* Left side - Image */}
    <div className="lg:w-1/2 p-4 mr-38"> {/* Adjust width to take up half the space on large screens and add padding */}
      <img
        alt="Open Office"
        className="mt-4"
        src="/hero.gif" // Assuming the image is responsive and fills its container
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Right side - Text content */}
    <div className=" lg:w-1/2 ml-32 mt-4 lg:mt-0 p-12"> {/* Add left padding and adjust margins on large screens */}
      <div className="flex-grow border-t border-black"></div>
      <p className="mt-4 text-xl">
        Bergen Assembly is a perennial model for art production structured around public events that take place in
        Bergen every three years. Each edition is guided by a convener who is free to invent new ways of conceiving
        the event, allowing each iteration of Bergen Assembly to take on a distinctly different shape and format. →
      </p>
    </div>
  </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 p-8 ">

          <div className="flex mb-4 border-t border-black"></div>
            <h2 className="text-2xl font-bold">Build & Sell</h2>
          <div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">Bergen Assembly’s offices function as both a public work- and event space.</p>
            <p className="mt-4 text-xl">
              Are you or your group interested in using our office?
           
            </p>
            <a className="underline mt-4 text-xl" href="#">
                Read more here →
              </a>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
          <div className="flex mb-4 border-t border-black"></div>

            <h2 className="text-2xl font-bold">Barbercard</h2>
          <div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">
              La Cantina de la Touriste is a permanent installation by the artist Sol Calero that reimagines the
              interior of Kafé Mat & prat. The installation was made as part of the fourth edition of Bergen Assembly,
              Yasmine and the Seven Sides of the Hepathedron, in 2022.
            </p>
            <a className="underline" href="#">
              Read more here →
            </a>
          </div>
          <div className="w-full lg:w-1/3 p-8 ">
          <div className="flex mb-4 border-t border-black"></div>

<h2 className="text-2xl font-bold">Data Analysis</h2>
<div className="flex mt-4 mb-4 border-t border-black"></div>

            <p className="mt-4 text-xl">Bergen Assembly’s offices function as both a public work- and event space.</p>
            <p className="mt-4 text-xl">
              Are you or your group interested in using our office?
           
            </p>
            <a className="underline mt-4 text-xl" href="#">
                Read more here →
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

