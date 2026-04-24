// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

export default defineConfig({
  site: 'https://asilichain.github.io/docs',
  base: '.',
  trailingSlash: 'never',
  integrations: [
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
        // ── OVERVIEW ──────────────────────────────────────
        {
          label: 'Overview',
          collapsed: false,
          autogenerate: { directory: 'overview' },
        },
        // ── DEVELOPER DOCS ────────────────────────────────
        {
          label: 'Developer Docs',
          collapsed: false,
          autogenerate: { directory: 'developer' },
        },
        // ── API REFERENCE ─────────────────────────────────
        {
          label: 'API Reference',
          collapsed: false,
          autogenerate: { directory: 'api-reference' },
        },
        // ── LEGAL ───────────────────────────────────────
        {
          label: 'Legal',
          collapsed: false,
          autogenerate: { directory: 'legal' },
        },
        // ── BRAND ───────────────────────────────────────
        {
          label: 'Brand',
          collapsed: false,
          autogenerate: { directory: 'brand' },
        },
      ],
    }),
  ],
});