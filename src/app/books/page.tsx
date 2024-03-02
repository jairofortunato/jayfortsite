import React, { useState, useEffect, useContext } from 'react';
// Import necessary contexts or services
import Sidebar from '@/components/Sidebar';
import { IBook } from '@/types'; // Update according to your type definitions
// Assume a context or a method to get the access token
// import { AuthContext } from '@/context/AuthContext';
import { useAuth } from '@/context/AuthContext';


const BooksPage: React.FC = () => {
  const [readingBooks, setReadingBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    if (!accessToken) {
      console.error('No access token available.');
      return;
    }
    // Use the accessToken for authenticated requests here
    // Assume you've modified searchGoogleBooks to optionally accept an accessToken for authenticated requests
    searchGoogleBooks('harry potter', accessToken)
      .then((data: IBooksApiResponse) => {
        setReadingBooks(data.items || []);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [accessToken]); // Depend on accessToken

  // Example function to update the token
  const updateToken = (newToken: string) => {
    localStorage.setItem('accessToken', newToken); // Update localStorage
    setAccessToken(newToken); // Update context state
  };

  useEffect(() => {
    // Ensure you have a function to fetch books from the "Reading Now" section
    // This function needs to use the OAuth token for authentication
    const fetchReadingNowBooks = async () => {
      if (!accessToken) {
        setError('User not authenticated');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/READING_SHELF_ID/volumes`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch reading now books');

        const data = await response.json();
        setReadingBooks(data.items || []);
      } catch (err) {
        setError('Error fetching reading now books');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReadingNowBooks();
  }, [accessToken]); // Depend on accessToken to re-fetch if it changes

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

