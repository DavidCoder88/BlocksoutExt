// 52.206.132.165:8588 对应链：chainid：242069, http://3.84.203.161:8515 ws://3.84.203.161:8516
// 54.145.142.106:8588 对应链：chainid：12340111 http://3.84.203.161:8547  ws://3.84.203.161:8548
// 52.90.225.30:8588 对应链： chainid：12340112, http://3.84.203.161:8557  ws://3.84.203.161:8558
export const alNetworkConfig: any = {
  l2: {
    host: 'explorer-devnet.adventurelayer.dev',
    protocol: 'https',
    port: '',
    endpoint: 'https://explorer-devnet.adventurelayer.dev',
    socket: 'wss://explorer-devnet.adventurelayer.dev',
    basePath: '/l2',
  },
  shard1: {
    host: 'explorer-devnet.adventurelayer.dev',
    protocol: 'https',
    port: '',
    endpoint: 'https://explorer-devnet.adventurelayer.dev',
    socket: 'wss://explorer-devnet.adventurelayer.dev',
    basePath: '/shard1',
  },
  shard2: {
    host: 'explorer-devnet.adventurelayer.dev',
    protocol: 'https',
    port: '',
    endpoint: 'https://explorer-devnet.adventurelayer.dev',
    socket: 'wss://explorer-devnet.adventurelayer.dev',
    basePath: '/shard2',
  },
  // l2: {
  //   host: '52.206.132.165',
  //   protocol: 'http',
  //   port: '8588',
  //   endpoint: 'http://52.206.132.165:8588',
  //   socket: 'ws://52.206.132.165:8588',
  //   basePath: 'l2',
  // },
  // shard1: {
  //   host: '54.145.142.106',
  //   protocol: 'http',
  //   port: '8588',
  //   endpoint: 'http://54.145.142.106:8588',
  //   socket: 'ws://54.145.142.106:8588',
  //   basePath: 'shard1',
  // },
  // shard2: {
  //   host: '52.90.225.30',
  //   protocol: 'http',
  //   port: '8588',
  //   endpoint: 'http://52.90.225.30:8588',
  //   socket: 'ws://52.90.225.30:8588',
  //   basePath: 'shard2',
  // },
};
