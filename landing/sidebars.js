// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/welcome',
        'getting-started/overview',
      ],
    },
    {
      type: 'category',
      label: 'Hedge (Options Trading)',
      collapsed: false,
      items: [
        'hedge/overview',
        'hedge/options-trading',
        'hedge/hedging-strategies',
        'hedge/risk-management',
        'hedge/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Auto-Pools (Automated Management)',
      collapsed: false,
      items: [
        'auto-pools/overview',
        'auto-pools/strategy-modes',
        'auto-pools/automated-rebalancing',
        'auto-pools/range-optimization',
        'auto-pools/architecture',
        'auto-pools/performance-tracking',
      ],
    },
    {
      type: 'category',
      label: 'DEX (Trading & Liquidity)',
      collapsed: false,
      items: [
        'dex/overview',
        'dex/pools',
        'dex/ticks',
        'dex/swapping',
        'dex/providing-liquidity',
        'dex/lp-nfts',
        'dex/fees-and-rewards',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      collapsed: true,
      items: [
        'technical/smart-contracts',
        'technical/contract-addresses',
        'technical/security-audits',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/glossary',
        'reference/limits-and-constraints',
        'reference/supported-tokens',
      ],
    },
  ],
};

export default sidebars;
