'use client';

import React from 'react';
import styles from './ProblemSection.module.css';
import SectionDivider from './SectionDivider';
import ScrambleText from './ScrambleText';

import Card1Animation from './Card1Animation';
import Card3Animation from './Card3Animation';
import Card4Animation from './Card4Animation';

export default function ProblemSection() {
  const cards = [
    {
      number: '01',
      text: 'For majors + tokenized equities/RWAs, the real price is set off-chain — on major exchanges and regulated markets.',
      AnimationComponent: Card1Animation,
    },
    {
      number: '02',
      text: 'Yet AMMs still try to discover price inside the pool. When markets move, the pool goes stable.',
      AnimationComponent: Card3Animation,
    },
    {
      number: '03',
      text: 'Arbitrage re-aligns the pool — LPs pay for it. “Incentives” may inflate headline APR, but they don’t cover the leakage.',
      AnimationComponent: Card4Animation,
    },
  ];

  return (
    <>
      <section className={styles.section} id="core-problem">
        <div className={styles.leftCol}>
          <h2 className={styles.title}>
            <ScrambleText text="The Price" trigger="scroll" /><br />
            <ScrambleText text="Discovery" trigger="scroll" /><br />
            <ScrambleText text="Problem" trigger="scroll" />
          </h2>
        </div>
        
        <div className={styles.rightCol}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.animationWrapper}>
                <card.AnimationComponent />
              </div>
              
              <div className={styles.textWrapper}>
                <span className={styles.cardNumber}>{card.number}</span>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Divider exactly like in the design */}
      <SectionDivider title="Core Problem" />
    </>
  );
}
