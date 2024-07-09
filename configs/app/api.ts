import stripTrailingSlash from 'lib/stripTrailingSlash';

import { alNetworkConfig } from './al_config';
import { getEnvValue } from './utils';

const apiHost = getEnvValue('NEXT_PUBLIC_API_HOST');
const apiSchema = getEnvValue('NEXT_PUBLIC_API_PROTOCOL') || 'https';
const apiPort = getEnvValue('NEXT_PUBLIC_API_PORT');
const apiEndpoint = [
  apiSchema || 'https',
  '://',
  apiHost,
  apiPort && ':' + apiPort,
].filter(Boolean).join('');

const socketSchema = getEnvValue('NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL') || 'wss';
const socketEndpoint = [
  socketSchema,
  '://',
  apiHost,
  apiPort && ':' + apiPort,
].filter(Boolean).join('');

// Object.freeze()
const api = {
  host: apiHost,
  protocol: apiSchema,
  port: apiPort,
  endpoint: apiEndpoint,
  socket: socketEndpoint,
  basePath: stripTrailingSlash(getEnvValue('NEXT_PUBLIC_API_BASE_PATH') || ''),
};

export const updatePublicApi = (obj: any) => {
  // console.log('updatePublicApi', obj)
  api.host = obj.host;
  api.protocol = obj.protocol;
  api.port = obj.port;
  api.endpoint = obj.endpoint;
  api.socket = obj.socket;
};

// console.log('Load public API')
if (typeof window !== 'undefined') {
  const sn = localStorage.getItem('al_network');
  if (sn && sn in alNetworkConfig) {
    updatePublicApi(alNetworkConfig[sn]);
  }
}

export default api;
