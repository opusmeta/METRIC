import Image from 'next/image';
import ScrambleText from './ScrambleText';
import styles from './Header.module.css';

const navLinks = [
  { label: 'The setup', href: '#the-setup' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why Metric Wins', href: '#why-metric-wins' },
  { label: 'Integrations', href: '#integrations' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <a href="/" className={styles.logo} aria-label="Metric Home">
        <Image
          src="/metriclp_biglogo.svg"
          alt="Metric Logo"
          width={24}
          height={24}
          priority
        />
      </a>

      {/* Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            <ScrambleText text={link.label} trigger="hover" />
          </a>
        ))}
      </nav>

      {/* Action buttons */}
      <div className={styles.actions}>
        <a href="/docs" className={styles.docsBtn} aria-label="Documentation">
          <span className={styles.docsText}>
            <ScrambleText text="Docs" trigger="hover" />
          </span>
        </a>
        <a href="/app" className={styles.launchBtn} aria-label="Launch App">
          <span className={styles.launchText}>
            <ScrambleText text="Launch app" trigger="hover" />
          </span>
        </a>
      </div>
    </header>
  );
}
