'use client';

import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  return (
    <div className={styles.splash}>
      <div className={styles.icon}>🏫</div>
      <div className={styles.title}>GRADORIA</div>
      <div className={styles.spinner} />
    </div>
  );
}
