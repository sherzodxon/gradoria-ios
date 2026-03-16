'use client';

import { useEffect, useRef, useState } from 'react';
import { constitution } from '@/lib/constitution';
import { givePoint } from '@/lib/api';
import { User } from '@/types';
import styles from './RulesModal.module.css';

interface Props {
  student: User | null;
  visible: boolean;
  onClose: () => void;
  onPointGiven: () => void;
}

interface ConfirmState {
  show: boolean;
  item: any;
  band: number;
  isPos: boolean;
}

export default function RulesModal({ student, visible, onClose, onPointGiven }: Props) {
  const [confirm, setConfirm] = useState<ConfirmState>({ show: false, item: null, band: 0, isPos: true });
  const [giving, setGiving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const sheetRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  // Build flat data list
  const data: any[] = [];
  data.push({ type: 'header', label: 'IJOBIY QOIDALAR', pos: true });
  constitution.rules.positive.forEach((band) => {
    data.push({ type: 'band', title: `Band ${band.band}: ${band.title}` });
    band.items.forEach((item) => {
      data.push({ type: 'rule', item, pos: true, band: band.band });
    });
  });
  data.push({ type: 'header', label: 'JARIMALAR', pos: false });
  constitution.rules.negative.forEach((band) => {
    data.push({ type: 'band', title: `Band ${band.band}: ${band.title}` });
    band.items.forEach((item) => {
      data.push({ type: 'rule', item, pos: false, band: band.band });
    });
  });

  const handleRuleClick = (ruleData: any) => {
    setConfirm({
      show: true,
      item: ruleData.item,
      band: ruleData.band,
      isPos: ruleData.pos,
    });
  };

  const handleConfirm = async () => {
    if (!student || !confirm.item) return;
    setGiving(true);
    try {
      await givePoint({
        studentId: student.id,
        points: confirm.item.points,
        band: confirm.band,
        article: confirm.item.article,
        description: confirm.item.description,
      });
      const sign = confirm.item.points >= 0 ? '+' : '';
      setSuccessMsg(`${student.name}ga ${sign}${confirm.item.points} ball berildi! ✨`);
      setConfirm({ show: false, item: null, band: 0, isPos: true });
      setTimeout(() => {
        setSuccessMsg('');
        onPointGiven();
        onClose();
      }, 1500);
    } catch {
      setConfirm({ show: false, item: null, band: 0, isPos: true });
      alert("Ball berishda xatolik yuz berdi.");
    } finally {
      setGiving(false);
    }
  };

  if (!visible && !successMsg) return null;

  return (
    <div className={`${styles.overlay} ${visible ? styles.overlayVisible : ''}`}>
      {/* Backdrop tap to close */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Bottom sheet */}
      <div className={`${styles.sheet} ${visible ? styles.sheetVisible : ''}`} ref={sheetRef}>
        <div className={styles.handle} />

        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className={styles.stName}>{student?.name} {student?.surname}</p>
            <p className={styles.stSub}>Qoida va jarimalar ro'yxati</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Rules list */}
        <div className={styles.list}>
          {data.map((d, i) => {
            if (d.type === 'header') {
              return (
                <div key={i} className={`${styles.sectionHeader} ${d.pos ? styles.borderGold : styles.borderRed}`}>
                  <span className={`${styles.sectionText} ${d.pos ? styles.textGold : styles.textRed}`}>
                    {d.label}
                  </span>
                </div>
              );
            }
            if (d.type === 'band') {
              return <p key={i} className={styles.bandText}>{d.title}</p>;
            }
            const pts = d.item.points;
            const isPos = pts >= 0;
            return (
              <button key={i} className={styles.ruleCard} onClick={() => handleRuleClick(d)}>
                <div className={styles.ruleInfo}>
                  <span className={styles.ruleArt}>Modda {d.item.article}</span>
                  <span className={styles.ruleDesc}>{d.item.description}</span>
                </div>
                <div className={`${styles.ptsBox} ${isPos ? styles.ptsPos : styles.ptsNeg}`}>
                  <span className={`${styles.ptsText} ${isPos ? styles.textGreen : styles.textRed}`}>
                    {isPos ? '+' : ''}{pts}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Confirm dialog */}
      {confirm.show && (
        <div className={styles.confirmOverlay}>
          <div className={styles.confirmBox}>
            <p className={styles.confirmTitle}>Tasdiqlash</p>
            <p className={styles.confirmStudent}>{student?.name} {student?.surname}</p>
            <p className={styles.confirmDesc}>{confirm.item?.description}</p>
            <p className={`${styles.confirmPts} ${confirm.isPos ? styles.textGreen : styles.textRed}`}>
              {confirm.item?.points >= 0 ? '+' : ''}{confirm.item?.points} ball berilsinmi?
            </p>
            <div className={styles.confirmBtns}>
              <button
                className={styles.cancelBtn}
                onClick={() => setConfirm({ show: false, item: null, band: 0, isPos: true })}
              >
                Bekor
              </button>
              <button
                className={`${styles.okBtn} ${confirm.isPos ? styles.okGold : styles.okRed}`}
                onClick={handleConfirm}
                disabled={giving}
              >
                {giving ? <span className={styles.spinnerSmall} /> : 'Ha, tasdiqlayman'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success toast */}
      {successMsg && (
        <div className={styles.toast}>
          <span>✅ {successMsg}</span>
        </div>
      )}
    </div>
  );
}
