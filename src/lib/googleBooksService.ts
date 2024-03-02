// src/lib/googleBooksService.ts

import { IBooksApiResponse } from '../types';

// Make sure you're using the correct environment variable name with the prefix.
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

export const searchGoogleBooks = async (query: string): Promise<IBooksApiResponse> => {
  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }
  return response.json();
}
