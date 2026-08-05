import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Eye, Target, Users, Award, Briefcase, Leaf } from 'lucide-react';
import type { StatItem } from '@/translations/types';

const ABOUT_IMG = '/assets/sections/about.jpeg';

const STAT_ICONS = [Award, Briefcase, Users, Leaf];

function StatCounter({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, value } = useCountUp<HTMLSpanElement>(stat.value);
  const Icon = STAT_ICONS[index] ?? Award;

  return (
    <div
      className="reveal rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
        <Icon className="h-6 w-6 text-brand-blue-500" />
      </div>
      <p className="text-3xl font-bold text-navy-900" dir="ltr">
        {stat.prefix}
        <span ref={ref}>{value}</span>
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-navy-500">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={ABOUT_IMG}
                alt="Environmental consulting services in the field"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/30 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 ltr:-right-4 rtl:-left-4 rounded-2xl bg-brand-green-500 px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Leaf className="h-8 w-8 text-white" />
                <div>
                  <p className="text-2xl font-bold text-white" dir="ltr">
                    {t.about.stats[0].prefix}
                    <span>10</span>
                    {t.about.stats[0].suffix}
                  </p>
                  <p className="text-xs text-white/80">{t.about.stats[0].label}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="mb-3 inline-block rounded-full bg-brand-blue-50 px-4 py-1.5 text-sm font-semibold text-brand-blue-600">
              {t.about.sectionLabel}
            </span>
            <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              {t.about.description}
            </p>

            {/* Vision / Mission */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-5 rounded-2xl border border-navy-100 bg-navy-50/50 p-6 transition-colors hover:border-brand-blue-200 hover:bg-brand-blue-50/50">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue-500 text-white">
                  <Eye className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{t.about.vision.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-navy-600">{t.about.vision.text}</p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl border border-navy-100 bg-navy-50/50 p-6 transition-colors hover:border-brand-green-200 hover:bg-brand-green-50/50">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-green-500 text-white">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{t.about.mission.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-navy-600">{t.about.mission.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {t.about.stats.map((stat, i) => (
            <StatCounter key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}