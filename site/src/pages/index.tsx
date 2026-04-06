import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const introUrl = useBaseUrl('docs/intro');
  const executiveSummaryUrl = useBaseUrl('docs/executive-summary');
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackdrop} />
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>African coffee supply chains</div>
            <Heading as="h1" className={styles.heroTitle}>
              AsiliChain brings end-to-end traceability, collateral-backed finance, and regulatory compliance to African coffee supply chains.
            </Heading>
            <p className={styles.heroSubtitle}>
              Built to connect farmers, suppliers, lenders, regulators and buyers with a single trusted chain of custody from origin to settlement.
            </p>
            <div className={styles.heroPills}>
              <span>Traceable</span>
              <span>Tokenized</span>
              <span>Tradable</span>
            </div>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to={introUrl}>
                Explore the Whitepaper
              </Link>
              <Link className="button button--outline button--lg" to={executiveSummaryUrl}>
                Read the Executive Summary
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.statCard}>
              <span>Traceability</span>
              <strong>Farm gate to final buyer</strong>
              <p>Track origin, quality, movement, and custody across every handoff.</p>
            </div>
            <div className={styles.statCard}>
              <span>Finance</span>
              <strong>Collateral-backed liquidity</strong>
              <p>Unlock working capital against verified inventory and receivables.</p>
            </div>
            <div className={styles.statCard}>
              <span>Compliance</span>
              <strong>Structured for regulation</strong>
              <p>Support documentation, auditability, and policy alignment by design.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="AsiliChain brings end-to-end traceability, collateral-backed finance, and regulatory compliance to African coffee supply chains.">
      <HomepageHeader />
    </Layout>
  );
}
