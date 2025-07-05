import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations = {
    en: {
      heroTitle: "Hi, I'm Javi Márquez",
      heroSubtitle: "Technology Journalist & Content Creator",
      heroDescription: "With over 8 years of experience, I specialize in creating engaging content about technology, cybersecurity, and artificial intelligence. I transform complex topics into clear and accessible stories.",
      aboutTitle: "About Me",
      aboutSubtitle: "A Technology Enthusiast",
      aboutDescription1: "I am a technology journalist with a passion for cybersecurity and artificial intelligence. Throughout my career, I have dedicated myself to understanding and communicating how technology impacts our lives.",
      aboutDescription2: "My goal is to make technology accessible to everyone, demystifying complex concepts and providing clear and concise information. I believe in the power of knowledge to empower people in an increasingly digital world.",
      experienceTitle: "Experience",
      experienceSubtitle: "My Professional Journey",
      experienceItem1Title: "Cybersecurity Analyst",
      experienceItem1Company: "Deloitte",
      experienceItem1Date: "2018 - 2020",
      experienceItem1Description: "Conducted security audits and vulnerability assessments for major companies, ensuring the protection of their critical assets.",
      experienceItem2Title: "Technology Journalist",
      experienceItem2Company: "Xataka",
      experienceItem2Date: "2020 - Present",
      experienceItem2Description: "Write about cybersecurity, artificial intelligence, and technology trends. Conducted in-depth analysis and created engaging content for a broad audience.",
      experienceItem3Title: "Content Creator",
      experienceItem3Company: "JaviMárquez.tech",
      experienceItem3Date: "2022 - Present",
      experienceItem3Description: "Create content on cybersecurity, AI, and technology trends for a broad audience.",
      articlesTitle: "Featured Articles",
      article1Title: "What to study if you want to dedicate yourself to AI: four experts answer",
      article1Desc: "If you want to focus your professional future on artificial intelligence, here are some tips to guide you.",
      article2Title: "How often should we change all our passwords? Three cybersecurity experts",
      article2Desc: "We review what password hygiene consists of, how often we should change them and what to do to create strong keys.",
      article3Title: "What is the Robinson List for and does it really work?",
      article3Desc: "We explain what the Robinson List is, how it works and what you have to do to register.",
      article4Title: "Xiaomi 15: opinions, first contact (photos and video)",
      article4Desc: "Xiaomi has just presented its new high-end mobile, and we have already been able to test it. These are our first impressions.",
      article5Title: "Samsung Galaxy Tab S10 FE Plus: opinions, first contact (photos and video)",
      article5Desc: "Samsung has just presented its new high-end tablet, and we have already been able to test it. These are our first impressions.",
      article6Title: "OPPO Reno 13 Pro 5G: opinions, first contact (photos and video)",
      article6Desc: "OPPO has just presented its new high-end mobile, and we have already been able to test it. These are our first impressions.",
      xataka: "Xataka",
      contactTitle: "Contact",
      contactSubtitle: "Get In Touch",
      contactDesc: "I'm always interested in new opportunities and collaborations. Whether you have a story tip, want to discuss the latest tech trends, or are looking for a technology journalist, feel free to reach out.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      sendMessage: "Send Message",
      messageSent: "Message Sent!",
      messageDesc: "Thanks for reaching out. I'll get back to you as soon as possible."
    },
    es: {
      heroTitle: "Hola, soy Javi Márquez",
      heroSubtitle: "Periodista Tecnológico y Creador de Contenido",
      heroDescription: "Con más de 8 años de experiencia, me especializo en crear contenido atractivo sobre tecnología, ciberseguridad e inteligencia artificial. Transformo temas complejos en historias claras y accesibles.",
      aboutTitle: "Sobre Mí",
      aboutSubtitle: "Un Entusiasta de la Tecnología",
      aboutDescription1: "Soy un periodista tecnológico con pasión por la ciberseguridad y la inteligencia artificial. A lo largo de mi carrera, me he dedicado a entender y comunicar cómo la tecnología impacta nuestras vidas.",
      aboutDescription2: "Mi objetivo es hacer que la tecnología sea accesible para todos, desmitificando conceptos complejos y proporcionando información clara y concisa. Creo en el poder del conocimiento para empoderar a las personas en un mundo cada vez más digital.",
      experienceTitle: "Experiencia",
      experienceSubtitle: "Mi Trayectoria Profesional",
      experienceItem1Title: "Analista de Ciberseguridad",
      experienceItem1Company: "Deloitte",
      experienceItem1Date: "2018 - 2020",
      experienceItem1Description: "Realicé auditorías de seguridad y evaluaciones de vulnerabilidades para importantes empresas, garantizando la protección de sus activos críticos.",
      experienceItem2Title: "Periodista Tecnológico",
      experienceItem2Company: "Xataka",
      experienceItem2Date: "2020 - Presente",
      experienceItem2Description: "Escribo sobre ciberseguridad, inteligencia artificial y tendencias tecnológicas. Realicé análisis en profundidad y creé contenido atractivo para una amplia audiencia.",
      experienceItem3Title: "Creador de Contenido",
      experienceItem3Company: "JaviMárquez.tech",
      experienceItem3Date: "2022 - Presente",
      experienceItem3Description: "Creo contenido sobre ciberseguridad, IA y tendencias tecnológicas para una amplia audiencia.",
      articlesTitle: "Artículos Destacados",
      article1Title: "Qué estudiar si quieres dedicarte a la IA: responden cuatro expertos",
      article1Desc: "Si quieres enfocar tu futuro profesional a la inteligencia artificial, aquí tienes algunos consejos para orientarte.",
      article2Title: "¿Cada cuánto debemos cambiar todas nuestras contraseñas? Tres expertos en ciberseguridad",
      article2Desc: "Repasamos en qué consiste la higiene de contraseñas, cada cuánto deberíamos cambiarlas y qué hacer para crear claves robustas.",
      article3Title: "¿Para qué sirve la Lista Robinson y realmente funciona?",
      article3Desc: "Te explicamos qué es la Lista Robinson, cómo funciona y qué tienes que hacer para apuntarte.",
      article4Title: "Xiaomi 15: opiniones, toma de contacto (fotos y vídeo)",
      article4Desc: "Xiaomi acaba de presentar su nuevo móvil de gama alta, y ya hemos podido probarlo. Estas son nuestras primeras impresiones.",
      article5Title: "Samsung Galaxy Tab S10 FE Plus: opiniones, toma de contacto (fotos y vídeo)",
      article5Desc: "Samsung acaba de presentar su nueva tablet de gama alta, y ya hemos podido probarlo. Estas son nuestras primeras impresiones.",
      article6Title: "OPPO Reno 13 Pro 5G: opiniones, toma de contacto (fotos y vídeo)",
      article6Desc: "OPPO acaba de presentar su nuevo móvil de gama alta, y ya hemos podido probarlo. Estas son nuestras primeras impresiones.",
      xataka: "Xataka",
      contactTitle: "Contacto",
      contactSubtitle: "Ponte en Contacto",
      contactDesc: "Siempre estoy interesado en nuevas oportunidades y colaboraciones. Ya sea que tengas una pista para una historia, quieras discutir las últimas tendencias tecnológicas, o busques un periodista de tecnología, no dudes en contactarme.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Correo Electrónico",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Tu Mensaje",
      sendMessage: "Enviar Mensaje",
      messageSent: "¡Mensaje Enviado!",
      messageDesc: "Gracias por contactarme. Te responderé lo antes posible."
    }
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
