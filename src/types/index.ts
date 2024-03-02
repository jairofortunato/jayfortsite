// src/types/index.ts

export interface IBook {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: {
        thumbnail?: string;
      };
      // Add any additional details you need
    };
  }
  
  export interface IBooksApiResponse {
    items: IBook[];
  }
  