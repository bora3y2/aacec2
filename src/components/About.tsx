import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Eye, Target, Users, Award, Briefcase, Leaf } from 'lucide-react';

const ABOUT_IMG =
  'https://images.pexels.com/photos/8513388/pexels-photo-8513388.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function About() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label, icon: Award },
    { value: t.about.stat2Value, label: t.about.stat2Label, icon: Briefcase },
    { value: t.about.stat3Value, label: t.about.stat3Label, icon: Users },
    { value: t.about.stat4Value, label: t.about.stat4Label, icon: Leaf },
  ];

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={ABOUT_IMG}
                alt="Environmental scientists working in a lab"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/30 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 ltr:-right-4 rtl:-left-4 rounded-2xl bg-brand-green-500 px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Leaf className="h-8 w-8 text-white" />
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-white/80">
                    {t.about.stat1Label}
                  </p>
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
              <div className="flex gap-4 rounded-2xl border border-navy-100 bg-navy-50/50 p-5 transition-colors hover:border-brand-blue-200 hover:bg-brand-blue-50/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-500 text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{t.about.vision.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{t.about.vision.text}</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-navy-100 bg-navy-50/50 p-5 transition-colors hover:border-brand-green-200 hover:bg-brand-green-50/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-500 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{t.about.mission.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{t.about.mission.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
                <stat.icon className="h-6 w-6 text-brand-blue-500" />
              </div>
              <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
              <p className="mt-1 text-sm text-navy-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
