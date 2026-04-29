'use client';

import React from 'react';
import RiveAnimation from '@/components/RiveAnimation';

export default function TestRivePage() {
  const artboards = ['majors + tokenized', 'equities/RWAs', 'commodities/FX', 'options/prediction'];
  const src = '/assets/animations/metric_-_everything_onchain_priced_to_reality.riv';
  const setupSrc = '/assets/animations/metric_-_the_setup.riv';

  return (
    <div style={{ padding: '40px', background: '#1D1D1F', minHeight: '100vh', color: '#fff' }}>
      <h1>Rive Test Page</h1>
      
      <section style={{ marginBottom: '60px' }}>
        <h2>Everything On-chain (Problem Section)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {artboards.map((board) => (
            <div key={board} style={{ border: '1px solid #343435', padding: '20px' }}>
              <h3>Artboard: {board}</h3>
              <div style={{ height: '300px', background: '#000' }}>
                <RiveAnimation src={src} artboard={board} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2>The Setup (Problem Section Candidates?)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          {['01', '02', '03'].map((board) => (
            <div key={board} style={{ border: '1px solid #343435', padding: '20px' }}>
              <h3>Artboard: {board}</h3>
              <div style={{ height: '300px', background: '#000' }}>
                <RiveAnimation src={setupSrc} artboard={board} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>The Setup (Default Artboard)</h2>
        <div style={{ border: '1px solid #343435', padding: '20px' }}>
          <div style={{ height: '500px', background: '#000' }}>
            <RiveAnimation src={setupSrc} />
          </div>
        </div>
      </section>
    </div>
  );
}
