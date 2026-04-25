// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://asilichain.github.io',
  base: '/docs',
  trailingSlash: 'never',
  integrations: [
    mermaid({
      theme: 'default',
      autoTheme: true,
    }),
    starlight({
      title: 'AsiliChain',
      description: 'Traceability, collateral finance, and EUDR compliance for Africa\'s coffee farmers.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AsiliChain' },
        { icon: 'email', label: 'Contact', href: 'mailto:hello@asilichain.xyz' },
      ],
      editLink: {
        baseUrl: 'https://github.com/AsiliChain/docs/edit/main/',
      },
      pagefind: true,
      defaultLocale: 'en',
      customCss: ['./src/css/custom.css'],
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#4B2E0A' } },
      ],
      expressiveCode: {
        shikiConfig: {
          langs: [],
        },
        themes: ['starlight-dark', 'starlight-light'],
      },
      plugins: [
        starlightOpenAPI([
          {
            base: 'api-reference/generated',
            schema: './public/api/openapi.yaml',
            sidebar: {
              label: 'API (Generated)',
              collapsed: false,
              operations: {
                badges: true },
            },
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Overview',
          collapsed: false,
          autogenerate: { directory: 'overview' },
        },
        {
          label: 'Developer Docs',
          collapsed: false,
          autogenerate: { directory: 'developer' },
        },
        {
          label: 'API Reference',
          collapsed: false,
          autogenerate: { directory: 'api-reference' },
        },
        {
          label: 'Legal',
          collapsed: false,
          autogenerate: { directory: 'legal' },
        },
        {
          label: 'Brand',
          collapsed: false,
          autogenerate: { directory: 'brand' },
        },
      ],
    }),
  ],
});