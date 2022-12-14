import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <iframe
    src="https://player.twitch.tv/?channel=JEIPEY&parent=JEIPEY.github.io&muted=true"
    height="400"
    width="720"
    align="middle">
    </iframe>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Ознакомиться
          </Link>
          
        </div>
      </div>
      
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <Layout 
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        
        <HomepageFeatures />
      </main>

    </Layout>

  );
}
