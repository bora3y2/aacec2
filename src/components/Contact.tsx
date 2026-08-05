import { useState, type FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div ref={ref} className="container-px mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-green-50 px-4 py-1.5 text-sm font-semibold text-brand-green-600">
            {t.contact.sectionLabel}
          </span>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-navy-600">{t.contact.subtitle}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form */}
          <div className="reveal lg:col-span-3" style={{ transitionDelay: '0.1s' }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-navy-100 bg-navy-50/40 p-8 shadow-sm lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy-700">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition-all focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-navy-700">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.contact.form.phonePlaceholder}
                    className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition-all focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-navy-700">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition-all focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-navy-700">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-navy-200 bg-white px-4 py-3 text-navy-900 outline-none transition-all focus:border-brand-blue-400 focus:ring-2 focus:ring-brand-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green-500 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-green-500/30 transition-all hover:bg-brand-green-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  t.contact.form.submitting
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-green-50 px-4 py-3 text-sm font-medium text-brand-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  {t.contact.form.success}
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  {t.contact.form.error}
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="reveal space-y-4 lg:col-span-2" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm transition-all hover:border-brand-blue-200 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50">
                <MapPin className="h-6 w-6 text-brand-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900">{t.contact.info.address}</h3>
                <p className="mt-1 text-sm text-navy-500">Riyadh, Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm transition-all hover:border-brand-green-200 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green-50">
                <Phone className="h-6 w-6 text-brand-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900">{t.contact.info.phone}</h3>
                <p className="mt-1 text-sm text-navy-500" dir="ltr">
                  {import.meta.env.VITE_CONTACT_PHONE}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm transition-all hover:border-brand-blue-200 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50">
                <Mail className="h-6 w-6 text-brand-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900" dir="ltr">{t.contact.info.email}</h3>
                <p className="mt-1 text-sm text-navy-500">info@aacec.sa</p>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-900 shadow-sm">
              <iframe
                title="Amana Alard location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(import.meta.env.VITE_MAP_ADDRESS)}&z=14&output=embed`}
                className="w-full"
                style={{ border: 0, height: '238px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
