# AsiliChain Protocol — Documentation

**Status:** Pre-launch · Phase 1 pilot targeting Q3 2026  
**Live docs:** [asilichain.github.io/docs](https://asilichain.github.io/docs)  
**Contact:** [hello@asilichain.xyz](mailto:hello@asilichain.xyz)

---

## What is AsiliChain?

AsiliChain is a DeFi infrastructure protocol for Uganda's 3.5 million
smallholder coffee farmers. It converts government GPS farm data —
collected for EU Deforestation Regulation (EUDR) compliance — into
working capital credit, 60-second mobile payments, and automated
Due Diligence Statements.

The same GPS coordinate that satisfies a European auditor unlocks
a farmer's first formal credit relationship.

**Core products:**
- Working capital loans at 14–18% APR against coffee batch collateral
  (vs. 60–120% from informal lenders)
- 60-second payment to MTN Mobile Money via USSD — no smartphone required
- Automated EUDR Due Diligence Statements filed to EU TRACES
- On-chain credit history, portable across cooperatives and lenders

**Built on:** Mantle Network (Ethereum ZK L2) · Hedera HCS · Kotani Pay · MAAIF NTS

---

## This Repository

This repo contains the AsiliChain protocol documentation site,
built with [Astro](https://astro.build) and
[Starlight](https://starlight.astro.build).

The smart contracts, API, and agent app are in separate repositories.

### Running locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:4321/docs

# Build for production
npm run build

# Preview production build
npm run preview
```

### Repository structure
```
src/
├── content/docs/
│   ├── overview/          # Protocol overview, economics, roadmap
│   ├── developer/         # Smart contracts, integrations, deployment
│   ├── api-reference/     # API endpoints, webhooks, authentication
│   ├── legal/             # Data privacy, regulatory architecture
│   └── brand/             # Brand kit
├── components/            # Custom Astro components
│   ├── Header.astro       # Site header with nav links
│   ├── Pagination.astro   # Custom prev/next navigation
│   └── ThemeSelect.astro  # System theme sync (no manual picker)
└── css/
    └── custom.css         # Coffee brown design system
public/
├── asilichain_logo.png    # Primary logo
└── favicon.png           # Browser favicon
astro.config.mjs          # Astro + Starlight configuration
```

---

## Protocol Architecture (summary)

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Smart contracts | 7 UUPS Solidity contracts on Mantle (chainId 5000) | Lending, collateral, traceability, fees |
| Audit log | Hedera HCS | Immutable stage events, regulatory-grade audit trail |
| Farmer payments | Kotani Pay → MTN Mobile Money | USDC → UGX in under 60 seconds |
| MFI deposits | TransFi | Bank wire → USDC → LendingVault |
| Farmer data | MAAIF National Traceability System | GPS farm boundaries, farmer IDs |
| Deforestation check | Global Forest Watch API | EUDR Article 4 compliance |
| Price feeds | Chainlink AggregatorV3 | Coffee/USD collateral valuation |

**No cross-chain bridges. All contracts on Mantle. Annual gas cost per cooperative: ~$7.**

---

## Key Links

| Resource | Link |
|----------|------|
| Full documentation | [asilichain.github.io/docs](https://asilichain.github.io/docs) |
| Protocol overview | [/overview](https://asilichain.github.io/docs/overview) |
| Smart contract architecture | [/developer](https://asilichain.github.io/docs/developer) |
| API reference | [/api-reference](https://asilichain.github.io/docs/api-reference) |
| Competitive landscape | [/overview/competitive](https://asilichain.github.io/docs/overview/competitive) |
| Development roadmap | [/overview/roadmap](https://asilichain.github.io/docs/overview/roadmap) |
| GitHub (this repo) | [github.com/AsiliChain/docs](https://github.com/AsiliChain/docs) |
| Contact | [hello@asilichain.xyz](mailto:hello@asilichain.xyz) |

---

## Contributing

This documentation reflects the current protocol design.
If you find factual errors, outdated information, or gaps,
open an issue or submit a pull request.

Substantive content changes (new pages, protocol corrections)
should include a brief explanation of what changed and why.

---

## License

Documentation content © AsiliChain 2026.
Code in this repository (Astro config, components, CSS) is MIT licensed.

---

*AsiliChain is pre-launch. The protocol described in these docs is
documented design awaiting Phase 1 pilot. The milestone that validates
it is 50 loans auto-repaid on Mantle mainnet with a live Uganda cooperative.
Target: Q3 2026.*