import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.footer.links.home, href: '#home' },
    { label: t.footer.links.about, href: '#about' },
    { label: t.footer.links.services, href: '#services' },
    { label: t.footer.links.projects, href: '#projects' },
    { label: t.footer.links.whyUs, href: '#why-us' },
    { label: t.footer.links.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/assets/logo/27.png" alt="Amana Alard logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {t.footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-green-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-brand-blue-400" />
                <span>{t.contact.info.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-brand-blue-400" />
                <span dir="ltr">{t.contact.info.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-brand-blue-400" />
                <span dir="ltr">{t.contact.info.email}</span>
              </li>
            </ul>
          </div>

          {/* Social + switcher */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
              {t.footer.followUs}
            </h3>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all hover:bg-brand-green-500 hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
