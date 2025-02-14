import type { NextApiRequest, NextApiResponse } from 'next';

import buildUrl from 'nextjs/utils/buildUrl';
import fetchFactory from 'nextjs/utils/fetchProxy';
import { httpLogger } from 'nextjs/utils/logger';

// CSRF token handler for API requests
// Fetches a CSRF token from the backend API and returns it to the client
// This helps protect against Cross-Site Request Forgery attacks
export default async function csrfHandler(_req: NextApiRequest, res: NextApiResponse) {
  // Log incoming request
  httpLogger(_req, res);

  // Build the CSRF endpoint URL
  const url = buildUrl('csrf');
  // Fetch CSRF token from backend API
  const response = await fetchFactory(_req)(url);

  // If successful, extract token from headers and return it
  if (response.status === 200) {
    const token = response.headers.get('x-bs-account-csrf');
    res.status(200).json({ token });
    return;
  }

  // Log error if request fails
  const responseError = { statusText: response.statusText, status: response.status };
  httpLogger.logger.error({ err: responseError, url: _req.url });

  // Return error response
  res.status(500).json(responseError);
}
