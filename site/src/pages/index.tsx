import type {LucideIcon} from 'lucide-react';
import type {ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {motion, useInView} from 'framer-motion';
import {
  Building2,
  CheckCircle,
  Coins,
  CreditCard,
  FileText,
  MapPin,
  Package,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';
import styles from './index.module.css';

type StageTone = 'green' | 'amber' | 'teal';

type Stage = {
  step: string;
  label: string;
  tone: StageTone;
  detail: string;
  hash: string;
  icon: LucideIcon;
};

type Audience = {
  id: 'coops' | 'mfi' | 'buyers';
  title: string;
  Icon: LucideIcon;
  benefits: string[];
  techAccent: string;
};

const springEase = [0.34, 1.2, 0.64, 1] as const;

const metricCards = [
  {
    value: 3.5,
    prefix: '',
    suffix: 'M',
    label: 'Farmers Targeted',
    sub: 'Uganda coffee sector',
    tone: 'green',
    hash: '0x3a7f...c9d2',
  },
  {
    value: 2.4,
    prefix: '$',
    suffix: 'B',
    label: 'Uganda Exports',
    sub: 'FY2024-25 · National market context',
    tone: 'amber',
    hash: '0xa1d2...4fe8',
  },
  {
    value: 3,
    prefix: '',
    suffix: ' Chains',
    label: '3-Chain Architecture',
    sub: 'Celo + Mantle + Hedera',
    tone: 'teal',
    hash: '0x88bc...09af',
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Ready',
    sub: 'DDS Auto-Generated · EUDR compliance pipeline',
    tone: 'green',
    hash: '0x71ce...aa0d',
  },
] as const;

const audienceCards: Audience[] = [
  {
    id: 'coops',
    title: 'For Cooperatives',
    Icon: Users,
    benefits: [
      'Digitized farmer operations',
      'Cleaner batch tracking',
      'Improved payout confidence',
    ],
    techAccent: 'Active batches: 1,247',
  },
  {
    id: 'mfi',
    title: 'For MFIs & Lenders',
    Icon: Building2,
    benefits: [
      'GPS-verified collateral',
      'Auto-repaying loans (<5% default)',
      'Real-time monitoring',
    ],
    techAccent: 'Total value locked: $2.4M',
  },
  {
    id: 'buyers',
    title: 'For EU Buyers',
    Icon: ShieldCheck,
    benefits: [
      'Auto-generated EUDR DDS',
      'Full chain of custody',
      'GFW deforestation check',
    ],
    techAccent: 'Compliant batches: 100%',
  },
];

const stageFlow: Stage[] = [
  {
    step: '01',
    label: 'Farm Registration',
    tone: 'green',
    detail: 'Farmer profile, boundaries, and identity anchored.',
    hash: '0x1a3b...c4d5',
    icon: MapPin,
  },
  {
    step: '02',
    label: 'Field Verification',
    tone: 'green',
    detail: 'Field metadata and crop status validated.',
    hash: '0x22be...77af',
    icon: CheckCircle,
  },
  {
    step: '03',
    label: 'Pre-Harvest Financing',
    tone: 'amber',
    detail: 'Lenders underwrite against verified crop progress.',
    hash: '0x90df...3c1a',
    icon: Coins,
  },
  {
    step: '04',
    label: 'Harvest and Grading',
    tone: 'amber',
    detail: 'Yield and quality linked to tokenized lot records.',
    hash: '0x5dca...1ea9',
    icon: Package,
  },
  {
    step: '05',
    label: 'Warehouse Receipt',
    tone: 'teal',
    detail: 'Warehouse receipt minted and collateralized.',
    hash: '0xc8e1...208f',
    icon: Building2,
  },
  {
    step: '06',
    label: 'DDS Assembly',
    tone: 'teal',
    detail: 'Compliance package assembled from immutable records.',
    hash: '0x6a44...f3d1',
    icon: FileText,
  },
  {
    step: '07',
    label: 'Regulatory Review',
    tone: 'teal',
    detail: 'Validation checks completed against policy rules.',
    hash: '0xe14b...8a2e',
    icon: Shield,
  },
  {
    step: '08',
    label: 'Buyer Settlement',
    tone: 'teal',
    detail: 'Settlement and disbursement close the financing loop.',
    hash: '0xfb2a...4a70',
    icon: CreditCard,
  },
];

function CountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {once: true, margin: '-40px'});
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const duration = 1000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SparklineIcon() {
  return (
    <svg viewBox="0 0 100 28" aria-hidden="true" className={styles.sparkline}>
      <polyline points="2,18 20,14 36,16 54,7 70,12 98,4" />
    </svg>
  );
}

function HomepageContent() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState<Audience['id']>('coops');

  const whitepaperUrl = useBaseUrl('docs/whitepaper');
  const explorerUrl = useBaseUrl('docs/collateral-model');
  const coopUrl = useBaseUrl('docs/three-lenses/cooperatives-and-unions');
  const mfiUrl = useBaseUrl('docs/three-lenses/mfi-and-impact-investors');
  const buyerUrl = useBaseUrl('docs/three-lenses/european-buyers-and-auditors');

  const flowRef = useRef<HTMLDivElement>(null);
  const flowInView = useInView(flowRef, {once: true, amount: 0.25});

  const selected = audienceCards.find((card) => card.id === selectedAudience) ?? audienceCards[0];
  const selectedHref =
    selected.id === 'coops' ? coopUrl : selected.id === 'mfi' ? mfiUrl : buyerUrl;

  return (
    <>
      <header className={styles.heroBanner}>
        <div className={styles.heroBackdrop} />
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroCopy}
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.35}}
            >
              <div className={styles.kicker}>AsiliChain Protocol · block #298774</div>
              <Heading as="h1" className={styles.heroTitle}>
                Underwriting Infrastructure for Africa&apos;s Smallholder Coffee Economy
              </Heading>
              <p className={styles.heroSubtitle}>
                Web3-native infrastructure that links traceability, tokenized collateral, and compliance.
              </p>
              <div className={styles.heroButtons}>
                <Link to={whitepaperUrl} className={`button button--lg ${styles.primaryButton} interactive-button`}>
                  Start Exploring
                </Link>
                <button
                  type="button"
                  className={`button button--lg ${styles.secondaryButton} interactive-button`}
                  onClick={() => setIsDemoOpen(true)}
                >
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.35, delay: 0.05}}
            >
              <div className={styles.heroVisualCard}>
                <div className={styles.visualStatusLine}>
                  <span className={styles.statusDot} />
                  <span>SYNC STATUS: ACTIVE</span>
                </div>
                <img src={useBaseUrl('/img/Logo.png')} alt="AsiliChain logo" className="interactive-logo" />
                <p>Traceability + financing + compliance in one coordinated execution layer.</p>
                <div className={styles.visualMeta}>
                  <span>Celo</span>
                  <span>Mantle</span>
                  <span>Hedera HCS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.sectionShellAlt}>
          <div className="container">
            <div className={styles.metricGrid}>
              {metricCards.map((metric, idx) => (
                <motion.article
                  key={metric.label}
                  className={`${styles.metricCard} ${styles[metric.tone]} interactive-card`}
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.3}}
                  transition={{duration: 0.35, delay: idx * 0.1}}
                  whileHover={{y: -4, scale: 1.02}}
                  whileTap={{scale: 0.99}}
                >
                  <span className={`${styles.cardAccentLine} ${styles[metric.tone]}`} aria-hidden="true" />
                  <div className={styles.cardTopline}>
                    <span className={`${styles.statusDot} ${styles.pulseDot}`} />
                    <small>{metric.hash}</small>
                    <SparklineIcon />
                  </div>
                  <strong>
                    <CountUp
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      decimals={metric.value % 1 === 0 ? 0 : 1}
                    />
                  </strong>
                  <span>{metric.label}</span>
                  <small>{metric.sub}</small>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionShell}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Choose your role to jump to the most relevant implementation path.</Heading>
            </div>

            <div className={styles.selectorTabs}>
              {audienceCards.map((card) => {
                const Icon = card.Icon;
                const isActive = selectedAudience === card.id;

                return (
                  <button
                    key={card.id}
                    type="button"
                    className={`${styles.selectorTab} interactive-tab ${isActive ? `${styles.selectorTabActive} active` : ''}`}
                    onClick={() => setSelectedAudience(card.id)}
                    aria-pressed={isActive}
                  >
                    <Icon size={17} />
                    {card.title}
                  </button>
                );
              })}
            </div>

            <motion.article
              key={selected.id}
              className={`${styles.selectorPanel} interactive-card`}
              initial={{opacity: 0, scale: 0.985}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.2, ease: springEase}}
              whileHover={{y: -3, scale: 1.01}}
              whileTap={{scale: 0.99}}
            >
              <div className={styles.selectorHeaderRow}>
                <selected.Icon size={20} />
                <Heading as="h3" className={styles.cardTitle}>
                  {selected.title}
                </Heading>
              </div>
              <ul>
                {selected.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <div className={styles.techAccent}>{selected.techAccent}</div>
              <Link to={selectedHref} className={`${styles.inlineLink} interactive-link`}>
                Learn More →
              </Link>
            </motion.article>
          </div>
        </section>

        <section className={styles.sectionShell}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">From Farm to EUDR: Complete Traceability</Heading>
              <p>Every stage recorded on-chain, every batch verifiable</p>
            </div>

            <div className={styles.flowFrame} ref={flowRef}>
              <div className={styles.flowTrack}>
                {stageFlow.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <motion.article
                      key={stage.step}
                      className={`${styles.flowItem} interactive-node`}
                      initial={{opacity: 0, y: 12}}
                      animate={flowInView ? {opacity: 1, y: 0} : {}}
                      transition={{duration: 0.3, delay: idx * 0.05}}
                      whileHover={{scale: 1.08, y: -4}}
                      whileTap={{scale: 0.98}}
                    >
                      <div className={styles.flowMetaLine}>
                        <span className={`${styles.statusDot} ${styles.pulseDot}`} />
                        <small>{stage.hash}</small>
                      </div>

                      <div className={styles.flowNodeWrap}>
                        <div className={`${styles.flowCircle} ${styles[stage.tone]}`}>
                          <span className={styles.flowStep}>{stage.step}</span>
                          <Icon size={13} />
                        </div>
                        {idx < stageFlow.length - 1 && (
                          <motion.span
                            className={`${styles.flowConnector} ${styles[stage.tone]}`}
                            initial={{scaleX: 0}}
                            animate={flowInView ? {scaleX: 1} : {}}
                            transition={{duration: 0.4, delay: idx * 0.05}}
                            aria-hidden="true"
                          >
                            <span className={styles.travelDot} />
                          </motion.span>
                        )}
                      </div>

                      <span className={styles.flowLabel}>{stage.label}</span>
                      <div className={styles.flowTooltip} role="tooltip">
                        {stage.detail}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className={styles.centerCta}>
              <Link className={`${styles.inlineLink} interactive-button`} to={explorerUrl}>
                View Interactive Explorer →
              </Link>
              <div className={styles.chainBadges}>
                <span>Celo</span>
                <span>Mantle</span>
                <span>Hedera HCS</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionShellAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Built on Government Data</Heading>
            </div>
            <div className={styles.govFlowRow}>
              <div className={`${styles.govNode} interactive-card`}>MAAIF NTS (Uganda)</div>
              <div className={styles.govArrow} aria-hidden="true">→</div>
              <div className={`${styles.govNodePrimary} interactive-card`}>AsiliChain Data Layer</div>
              <div className={styles.govArrow} aria-hidden="true">→</div>
              <div className={styles.govChains}>
                <span className="interactive-card">Celo</span>
                <span className="interactive-card">Mantle</span>
                <span className="interactive-card">Hedera HCS</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionShell}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Core Pillars</Heading>
            </div>
            <div className={styles.pillarsGrid}>
              <article className={`${styles.pillarCard} interactive-card`}>
                <h3>Traceable</h3>
                <p>Farm gate to buyer with verifiable origin and custody records.</p>
              </article>
              <article className={`${styles.pillarCard} interactive-card`}>
                <h3>Tokenized</h3>
                <p>Collateral-linked financing for pre-harvest and warehouse inventory.</p>
              </article>
              <article className={`${styles.pillarCard} interactive-card`}>
                <h3>Tradable</h3>
                <p>Compliance-native data rails aligned with EUDR due diligence workflows.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {isDemoOpen && (
        <div className={styles.modalOverlay} role="presentation" onClick={() => setIsDemoOpen(false)}>
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-label="AsiliChain demo"
            onClick={(event) => event.stopPropagation()}
          >
            <Heading as="h3">AsiliChain Product Demo</Heading>
            <p>
              Demo placeholder: add your demo video URL. Suggested destination{' '}
              <Link href="https://www.youtube.com/@AsiliChain">AsiliChain YouTube</Link>.
            </p>
            <button
              type="button"
              className={`button ${styles.secondaryButton} interactive-button`}
              onClick={() => setIsDemoOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Underwriting infrastructure for Africa's smallholder coffee economy.">
      <HomepageContent />
    </Layout>
  );
}
