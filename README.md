# Adventure Layer Blockscout frontend

## Project Overview

Adventure Layer Blockscout frontend update to the Blockscout-based browser frontend focuses on improving user interface (UI) elements to enhance the user experience, making it more intuitive and visually appealing. One of the key improvements is the integration of AGLD token conversion, which allows users to view and interact with the exchange rates of AGLD in various denominations, facilitating smoother interactions with the token across different platforms. Furthermore, the update includes the ability to switch seamlessly between different versions of the browser, providing users with greater flexibility when navigating between different environments or instances of the Blockscout interface. These changes aim to streamline the overall functionality and performance of the platform, ensuring that users can access token-related information and perform transactions more efficiently.

## Core Features & Functionality

### Blockchain Data Exploration
- **Block Explorer**: View detailed information about blocks, transactions, and addresses
- **Real-time Updates**: Live tracking of new blocks and transactions
- **Advanced Search**: Search by block number, transaction hash, address, or token

### Smart Contract Tools
- **Contract Verification**: Verify and publish smart contract source code
- **Contract Interaction**: Read and write contract functions through the UI
- **Custom ABI Management**: Save and manage custom contract ABIs
- **Source Code Viewer**: Browse verified contract source code with syntax highlighting

### Account Management
- **Watchlist**: Track addresses and transactions of interest
- **API Key Management**: Generate and manage API keys for data access
- **Address Tags**: Create private tags for easy address identification
- **Address Verification**: Verify ownership of blockchain addresses

### Token Features
- **Token Lists**: View all tokens on the network
- **Token Transfers**: Track token transfer history
- **Token Info**: Detailed token information including holders and transactions
- **NFT Support**: Browse NFT collections and individual tokens

### Developer Tools
- **API Documentation**: Interactive API documentation with Swagger UI
- **GraphQL Interface**: Built-in GraphQL explorer
- **Metrics & Monitoring**: Prometheus metrics endpoint for monitoring
- **Logging System**: Comprehensive request and error logging

## Directory Structure

```
blockscout-frontend/
├── pages/          # Next.js pages and API routes
│   ├── account/   # Account management features
│   ├── api/       # API endpoints and proxies
│   ├── block/     # Block explorer pages
│   └── tx/        # Transaction pages
├── ui/            # React components and pages
│   ├── shared/    # Reusable components
│   ├── pages/     # Page-specific components
│   └── theme/     # UI theming and styles
├── lib/           # Core business logic
│   ├── api/       # API integration
│   ├── token/     # Token-related logic
│   └── web3/      # Blockchain interaction
├── configs/       # Configuration files
├── public/        # Static assets
└── tools/         # Development tools
```

## Key Features

- Blockchain data exploration
- Transaction tracking and analysis
- Smart contract interaction
- Token management and tracking
- API documentation and integration
- Multi-network support
- Dark/Light theme support
- Responsive design

## Technology Stack

- **Framework**: Next.js 14+
- **UI Library**: React 18+
- **Styling**: Chakra UI
- **State Management**: TanStack Query
- **Language**: TypeScript
- **Testing**: Jest & Playwright
- **Container**: Docker
- **Package Manager**: Yarn
- **CI/CD**: GitHub Actions

## Development Setup

### Prerequisites

- Node.js 20.11.0+
- NPM 10.2.4+
- Docker (for production builds)

### Local Development

1. Clone the repository:
```sh
git clone https://github.com/blockscout/frontend.git
cd frontend
```

2. Install dependencies:
```sh
yarn install
```

3. Configure environment:
   - Create `.env.local` file with required variables from docs/ENVS.md
   - Or use predefined configurations from `/configs/envs/`

4. Start development server:
```sh
# With custom configuration
yarn dev

# With predefined configuration
yarn dev:preset <config_preset_name>
```

## Production Deployment

### Using Docker

1. Build the image:
```sh
yarn build:docker
```

2. Run the container:
```sh
docker run -p 3000:3000 --env-file <path-to-your-env-file> ghcr.io/blockscout/frontend:latest
```

### Using Kubernetes

The project includes Helm charts for Kubernetes deployment. See `/deploy/helmfile.yaml` for configuration details.

## Testing

```sh
# Run Jest unit tests
yarn test:jest

# Run Playwright component tests
yarn test:pw:local    # Local environment
yarn test:pw:docker   # Docker environment
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for detailed guidelines.

## Environment Variables

All environment variables are documented in [ENVS.md](./docs/ENVS.md). Required variables must be properly configured for the application to function correctly.

## License

[![License: GPL v3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Resources

- [App ENVs list](./docs/ENVS.md)
- [Contribution guide](./docs/CONTRIBUTING.md)
- [Custom build guide](./docs/CUSTOM_BUILD.md)
- [Frontend migration guide](https://docs.blockscout.com/for-developers/frontend-migration)
- [Manual deployment guide](https://docs.blockscout.com/for-developers/deployment/manual-deployment-guide)
