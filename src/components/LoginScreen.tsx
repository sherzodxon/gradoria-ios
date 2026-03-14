'use client';

import { useState } from 'react';
import { login } from '@/lib/api';
import { saveToken, saveUser } from '@/lib/auth';
import styles from './LoginScreen.module.css';

interface Props {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setError("Barcha maydonlarni to'ldiring ✨");
      return;
    }
    setError('');
    setLoading(true);
    try {
      const { token, user } = await login({ username: username.trim(), password });
      saveToken(token);
      saveUser(user);
      onLogin();
    } catch (err: any) {
      const msg = err.response?.data?.message || "Server bilan aloqa yo'q yoki login xato.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div className={styles.container}>
      {/* Background glow orbs */}
      <div className={`${styles.glowOrb} ${styles.orbTopLeft}`} />
      <div className={`${styles.glowOrb} ${styles.orbBottomRight}`} />

      <div className={styles.scrollContent}>
        <div className={styles.inner}>
          {/* Logo */}
          <div className={styles.logoWrap}>
            <img src="/icon-512.png" alt="Gradoria" className={styles.logo} />
          </div>

          <h1 className={styles.appName}>GRADORIA</h1>

          <div className={styles.formCard}>
            {/* Username */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Foydalanuvchi nomi</label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input
                  type="text"
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Taxallusingiz"
                  autoCapitalize="none"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Parol</label>
              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input
                  type={showPass ? 'text' : 'password'}
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Maxfiy kod"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPass(!showPass)}
                  tabIndex={-1}
                >
                  {showPass ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && <p className={styles.error}>{error}</p>}

            {/* Submit button */}
            <button
              className={`${styles.loginBtn} ${loading ? styles.loginBtnDisabled : ''}`}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner} />
              ) : (
                <span className={styles.btnContent}>
                  <span>PORTALNI OCHISH</span>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" style={{ marginLeft: 10 }}>
                    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          <p className={styles.footer}>Sherzodxon © 2026 · Sehrli maktab</p>
        </div>
      </div>
    </div>
  );
}
