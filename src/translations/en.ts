import type { Translation } from './types';

export const en: Translation = {
  lang: 'en',
  dir: 'ltr' as const,

  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    projects: 'Projects',
    whyUs: 'Why Us',
    contact: 'Contact Us',
    cta: 'Request a Consultation',
  },

  hero: {
    badge: 'Environmental Consulting Experts',
    headline: 'Building a More Sustainable Future',
    subheadline:
      'We partner with government and private sector clients to achieve environmental compliance, sustainability, and responsible development through rigorous scientific methodology.',
    ctaPrimary: 'Contact Us',
    ctaSecondary: 'Explore Our Services',
    stat1Value: '10+',
    stat1Label: 'Years of Experience',
    stat2Value: '200+',
    stat2Label: 'Projects Completed',
    stat3Value: '150+',
    stat3Label: 'Clients Served',
  },

  about: {
    sectionLabel: 'Who We Are',
    title: 'Committed to the Earth, Accountable to the Future',
    description:
      'Amana Alard Company for Environmental Consulting is a specialized firm dedicated to delivering scientific and professional environmental solutions. We serve government agencies and private sector organizations seeking to align their operations with sustainability goals and regulatory standards.',
    vision: {
      title: 'Our Vision',
      text: 'To be the leading environmental consulting firm in the region, recognized for scientific excellence, integrity, and measurable environmental impact.',
    },
    mission: {
      title: 'Our Mission',
      text: 'To provide integrated environmental consulting services that help our clients achieve sustainable development, regulatory compliance, and environmental stewardship — grounded in science and international best practices.',
    },
    stat1Value: '10+',
    stat1Label: 'Years of Experience',
    stat2Value: '200+',
    stat2Label: 'Projects Completed',
    stat3Value: '150+',
    stat3Label: 'Clients Served',
    stat4Value: '30+',
    stat4Label: 'Expert Consultants',
  },

  services: {
    sectionLabel: 'What We Do',
    title: 'Comprehensive Environmental Consulting Services',
    subtitle:
      'From impact assessment to sustainability strategy, we offer end-to-end solutions tailored to your sector and regulatory environment.',
    items: [
      {
        title: 'Environmental Impact Assessment (EIA)',
        description:
          'Rigorous EIA studies prepared in accordance with national regulations and international standards, covering all project phases.',
      },
      {
        title: 'Environmental Compliance & Permitting',
        description:
          'Guidance through regulatory approval processes, permit applications, and ongoing compliance monitoring for industrial and development projects.',
      },
      {
        title: 'Waste Management Solutions',
        description:
          'Comprehensive waste management plans covering solid, liquid, and hazardous waste — from strategy to implementation and auditing.',
      },
      {
        title: 'Sustainability & ESG Studies',
        description:
          'Environmental and social responsibility assessments aligned with international ESG frameworks to support responsible investment and reporting.',
      },
      {
        title: 'Environmental Training & Awareness',
        description:
          'Customized training programs for corporate teams, government staff, and field personnel on environmental regulations and best practices.',
      },
      {
        title: 'Air, Water & Soil Quality Monitoring',
        description:
          'Field sampling, laboratory analysis, and technical reporting for air emissions, water quality, and soil contamination assessments.',
      },
    ],
  },

  whyUs: {
    sectionLabel: 'Why Choose Us',
    title: 'Science-Based. Standards-Driven. Results-Focused.',
    subtitle:
      'Our clients choose us because we combine deep technical expertise with practical, actionable solutions.',
    items: [
      {
        title: 'Expert Team',
        description: 'A multidisciplinary team of certified environmental scientists, engineers, and legal specialists.',
      },
      {
        title: 'Scientific Rigor',
        description: 'Every study and recommendation is grounded in validated methodology and peer-reviewed science.',
      },
      {
        title: 'International Standards',
        description: 'Full compliance with ISO, IFC Performance Standards, ESIA guidelines, and regional regulations.',
      },
      {
        title: 'Wide Geographic Reach',
        description: 'Active project experience across the Gulf, MENA region, and African markets.',
      },
      {
        title: 'Sector Diversity',
        description: 'Expertise spanning energy, infrastructure, industry, agriculture, and urban development sectors.',
      },
      {
        title: 'Confidentiality & Integrity',
        description: 'Strict ethical standards and professional confidentiality on all client engagements.',
      },
    ],
  },

  projects: {
    sectionLabel: 'Our Work',
    title: 'Selected Projects & Sectors',
    subtitle: 'A track record of delivering credible, actionable environmental consulting across diverse sectors.',
    items: [
      {
        title: 'Industrial Zone EIA',
        sector: 'Industrial Development',
        description: 'Comprehensive environmental impact assessment for a major industrial complex.',
      },
      {
        title: 'River Basin Water Quality Study',
        sector: 'Water Resources',
        description: 'Multi-site water sampling and quality analysis across a regional river basin.',
      },
      {
        title: 'Renewable Energy Compliance',
        sector: 'Energy & Power',
        description: 'Environmental permitting and compliance support for a large-scale wind farm project.',
      },
      {
        title: 'Urban Development Sustainability Plan',
        sector: 'Urban Planning',
        description: 'Integrated sustainability and environmental management plan for a new city district.',
      },
    ],
  },

  cta: {
    title: 'Ready to Build a More Sustainable Future?',
    subtitle:
      'Connect with our team to discuss your project. We provide tailored environmental consulting solutions that meet your timeline, budget, and regulatory requirements.',
    button: 'Request a Consultation',
    secondaryButton: 'Learn More About Our Services',
  },

  contact: {
    sectionLabel: 'Get In Touch',
    title: 'Contact Us',
    subtitle: 'Our team is ready to assist you with your environmental consulting needs.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Your full name',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone Number',
      phonePlaceholder: '+966 XX XXX XXXX',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project or inquiry...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Your message has been sent successfully. We will be in touch shortly.',
      error: 'An error occurred. Please try again.',
    },
    info: {
      address: 'Kingdom of Saudi Arabia',
      phone: '+966 XX XXX XXXX',
      email: 'info@aacec.sa',
      followUs: 'Follow Us',
    },
  },

  footer: {
    description:
      'A specialized environmental consulting firm committed to sustainable development, regulatory compliance, and scientific excellence.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    copyright: '© 2026 Amana Alard Company for Environmental Consulting. All rights reserved.',
    links: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      whyUs: 'Why Us',
      contact: 'Contact Us',
    },
  },
};
