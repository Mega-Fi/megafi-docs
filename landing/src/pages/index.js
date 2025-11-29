import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/intro">
            Get Started with MegaFi
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/hedge/overview"
            style={{marginLeft: '1rem'}}>
            Explore Options Trading
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--secondary button--sm" to={link}>
          Learn More →
        </Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            title="Hedge - Options Trading"
            description="Trade options with sub-10ms execution, real-time Greeks, and capital-efficient collateral. Institutional-grade risk management for everyone."
            link="/hedge/overview"
          />
          <Feature
            title="Auto-Pools - Automated Strategies"
            description="Deploy automated strategies that continuously rebalance positions, optimize ranges, and maximize yield 24/7 without manual intervention."
            link="/auto-pools/overview"
          />
          <Feature
            title="DEX - Trading & Liquidity"
            description="Swap tokens and provide liquidity with concentrated capital efficiency up to 95%. Earn fees on every trade through optimized zones."
            link="/dex/overview"
          />
        </div>
      </div>
    </section>
  );
}

function PerformanceMetrics() {
  return (
    <section className={styles.performance}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Built on MegaETH Performance</Heading>
          <p>Real-time DeFi powered by the fastest blockchain</p>
        </div>
        <div className="row">
          <div className="col col--3">
            <div className={styles.metric}>
              <div className={styles.metricValue}>100,000+</div>
              <div className={styles.metricLabel}>TPS</div>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.metric}>
              <div className={styles.metricValue}>&lt; 10ms</div>
              <div className={styles.metricLabel}>Finality</div>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.metric}>
              <div className={styles.metricValue}>&lt; $0.005</div>
              <div className={styles.metricLabel}>Gas Cost</div>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.metric}>
              <div className={styles.metricValue}>99.99%</div>
              <div className={styles.metricLabel}>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.linkCard}>
              <Heading as="h3">📚 Documentation</Heading>
              <p>Comprehensive guides covering all aspects of MegaFi</p>
              <ul>
                <li><Link to="/getting-started/welcome">Getting Started</Link></li>
                <li><Link to="/hedge/options-trading">Options Trading Guide</Link></li>
                <li><Link to="/dex/providing-liquidity">Liquidity Provision</Link></li>
                <li><Link to="/auto-pools/strategy-modes">Automated Strategies</Link></li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.linkCard}>
              <Heading as="h3">🔧 Technical</Heading>
              <p>Architecture, contracts, and integration resources</p>
              <ul>
                <li><Link to="/technical/architecture">System Architecture</Link></li>
                <li><Link to="/technical/smart-contracts">Smart Contracts</Link></li>
                <li><Link to="/technical/security-audits">Security & Audits</Link></li>
                <li><Link to="/reference/glossary">Glossary</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Real-time options trading and DeFi infrastructure on MegaETH. Sub-10ms execution, automated strategies, and institutional-grade tools.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <PerformanceMetrics />
        <QuickLinks />
      </main>
    </Layout>
  );
}
