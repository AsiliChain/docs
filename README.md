# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## GitHub Pages

To build for GitHub Pages while keeping the custom domain as the default, set the deployment variables at build time:

```bash
SITE_URL=https://AsiliChain.github.io BASE_URL=/docs/ yarn build
```

For automated GitHub Pages publishing, keep the Docusaurus `deploy` command and point it at the repository branch that hosts Pages content.
