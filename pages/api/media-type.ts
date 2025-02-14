import type { NextApiRequest, NextApiResponse } from 'next';
import nodeFetch from 'node-fetch';

import { httpLogger } from 'nextjs/utils/logger';

import metrics from 'lib/monitoring/metrics';
import getQueryParamString from 'lib/router/getQueryParamString';

// Media type detection endpoint
// Determines the type of media (video, image, html) from a given URL
// Used for content preview and rendering decisions
export default async function mediaTypeHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get URL from query parameters
    const url = getQueryParamString(req.query.url);

    // Start timing the request for metrics
    const end = metrics?.apiRequestDuration.startTimer();
    // Make HEAD request to get content type
    const response = await nodeFetch(url, { method: 'HEAD' });
    const duration = end?.({ route: '/media-type', code: response.status });

    // Handle failed requests
    if (response.status !== 200) {
      httpLogger.logger.error({ message: 'API fetch', url, code: response.status, duration });
      throw new Error();
    }

    // Determine media type from content-type header
    const contentType = response.headers.get('content-type');
    const mediaType = (() => {
      if (contentType?.startsWith('video')) {
        return 'video';
      }

      if (contentType?.startsWith('image')) {
        return 'image';
      }

      if (contentType?.startsWith('text/html')) {
        return 'html';
      }
    })();
    // Log successful request
    httpLogger.logger.info({ message: 'API fetch', url, code: response.status, duration });

    res.status(200).json({ type: mediaType });
  } catch (error) {
    // Return undefined type if request fails
    res.status(200).json({ type: undefined });
  }
}
