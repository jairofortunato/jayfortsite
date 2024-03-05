'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { getBookByISBN } from '@/services/googleBooksService'; // Adjust import if necessary
import { IBook } from '@/types'; // Ensure this type matches your book data structure

interface IBookApiResponse {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

const BooksPage: React.FC = () => {
  const [readingNowBooks, setReadingNowBooks] = useState<IBookApiResponse[]>([]);
  const [toReadBooks, setToReadBooks] = useState<IBookApiResponse[]>([]);
  const [readBooks, setReadBooks] = useState<IBookApiResponse[]>([]);

  useEffect(() => {
    const readingNowISBN = '9780340960196'; // Example ISBN for "Reading Now" book
    const toReadISBN = '9780340960196'; // Example ISBN for "To Read" book
    const readISBN = '9780340960196'; // Example ISBN for "Read" book

    // Fetch "Reading Now" book by ISBN
    getBookByISBN(readingNowISBN).then(response => setReadingNowBooks(response.items || []));

    // Fetch "To Read" book by ISBN
    getBookByISBN(toReadISBN).then(response => setToReadBooks(response.items || []));

    // Fetch "Read" book by ISBN
    getBookByISBN(readISBN).then(response => setReadBooks(response.items || []));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />
      <div className="flex-1 flex flex-col relative px-4">
        {/* Reading Now Section */}
        <section className="mb-8">
          <h2 className='px-3 mb-8 text-6xl font-medium mt-16 transition-transform duration-400 ease-in-out hover:translate-x-6'>Reading Now</h2>
          <div className="flex flex-wrap">
            {readingNowBooks && readingNowBooks.map(book => (
              <div key={book.id} className="w-1/4 flex flex-col items-center p-2">
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-26 h-auto transition-transform duration-400 ease-in-out hover:translate-y-1" />
                <p className="text-sm font-medium mt-2 px-20">{book.volumeInfo.title}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* To Read Section */}
        <section className="mb-8">
          <h2 className='px-3 mb-8 text-6xl font-medium mt-16 transition-transform duration-400 ease-in-out hover:translate-x-6'>To Read</h2>
          <div className="flex flex-wrap">
            {toReadBooks && toReadBooks.map(book => (
              <div key={book.id} className="w-1/4 flex flex-col items-center p-2">
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-26 h-auto transition-transform duration-400 ease-in-out hover:translate-y-1" />
                <p className="text-sm font-medium mt-2 px-20">{book.volumeInfo.title}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Read Section */}
        <section className="mb-8">
          <h2 className='px-3 mb-8 text-6xl font-medium mt-16 transition-transform duration-400 ease-in-out hover:translate-x-6'>Read</h2>
          <div className="flex flex-wrap">
            {readBooks && readBooks.map(book => (
              <div key={book.id} className="w-1/4 flex flex-col items-center p-2">
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-26 h-auto transition-transform duration-400 ease-in-out hover:translate-y-1" />
                <p className="text-sm font-medium mt-2 px-20">{book.volumeInfo.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BooksPage;
