// app/books/page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { IBook, IBooksApiResponse } from '@/types'; // Assuming you have these types defined
import { searchGoogleBooks } from '@/lib/googleBooksService'; // Your API service file
import Link from 'next/link';

// Any frontend component or page
const initiateAuthFlow = () => {
    window.location.href = '/api/auth/start';
  };
  
const BooksPage: React.FC = () => {
  const [readingBooks, setReadingBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Replace 'harry potter' with your actual search query or list of book identifiers
  const readingNowQuery = 'harry potter';

  useEffect(() => {
    searchGoogleBooks(readingNowQuery)
      .then((data: IBooksApiResponse) => {
        setReadingBooks(data.items || []);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [readingNowQuery]);

  return (
    <div className="flex flex-col lg:flex-row bg-stone-200">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col relative">
        <section>
          <h1 className="px-3 mb-8 text-6xl font-medium mt-16 transition-transform duration-400 ease-in-out hover:translate-x-6">Reading</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div>
              {readingBooks.map((book: IBook) => (
                <div key={book.id} className="book-item">
                  {/* Assuming you have thumbnail images for books */}
                  {book.volumeInfo.imageLinks?.thumbnail && (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={`Cover of ${book.volumeInfo.title}`} />
                  )}
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.authors?.join(', ')}</p>
                  {/* Add more details as needed */}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Other sections... */}
      </div>
    </div>
  );
};

export default BooksPage;

