<h1 align="center">Blockscout frontend</h1>

<p align="center">
    <span>Frontend application for </span>
    <a href="https://github.com/blockscout/blockscout/blob/master/README.md">Blockscout</a>
    <span> blockchain explorer</span>
</p>

## Project Overview

Blockscout Frontend is a modern web application that serves as the user interface for the Blockscout blockchain explorer. It provides a comprehensive interface for exploring blockchain data, transactions, smart contracts, and more.

## Directory Structure

```
blockscout-frontend/
├── configs/         # Configuration files and environment presets
├── deploy/          # Deployment configurations and scripts
├── docs/           # Project documentation
├── icons/          # SVG icons source files
├── jest/           # Jest test utilities and configurations
├── playwright/     # Playwright test configurations
├── public/         # Static assets
│   ├── assets/    # Dynamic assets generated during build
│   ├── icons/     # Compiled SVG sprite
│   └── static/    # Static files
├── tools/          # Development and build tools
└── ui/            # React components and UI logic
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
