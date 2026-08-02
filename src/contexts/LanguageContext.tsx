import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en } from '@/translations/en';
import { ar } from '@/translations/ar';
import type { Translation } from '@/translations/types';

type Language = 'en' | 'ar';

interface LanguageContextValue {
  lang: Language;
  t: Translation;
  isRTL: boolean;
  setLang: (lang: Language) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const t = lang === 'en' ? en : ar;
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const toggle = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t, isRTL, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
