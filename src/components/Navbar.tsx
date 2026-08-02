import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Leaf } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-green-500 shadow-md">
            <Leaf className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <span
            className={`text-lg font-bold leading-tight transition-colors ${
              scrolled ? 'text-navy-900' : 'text-navy-900'
            }`}
          >
            {isRTL ? (
              <span className="block">شركة أمانة الأرض</span>
            ) : (
              <span className="block">Amana Alard</span>
            )}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-600 ${
                scrolled ? 'text-navy-700' : 'text-navy-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + switcher */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="rounded-full bg-brand-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-green-500/30 transition-all hover:bg-brand-green-600 hover:shadow-lg hover:shadow-brand-green-500/40"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-navy-700 transition-colors hover:bg-navy-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[500px] border-t border-navy-100' : 'max-h-0'
        }`}
      >
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 rounded-full bg-brand-green-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-md"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
