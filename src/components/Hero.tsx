import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { ArrowRight, Leaf, Droplets, Wind } from 'lucide-react';
import type { StatItem } from '@/translations/types';

const HERO_IMG = '/assets/sections/hero-bg.jpeg';

const STAT_ICONS = [Leaf, Droplets, Wind];

function StatCounter({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, value } = useCountUp<HTMLSpanElement>(stat.value);
  const Icon = STAT_ICONS[index] ?? Leaf;

  return (
    <div>
      <div className="flex items-center gap-1.5">
        <Icon className="h-5 w-5 text-brand-green-300" />
        <span ref={ref} className="text-2xl font-bold text-white sm:text-3xl" dir="ltr">
          {stat.prefix}
          {value}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</p>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Environmental consulting field work"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center container-px pt-32">
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
            {t.hero.stats.map((stat, i) => (
              <StatCounter key={i} stat={stat} index={i} />
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