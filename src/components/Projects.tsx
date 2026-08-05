import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import type { Translation } from '@/translations/types';

type ProjectItem = Translation['projects']['items'][number];

export default function Projects() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="container-px mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-blue-50 px-4 py-1.5 text-sm font-semibold text-brand-blue-600">
            {t.projects.sectionLabel}
          </span>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-lg text-navy-600">{t.projects.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.projects.items.map((project: ProjectItem, i: number) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-2xl shadow-lg"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-navy-600">
            {t.cta.subtitle}
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-green-500/30 transition-all hover:bg-brand-green-600 hover:shadow-xl hover:shadow-brand-green-500/40"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}