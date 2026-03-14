'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth';
import LoginScreen from '@/components/LoginScreen';
import StudentsScreen from '@/components/StudentsScreen';
import SplashScreen from '@/components/SplashScreen';

type AppState = 'loading' | 'login' | 'main';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('loading');

  useEffect(() => {
    // Token bor-yo'qligini tekshirish
    const token = getToken();
    setAppState(token ? 'main' : 'login');
  }, []);

  if (appState === 'loading') {
    return <SplashScreen />;
  }

  if (appState === 'login') {
    return <LoginScreen onLogin={() => setAppState('main')} />;
  }

  return <StudentsScreen onLogout={() => setAppState('login')} />;
}
