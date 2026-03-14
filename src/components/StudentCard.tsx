import { User } from '@/types';
import styles from './StudentCard.module.css';

interface Props {
  student: User;
  onPress: (student: User) => void;
}

export default function StudentCard({ student, onPress }: Props) {
  const pts = student.totalPoints ?? 0;
  const isPositive = pts >= 0;

  return (
    <button
      className={styles.card}
      onClick={() => onPress(student)}
    >
      <div className={`${styles.avatar} ${isPositive ? styles.avatarGold : styles.avatarRed}`}>
        {isPositive ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" style={{ color: '#D4AF37' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" style={{ color: '#FF5252' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
          </svg>
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.name}>{student.name} {student.surname}</span>
      </div>

      <div className={`${styles.badge} ${isPositive ? styles.badgeGold : styles.badgeRed}`}>
        <span className={`${styles.badgeText} ${isPositive ? styles.textGold : styles.textRed}`}>
          {isPositive ? '+' : ''}{pts}
        </span>
      </div>

      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" style={{ color: 'rgba(212,175,55,0.3)', flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
}
