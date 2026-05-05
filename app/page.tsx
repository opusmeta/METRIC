'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BackedBy from '@/components/BackedBy';
import IpadSection from '@/components/IpadSection';
import ProblemSection from '@/components/ProblemSection';
import TextRevealSection from '@/components/TextRevealSection';
import MechanicsSection from '@/components/MechanicsSection';
import WhyMetricWins from '@/components/WhyMetricWins';
import { CoverageSection } from '@/components/CoverageSection';
import GraphicDivider from '@/components/GraphicDivider';
import Footer from '@/components/Footer';
import ScrollOptimizer from '@/components/ScrollOptimizer';
import PromoLoader from '@/components/PromoLoader';
import styles from './page.module.css';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isCornersReady, setIsCornersReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  const arrowLeftRef = useRef<HTMLDivElement>(null);
  const arrowRightRef = useRef<HTMLDivElement>(null);

  // Loading Simulation
  useEffect(() => {
    if (!isCornersReady) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          return 100;
        }
        const inc = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + inc, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isCornersReady]);

  // Transition Logic: Just handle the unmounting of loader after a delay
  useEffect(() => {
    if (isExiting) {
      setTimeout(() => {
        setShowContent(true);
      }, 2000); // Faster unmount now that animation is accelerated
    }
  }, [isExiting]);

  return (
    <main className={styles.main}>
      {/* Promo Experience: Loader and Hero integrated */}
      <div className={styles.promoContainer}>
        <PromoLoader 
          progress={progress} 
          isExiting={isExiting}
          isLanding={true}
          onCornersReady={() => setIsCornersReady(true)}
        />

        {/* PromoHero is rendered behind the loader and starts its animation when loader exits */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          visibility: (isExiting || showContent) ? 'visible' : 'hidden',
          zIndex: (isExiting || showContent) ? 5 : -1 
        }}>
          <PromoHero shouldManifest={isExiting} />
        </div>
      </div>

      <div style={{ visibility: showContent ? 'visible' : 'hidden', opacity: showContent ? 1 : 0, transition: 'opacity 1s ease' }}>
        <ScrollOptimizer />
        <Header />
        {/* We keep the rest of the landing page content below */}
        <BackedBy />
        <div id="the-setup">
          <IpadSection />
        </div>
        <ProblemSection />
        <TextRevealSection />
        <div id="how-it-works">
          <MechanicsSection />
        </div>
        <div id="why-metric-wins">
          <WhyMetricWins />
        </div>
        <div id="integrations">
          <CoverageSection />
        </div>
        <GraphicDivider />
        <Footer />
      </div>
    </main>
  );
}
