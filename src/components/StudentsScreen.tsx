'use client';

import { useCallback, useEffect, useState } from 'react';
import { getStudents } from '@/lib/api';
import { clearAuth, getUser } from '@/lib/auth';
import { User } from '@/types';
import StudentCard from './StudentCard';
import RulesModal from './RulesModal';
import styles from './StudentsScreen.module.css';

interface Props {
  onLogout: () => void;
}

export default function StudentsScreen({ onLogout }: Props) {
  const [teacher, setTeacher] = useState<User | null>(null);
  const [students, setStudents] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [error, setError] = useState('');

  const loadStudents = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) setRefreshing(true);
      const data = await getStudents();
      setStudents(data);
      setFiltered(data);
      setError('');
    } catch {
      setError("Ma'lumotlarni yuklashda muammo bo'ldi");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const u = getUser();
    setTeacher(u);
    loadStudents();
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      students.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.surname.toLowerCase().includes(q) ||
          s.username.toLowerCase().includes(q),
      ),
    );
  }, [search, students]);

  const handleLogout = () => {
    clearAuth();
    onLogout();
  };

  const positiveCount = students.filter((s) => (s.totalPoints ?? 0) > 0).length;
  const negativeCount = students.filter((s) => (s.totalPoints ?? 0) < 0).length;

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.teacherInfo}>
          <p className={styles.teacherName}>
            {teacher ? `${teacher.name} ${teacher.surname}` : '...'}
          </p>
          <p className={styles.roleText}>Sehrli Hauslar jamiyati ustozi</p>
        </div>
        <button className={styles.logoutBtn} onClick={() => setLogoutConfirm(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </button>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>{students.length}</span>
          <span className={styles.statLabel}>O'quvchilar</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={`${styles.statNum} ${styles.statGreen}`}>{positiveCount}</span>
          <span className={styles.statLabel}>Ijobiy</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={`${styles.statNum} ${styles.statRed}`}>{negativeCount}</span>
          <span className={styles.statLabel}>Jarimalik</span>
        </div>
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ color: 'rgba(212,175,55,0.4)', flexShrink: 0 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="O'quvchini qidirish..."
        />
        {search && (
          <button className={styles.clearSearch} onClick={() => setSearch('')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Content */}
      <div className={styles.listWrap}>
        {loading ? (
          <div className={styles.center}>
            <div className={styles.spinner} />
          </div>
        ) : error ? (
          <div className={styles.center}>
            <p className={styles.errorText}>{error}</p>
            <button className={styles.retryBtn} onClick={() => loadStudents()}>
              Qayta urinish
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className={styles.center}>
            <p className={styles.emptyText}>
              {search ? 'O\'quvchi topilmadi' : 'O\'quvchilar yo\'q'}
            </p>
          </div>
        ) : (
          <div className={styles.list}>
            {/* Pull to refresh button on mobile */}
            {refreshing && (
              <div className={styles.refreshing}>
                <div className={styles.spinnerSmall} />
              </div>
            )}
            {filtered.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                onPress={(s) => {
                  setSelectedStudent(s);
                  setModalVisible(true);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Refresh button */}
      <button className={styles.fab} onClick={() => loadStudents(true)} title="Yangilash">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>

      {/* Rules modal */}
      <RulesModal
        student={selectedStudent}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onPointGiven={loadStudents}
      />

      {/* Logout confirm */}
      {logoutConfirm && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmBox}>
            <p className={styles.confirmTitle}>Tizimdan chiqish</p>
            <p className={styles.confirmDesc}>Tizimdan chiqmoqchimisiz?</p>
            <div className={styles.confirmBtns}>
              <button className={styles.cancelBtn} onClick={() => setLogoutConfirm(false)}>
                Bekor
              </button>
              <button className={styles.logoutConfirmBtn} onClick={handleLogout}>
                Chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
