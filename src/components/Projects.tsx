import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import type { Translation } from '@/translations/types';

const IMAGES = [
  'https://images.pexels.com/photos/33626641/pexels-photo-33626641.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/38071557/pexels-photo-38071557.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/2861857/pexels-photo-2861857.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/38208393/pexels-photo-38208393.jpeg?auto=compress&cs=tinysrgb&w=900',
];

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
                  src={IMAGES[i]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-2 inline-block rounded-full bg-brand-green-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {project.sector}
                </span>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand-green-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>{t.cta.secondaryButton}</span>
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
