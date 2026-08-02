import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="group flex items-center gap-1.5 rounded-full border border-navy-200/60 bg-white/80 px-3 py-1.5 text-sm font-semibold text-navy-700 transition-all hover:border-brand-blue-400 hover:bg-brand-blue-50"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4 text-brand-blue-500 transition-transform group-hover:rotate-180" />
      <span>{lang === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
}
