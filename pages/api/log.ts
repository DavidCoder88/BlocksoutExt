import type { NextApiRequest, NextApiResponse } from 'next';

import { httpLogger } from 'nextjs/utils/logger';

// Logging endpoint
// Handles client-side log requests and records them using httpLogger
// Returns a simple 'ok' response after logging
export default async function logHandler(req: NextApiRequest, res: NextApiResponse) {
  // Log the incoming request
  httpLogger(req, res);

  res.status(200).send('ok');
}
