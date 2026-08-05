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
    headline: 'Environmental Solutions and Consultancy for Compliance and Sustainability',
    subheadline:
      'We help organizations prepare environmental studies, obtain permits, conduct environmental audits, and build environmental management plans in line with the regulations and requirements in force across the Kingdom',
    ctaPrimary: 'Contact Us',
    ctaSecondary: 'Explore Our Services',
    stats: [
      { value: 10, suffix: '+', label: 'Years of Experience' },
      { value: 200, suffix: '+', label: 'Projects Completed' },
      { value: 150, suffix: '+', label: 'Clients Served' },
    ],
  },

  about: {
    sectionLabel: 'Who We Are',
    title: 'Your Trusted Partner in Environmental Consultancy and Compliance',
    description:
      'Amana Alard Company for Environmental Consulting is a Saudi specialized firm providing environmental solutions and consultancy, preparing environmental studies, conducting environmental audits, and building environmental management plans that support compliance and sustainability for both government and private sector projects',
    vision: {
      title: 'Our Vision',
      text: 'To be the leading environmental consulting firm in the region, recognized for scientific excellence, integrity, and measurable environmental impact.',
    },
    mission: {
      title: 'Our Mission',
      text: 'To provide integrated environmental consulting services that help our clients achieve sustainable development, regulatory compliance, and environmental stewardship — grounded in science and international best practices.',
    },
    stats: [
      { value: 10, suffix: '+', label: 'Years of Experience' },
      { value: 200, suffix: '+', label: 'Projects Completed' },
      { value: 150, suffix: '+', label: 'Clients Served' },
      { value: 30, suffix: '+', label: 'Expert Consultants' },
    ],
  },

  services: {
    sectionLabel: 'What We Do',
    title: 'Integrated Environmental Solutions for Your Projects and Facilities',
    subtitle:
      'We provide specialized environmental consultancy covering impact assessment studies, environmental compliance and permits, environmental management plans, waste management, and sustainability studies — supporting compliance and project success',
    items: [
      {
        title: 'Environmental Impact Assessment (EIA)',
        description:
          'Preparing environmental impact assessment studies per competent authority requirements, evaluating environmental impacts, and identifying suitable mitigation measures to support environmental compliance and sustainable development',
      },
      {
        title: 'Environmental Audits & Management Plans',
        description:
          'Environmental audits and the preparation of environmental management and mitigation implementation plans to raise compliance and improve environmental performance',
      },
      {
        title: 'Environmental Compliance & Permits',
        description:
          'Supporting facilities in meeting environmental compliance requirements, preparing environmental records and self-monitoring reports, and managing permit issuance and renewal',
      },
      {
        title: 'Waste Management',
        description:
          'Preparing waste management plans including classification, storage, transport, and disposal in line with environmental regulations and best practices',
      },
      {
        title: 'Sustainability & ESG Reports',
        description:
          'Preparing sustainability studies and Environmental, Social, and Governance (ESG) and environmental responsibility reports, supporting sustainable development and environmental performance initiatives',
      },
      {
        title: 'Environmental Consultancy for Projects',
        description:
          'Providing environmental consultancy across all project phases — planning, design, and operation — to ensure regulatory compliance and reduce environmental risk',
      },
    ],
  },

  whyUs: {
    sectionLabel: 'Why Choose Us',
    title: 'Trusted Expertise... Environmental Solutions That Make a Difference',
    subtitle:
      'We are committed to providing environmental consultancy that combines technical expertise, regulatory compliance, and practical solutions to help our clients achieve environmental compliance and sustain their projects',
    items: [
      {
        title: 'Specialized Expertise',
        description:
          'We bring experience in delivering environmental studies and consultancy across sectors, with deep understanding of environmental regulations to provide practical solutions that meet our clients\' needs',
      },
      {
        title: 'Quality & Reliability',
        description:
          'We prepare accurate, reliable environmental studies and reports using scientific methodologies and professional best practices to ensure quality outputs and the highest credibility',
      },
      {
        title: 'Regulatory Compliance',
        description:
          'We support facilities in achieving compliance with environmental laws through specialized solutions aligned with the Kingdom\'s regulatory requirements',
      },
      {
        title: 'Practical Solutions',
        description:
          'We deliver integrated, actionable environmental solutions tailored to each project that manage environmental risk and enhance business sustainability',
      },
      {
        title: 'Commitment to Deadlines',
        description:
          'We complete and deliver studies and reports within agreed timelines while maintaining output quality and accuracy throughout',
      },
      {
        title: 'Ongoing Partnership',
        description:
          'We believe project success relies on continuous collaboration, providing technical and advisory support at every stage toward achieving our clients\' environmental goals',
      },
    ],
  },

  projects: {
    sectionLabel: 'Our Work',
    title: 'Selected Projects & Sectors',
    subtitle:
      'We are proud to deliver environmental projects and consultancy across diverse sectors, offering practical solutions that support environmental compliance and project sustainability under applicable regulations',
    items: [
      {
        title: 'Industry & Mining',
        description: 'Specialized environmental solutions and consultancy for industrial and mining projects',
        image: '/assets/sections/projects-industry.jpeg',
      },
      {
        title: 'Agriculture & Water Resources',
        description: 'Environmental studies supporting agricultural sustainability and water resource management',
        image: '/assets/sections/projects-agriculture.jpeg',
      },
      {
        title: 'Construction & Urban Development',
        description: 'Integrated environmental services for construction and urban development projects',
        image: '/assets/sections/projects-construction.jpeg',
      },
      {
        title: 'Workshops & Service Facilities',
        description: 'Environmental consultancy for compliance and improved environmental performance',
        image: '/assets/sections/projects-services.jpeg',
      },
    ],
  },

  cta: {
    title: 'Ready to Build a More Sustainable Future?',
    subtitle:
      'Contact us to discuss your project needs, and we will provide the right environmental solutions to help you achieve compliance and sustainability efficiently',
    button: 'Contact Us',
    secondaryButton: 'Explore Our Services',
  },

  contact: {
    sectionLabel: 'Get In Touch',
    title: 'Contact Our Environmental Experts',
    subtitle:
      'Our team is glad to answer your inquiries and provide the appropriate environmental solutions and consultancy for your project needs',
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
      address: 'Riyadh – Kingdom of Saudi Arabia',
      phone: '+966 53 275 5899',
      email: 'info@aacec.sa',
      whatsapp: 'Chat with us on WhatsApp',
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