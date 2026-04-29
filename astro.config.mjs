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
      logo: {
        src: './public/asilichain_logo.png',
        alt: 'AsiliChain',
        replacesTitle: false,
      },
      favicon: '/favicon.png',
      description: 'Traceability, collateral finance, and EUDR compliance for Africa\'s coffee farmers.',
      components: {
        Header: './src/components/Header.astro',
        PageTitle: './src/components/PageTitle.astro',
        Pagination: './src/components/Pagination.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
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
        themes: ['starlight-dark', 'starlight-light'],
        useStarlightDarkModeSwitch: true,
        defaultProps: {
          overridesByLang: {
            mermaid: { frame: 'none', class: 'mermaid' },
          },
        },
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
          items: [
            { label: 'AsiliChain Protocol', link: '/overview/' },
            { label: 'Executive Summary', link: '/overview/executive-summary' },
            { label: 'Glossary', link: '/overview/glossary' },
            { label: 'The Problem', link: '/overview/the-problem' },
            { label: 'How AsiliChain Works', link: '/overview/how-it-works' },
            { label: 'Eight-Stage Traceability', link: '/overview/traceability' },
            { label: 'Export Certification & Physical Journey', link: '/overview/export-certification' },
            { label: 'Auto-Repayment', link: '/overview/auto-repayment' },
            { label: 'Supply Chain Actors', link: '/overview/supply-chain-actors' },
            { label: 'Government Data Integration', link: '/overview/government-data' },
            { label: 'Collateral & Lending', link: '/overview/collateral-model' },
            { label: 'EUDR Compliance Overview', link: '/overview/eudr' },
            { label: 'Article 4 Mapping', link: '/overview/eudr-requirements' },
            { label: 'DDS Generation Pipeline', link: '/overview/dds-pipeline' },
            { label: 'Ecosystem Overview', link: '/overview/ecosystem/' },
            { label: 'Mantle EcoFund', link: '/overview/ecosystem/mantle-ecofund' },
            { label: 'Bybit Institutional', link: '/overview/ecosystem/bybit-strategy' },
            { label: 'Competitive Landscape', link: '/overview/competitive' },
            { label: 'Three Audiences', link: '/overview/three-lenses' },
            { label: 'MFI Acquisition Strategy', link: '/overview/mfi-strategy' },
            { label: 'Revenue Model', link: '/overview/revenue-model' },
            { label: 'Development Roadmap', link: '/overview/roadmap' },
            { label: 'Projected Metrics', link: '/overview/projected-metrics' },
            { label: 'Africa Expansion', link: '/overview/expansion' },
            { label: 'Conclusion', link: '/overview/conclusion' },
            { label: 'References', link: '/overview/references' },
          ]
        },
        {
          label: 'Developer Docs',
          items: [
            { label: 'Developer Overview', link: '/developer/' },
            { label: 'Project Structure', link: '/developer/project-structure' },
            { label: 'Prerequisites & Stack', link: '/developer/prerequisites' },
            { label: 'Architecture Overview', link: '/developer/architecture' },
            { label: 'Hedera HCS Audit Layer', link: '/developer/hedera-hcs' },
            { label: 'Payment Architecture', link: '/developer/payment-architecture' },
            { label: 'Ethereum & Mantle (ZK L2)', link: '/developer/ethereum-relationship' },
            { label: 'Smart Contracts Index', link: '/developer/contracts' },
            { label: 'LendingVault.sol', link: '/developer/contracts/lending-vault' },
            { label: 'FarmerRegistry.sol', link: '/developer/contracts/farmer-registry' },
            { label: 'BatchToken.sol (ERC-1155)', link: '/developer/contracts/batch-token' },
            { label: 'TraceLog.sol', link: '/developer/contracts/trace-log' },
            { label: 'CreditScore.sol', link: '/developer/contracts/credit-score' },
            { label: 'PurchaseOrder.sol', link: '/developer/contracts/purchase-order' },
            { label: 'ProtocolFee.sol', link: '/developer/contracts/protocol-fee' },
            { label: 'Deployment Guide', link: '/developer/deployment' },
            { label: 'RWA Overview', link: '/developer/rwa/' },
            { label: 'Uganda Warehouse Receipt System', link: '/developer/rwa/uwrsa' },
            { label: 'Mantle TaaS Framework', link: '/developer/rwa/mantle-taas' },
            { label: 'BatchToken Lifecycle', link: '/developer/rwa/batch-token-lifecycle' },
            { label: 'Chainlink', link: '/developer/integrations/chainlink' },
            { label: 'Alchemy', link: '/developer/integrations/alchemy' },
            { label: 'Kotani Pay — Farmer Payouts', link: '/developer/integrations/kotani-pay' },
            { label: 'TransFi — MFI Deposits', link: '/developer/integrations/transfi' },
            { label: 'MAAIF NTS', link: '/developer/integrations/maaif-nts' },
            { label: 'Global Forest Watch', link: '/developer/integrations/gfw' },
            { label: 'Failure Modes', link: '/developer/failure-modes' },
            { label: 'Security & Audit', link: '/developer/security' },
            { label: 'Gas Sponsorship', link: '/developer/gas-sponsorship' },
          ]
        },
        {
          label: 'API Reference',
          items: [
            { label: 'API Introduction', link: '/api-reference/' },
            { label: 'Authentication', link: '/api-reference/authentication' },
            { label: 'Errors', link: '/api-reference/errors' },
            { label: 'Register Farmer', link: '/api-reference/farmers/register' },
            { label: 'Get Farmer', link: '/api-reference/farmers/get' },
            { label: 'Get Credit Score', link: '/api-reference/farmers/credit-score' },
            { label: 'POST /batch/submit', link: '/api-reference/batch/submit' },
            { label: 'Get Batch', link: '/api-reference/batch/get' },
            { label: 'Update Batch Stage', link: '/api-reference/batch/stage-update' },
            { label: 'POST /eudr/generate-dds', link: '/api-reference/eudr/generate-dds' },
            { label: 'Get DDS', link: '/api-reference/eudr/get-dds' },
            { label: 'Verify GFW Status', link: '/api-reference/eudr/verify-gfw' },
            { label: 'Farmer Payout', link: '/api-reference/payments/payout' },
            { label: 'MFI Deposit', link: '/api-reference/payments/deposit' },
            { label: 'Payment Status', link: '/api-reference/payments/status' },
            { label: 'Webhooks Overview', link: '/api-reference/webhooks/' },
            { label: 'Webhook Event Reference', link: '/api-reference/webhooks/events' },
          ]
        },
        {
          label: 'Legal',
          items: [
            { label: 'Data Privacy', link: '/legal/data-privacy' },
            { label: 'Regulatory Architecture', link: '/legal/regulatory' },
          ]
        },
        {
          label: 'Brand',
          items: [
            { label: 'Brand Kit', link: '/brand/' },
          ]
        },
      ],
    }),
  ],
});