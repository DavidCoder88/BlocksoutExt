import type { NextApiRequest, NextApiResponse } from 'next';

// Health check endpoint
// Used by monitoring systems to verify the application is running
// Returns a simple 'ok' response with 200 status code
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json('ok');
}
