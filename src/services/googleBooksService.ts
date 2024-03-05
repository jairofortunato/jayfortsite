interface IBooksApiResponse {
    items: Array<{
      id: string;
      volumeInfo: {
        title: string;
        authors: string[];
        imageLinks?: {
          thumbnail?: string;
        };
      };
    }>;
  }
  
  // Existing getBookById remains unchanged for fetching by Google Books ID
  export const getBookById = async (id: string, accessToken?: string): Promise<IBooksApiResponse> => {
    const API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes/${id}`;
    const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;
  
    const response = await fetch(API_ENDPOINT, { headers });
    if (!response.ok) {
      throw new Error('Failed to fetch from Google Books API');
    }
  
    const data = await response.json();
    return { items: [data] };
  };
  
 // In your googleBooksService.js or googleBooksService.ts file
 export const getBookByISBN = async (isbn: string) => {
    const apiKey = 'AIzaSyC2URRxFPPIBWgmYwA2xzJ-a65W_VcTEpw'; // Replace with your actual API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // Log detailed error information
            console.error(`Error fetching book by ISBN: ${response.status} ${response.statusText}`);
            const errorData = await response.json();
            console.error('Error details:', errorData);
            throw new Error('Failed to fetch from Google Books API');
        }
        const data = await response.json();
        return data; // You might want to adjust this depending on the structure you need
    } catch (error) {
        console.error('Error fetching book by ISBN:', error);
        throw error;
    }
};
