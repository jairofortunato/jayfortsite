// pages/api/auth/start.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`;
  const scope = 'https://www.googleapis.com/auth/books';
  const responseType = 'code';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${responseType}&scope=${scope}`;
  res.redirect(authUrl);
}
