import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Leaf, Droplets, Wind } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/38071557/pexels-photo-38071557.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Aerial view of a forest surrounding a clear river"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/40 to-brand-green-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center container-px pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Leaf className="h-4 w-4 text-brand-green-300" />
            <span className="text-sm font-medium text-white/90">{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/85"
            style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
          >
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex animate-fade-up flex-wrap gap-4"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center gap-2 rounded-full bg-brand-green-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-green-500/30 transition-all hover:bg-brand-green-600 hover:shadow-xl hover:shadow-brand-green-500/40"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-14 grid animate-fade-up grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:gap-8"
            style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
          >
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex items-center gap-1.5">
                  {i === 0 && <Leaf className="h-5 w-5 text-brand-green-300" />}
                  {i === 1 && <Droplets className="h-5 w-5 text-brand-blue-300" />}
                  {i === 2 && <Wind className="h-5 w-5 text-white/70" />}
                  <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                </div>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C320,90 720,10 1080,50 C1260,70 1380,40 1440,30 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
