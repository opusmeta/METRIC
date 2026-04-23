'use client';

import React from 'react';
import SectionDivider from './SectionDivider';
import ScrambleText from './ScrambleText';
import styles from './WhyMetricWins.module.css';

export default function WhyMetricWins() {
  const [activeRow, setActiveRow] = React.useState<number | null>(null);

  const toggleRow = (index: number) => {
    setActiveRow(activeRow === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <SectionDivider title="WHY METRIC WINS" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <ScrambleText text="Why" trigger="scroll" /><br />
            <ScrambleText text="Metric" trigger="scroll" /><br />
            <ScrambleText text="Wins" trigger="scroll" />
          </h2>
        </div>

        <div className={styles.svgWrapper}>
          <img src="/static_wmw.svg" alt="Why Metric Wins Diagram" className={styles.mainSvgDesktop} />
          <img src="/wmw_adaptive.svg" alt="Why Metric Wins Diagram Mobile" className={styles.mainSvgMobile} />
        </div>

        <div className={styles.footer}>
          <div className={styles.learnMoreWrapper}>
            <a href="#" className={styles.learnMore}>
              <span className={styles.arrow}>↳</span>
              <span className={styles.learnMoreText}>LEARN MORE [DOC]</span>
            </a>
            <div className={styles.footerLine} />
          </div>
        </div>

        <div className={styles.featuresList}>
          {[
            { id: '01', title: 'Market-aligned pricing', desc: 'YET MOST DEXS STILL TREAT AMM' },
            { id: '02', title: 'ROUTED ORDERFLOW', desc: 'OPTIMIZING EVERY TRADE PATH' },
            { id: '03', title: 'BETTER LP RETURNS', desc: 'MAXIMIZING YIELD EFFICIENCY' },
            { id: '04', title: 'FAST EXECUTION', desc: 'INSTANT ON-CHAIN SETTLEMENT' },
            { id: '05', title: 'DEEP LIQUIDITY', desc: 'MINIMAL SLIPPAGE FOR LARGE TRADES' }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`${styles.row} ${activeRow === index ? styles.active : ''}`}
              onClick={() => toggleRow(index)}
            >
              {/* Background layers */}
              <div className={styles.layerBlue} />
              <div className={styles.layerBeige} />
              <div className={styles.layerOlive} />
              
              <div className={styles.rowContent}>
                <div className={styles.itemContainer}>
                  <div className={styles.iconContainer}>
                    <div className={styles.diagonalLine} />
                  </div>
                  <div className={styles.placeholderContainer}>
                    <span className={styles.placeholderText}>###</span>
                    <span className={styles.activeDesc}>{item.desc}</span>
                  </div>
                </div>

                <div className={styles.textContainer}>
                  {/* Layer 1: Passive text (white 0.4) */}
                  <span className={styles.largeTextPassive}>{item.title}</span>
                  {/* Layer 2: Active text (dark), revealed by clip-path/shutter */}
                  <span className={styles.largeTextActive}>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
