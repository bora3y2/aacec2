import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Users,
  FlaskConical,
  Globe2,
  MapPin,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import type { ServiceItem } from '@/translations/types';

const ICONS = [Users, FlaskConical, ShieldCheck, MapPin, Layers, Globe2];

export default function WhyUs() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-blue-500 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-green-500 blur-3xl" />
      </div>

      <div ref={ref} className="container-px relative z-10 mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-green-300">
            {t.whyUs.sectionLabel}
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{t.whyUs.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item: ServiceItem, i: number) => {
            const Icon = ICONS[i] ?? Users;
            return (
              <div
                key={i}
                className="reveal group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-500/20 to-brand-green-500/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-brand-green-300" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
