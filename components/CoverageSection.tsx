"use client";

import React from 'react';
import ScrambleText from './ScrambleText';
import styles from './CoverageSection.module.css';
import SectionDivider from './SectionDivider';

interface CoverageCardProps {
  title: string;
  artboard: string;
  icons: string[];
  color?: string;
  bottomBg?: string;
  iconSrc?: string;
}

const CoverageCard: React.FC<CoverageCardProps> = ({ title, artboard, icons, color = '#FCFCF4', bottomBg, iconSrc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.riveWrapper} style={{ borderColor: color }}>
          <div className={styles.iconCross1} />
          <div className={styles.iconCross2} />
          <div className={styles.riveContainer}>
            {iconSrc && <img src={iconSrc} alt="" style={{ width: '100%', height: '100%' }} />}
          </div>
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.smallIconsRow}>
          {icons.map((icon, i) => (
            <div key={i} className={styles.smallIconBox}>
              <img src={icon} alt="token" className={styles.smallIcon} />
            </div>
          ))}
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      
      {/* Background diagonal line */}
      <div className={styles.diagonalBg} />
      
      {/* Bottom decorative bar */}
      <div 
        className={styles.bottomBar} 
        style={{ backgroundImage: bottomBg ? `url(${bottomBg})` : 'none' }}
      />
    </div>
  );
};

export const CoverageSection: React.FC = () => {
  const cryptoIcons = [
    '/crypto/eth.svg',
    '/crypto/bnb.svg',
    '/crypto/btc.svg',
    '/crypto/lite.svg'
  ];

  const features = [
    {
      title: 'commodities/FX',
      artboard: 'Commodities',
      icons: cryptoIcons,
      color: '#FCFCF4',
      bottomBg: '/card_bg/firstcard_backg.png',
      iconSrc: '/anim_icons_4cards/white_container.svg'
    },
    {
      title: 'equities/RWAs',
      artboard: 'Equities',
      icons: cryptoIcons,
      color: '#84E0F7',
      bottomBg: '/card_bg/secondcard_backg.png',
      iconSrc: '/anim_icons_4cards/blue_container.svg'
    },
    {
      title: 'majors + tokenized',
      artboard: 'Majors',
      icons: cryptoIcons,
      color: '#3DB1CF',
      bottomBg: '/card_bg/thirdcard_backg.png',
      iconSrc: '/anim_icons_4cards/fq_container.svg'
    },
    {
      title: 'options/prediction',
      artboard: 'Options',
      icons: cryptoIcons,
      color: '#0096BA',
      bottomBg: '/card_bg/fourthcard_backg.png',
      iconSrc: '/anim_icons_4cards/ueue_container.svg'
    }
  ];

  return (
    <section className={styles.section}>
      <SectionDivider title="COVERAGE" />

      <div className={styles.container}>
        <h2 className={styles.title}>
          <ScrambleText text="EVERYTHING ONCHAIN" trigger="scroll" />
          <br />
          <ScrambleText text="PRICED TO REALITY" trigger="scroll" />
        </h2>

        <div className={styles.grid}>
          {/* Side Border Line Left */}
          <div className={styles.sideLine}>
            <div className={styles.sideLineIndicator} />
          </div>

          <div className={styles.cardsContainer}>
            {features.map((item, index) => (
              <CoverageCard key={index} {...item} />
            ))}
          </div>

          {/* Side Border Line Right */}
          <div className={styles.sideLine}>
            <div className={styles.sideLineIndicator} />
          </div>
        </div>
      </div>
    </section>
  );
};
