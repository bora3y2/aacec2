export interface NavText {
  home: string;
  about: string;
  services: string;
  projects: string;
  whyUs: string;
  contact: string;
  cta: string;
}

export interface FooterLinks {
  home: string;
  about: string;
  services: string;
  projects: string;
  whyUs: string;
  contact: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Translation {
  lang: string;
  dir: 'ltr' | 'rtl';
  nav: NavText;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    description: string;
    vision: { title: string; text: string };
    mission: { title: string; text: string };
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  services: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  whyUs: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    items: { title: string; sector: string; description: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    secondaryButton: string;
  };
  contact: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      followUs: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    copyright: string;
    links: FooterLinks;
  };
}
