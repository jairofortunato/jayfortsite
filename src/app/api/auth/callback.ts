// pages/api/auth/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const client_secret = process.env.GOOGLE_CLIENT_SECRET;
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`;
  const tokenUrl = `https://oauth2.googleapis.com/token`;

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code`,
  });

  const data = await response.json();

  if (data.error) {
    // Handle error
    console.error(data.error);
    return res.status(400).end();
  }

  // Here you would typically store the tokens securely and redirect the user to a frontend page
  // For demonstration, we'll just return the tokens (Don't do this in production!)
  res.json(data);
}
