'use client';

import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  return (
    <div className={styles.splash}>
     <div className={styles.logoWrap}>
            <img src="/icon_1024.png" alt="Gradoria" width={148} height={148} className={styles.logo} />
          </div>
      <div className={styles.title}>GRADORIA</div>
      <div className={styles.spinner} />
    </div>
  );
}
