import React from 'react';

const TextPage = () => {
  return (
    <div className="flex justify-center  min-h-screen bg-stone-200 px-4 py-8">
      <a href="/" className="absolute top-4 left-4  text-black py-2 px-4 rounded">Return</a>

      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-3xl font-bold mb-6">PEOPLE</h1>
        <p className="mb-8">I'm an investor, entrepreneur, developer.</p>

        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Love</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Family</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Friends</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Marriage</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Kids</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Others</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
        <div className='py-4'>
        <h2 className="text-2xl font-semibold mb-4">Us</h2>
        <ul className="list-none space-y-2 mb-8">
          {/* Repeat for each item */}
          <li>Grew up in Charlottesville, VA</li>
          {/* ... */}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
