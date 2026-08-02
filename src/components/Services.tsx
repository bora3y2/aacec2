import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  FileText,
  ClipboardCheck,
  Recycle,
  Sprout,
  GraduationCap,
  Gauge,
} from 'lucide-react';
import type { ServiceItem } from '@/translations/types';

const ICONS = [FileText, ClipboardCheck, Recycle, Sprout, GraduationCap, Gauge];

export default function Services() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-navy-50/50 py-20 lg:py-28">
      <div ref={ref} className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-green-50 px-4 py-1.5 text-sm font-semibold text-brand-green-600">
            {t.services.sectionLabel}
          </span>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-navy-600">{t.services.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service: ServiceItem, i: number) => {
            const Icon = ICONS[i] ?? FileText;
            return (
              <div
                key={i}
                className="reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-green-50 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-brand-blue-500" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
