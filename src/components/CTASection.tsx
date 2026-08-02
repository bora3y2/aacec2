import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-blue-600 to-brand-green-600 py-20 lg:py-24">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          {t.cta.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-blue-600 shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            {t.cta.button}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#services')}
            className="flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-white/70 hover:bg-white/10"
          >
            {t.cta.secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
}
