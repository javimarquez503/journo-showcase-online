import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    about: 'About',
    experience: 'Experience', 
    articles: 'Articles',
    contact: 'Contact',
    
    // Hero Section
    name: 'Javier Marquez',
    title: 'Tech Journalist',
    description: "I'm a tech journalist with a solid background in broadcasting and digital media. I write for Xataka, one of the leading Spanish-language technology publications, and have covered everything from AI and cybersecurity to mobile devices and innovation. I began my career in radio and television in Argentina and later moved to Spain, where I focus on technology that impacts everyday life.",
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    
    // About Section
    aboutTitle: 'About Me',
    aboutP1: "I'm a tech journalist with a solid background in broadcasting and digital media. I write for Xataka, one of the leading Spanish-language technology publications, and have covered everything from AI and cybersecurity to mobile devices and innovation.",
    aboutP2: "I began my career in radio and television in Argentina and later moved to Spain, where I focus on technology that impacts everyday life. My work spans from breaking down complex AI developments to reviewing the latest consumer electronics.",
    aboutP3: "When I'm not writing about the latest tech trends, I enjoy exploring how emerging technologies can make a real difference in people's daily lives, always keeping accessibility and practical impact at the forefront of my reporting.",
    
    // Experience Section
    experienceTitle: 'Experience',
    editor: 'Editor',
    techWriter: 'Tech Writer',
    techContentPresenter: 'Tech Content Presenter',
    journalist: 'Journalist',
    host: 'Host',
    newsAnchor: 'News Anchor',
    techColumnist: 'Technology Columnist',
    editorDesc: 'Writing about consumer technology, AI, cybersecurity and innovation for the leading tech publication in Spanish.',
    techWriterDesc: 'Covered consumer electronics, software and cybersecurity with a focus on practical impact.',
    presenterDesc: 'Produced and presented tech-related content for one of Argentina\'s most popular radio stations.',
    journalistDesc: 'Created digital and on-air tech content; audience analytics and metric reporting.',
    hostDesc: 'Produced and hosted a regional TV show focused on explaining emerging technologies.',
    anchorDesc: 'Anchored and co-produced the evening news. Reported live from the field on major events.',
    columnistDesc: 'Wrote and presented weekly tech segments for television and radio audiences in San Luis, Argentina.',
    
    // Articles Section
    articlesTitle: 'Featured Articles',
    article1Title: 'I\'ve just finished high school and want to work in AI. What should I study?',
    article1Desc: 'A deep-dive featuring leading voices in Spanish tech to guide the next generation of AI professionals.',
    article2Title: 'How often should we change all our passwords?',
    article2Desc: 'A cybersecurity piece that gathers expert opinions on a habit we all question but rarely update.',
    article3Title: 'What\'s the point of the Robinson List? We asked the experts',
    article3Desc: 'An investigation into the effectiveness of Spain\'s main opt-out advertising register.',
    article4Title: 'Hands-on: Xiaomi 15 Ultra',
    article4Desc: 'First impressions of Xiaomi\'s flagship: camera, performance and why it matters in 2025.',
    article5Title: 'Hands-on: Samsung Galaxy Tab S10 FE+',
    article5Desc: 'Early impressions of Samsung\'s new tablet: productivity meets affordability.',
    article6Title: 'Hands-on: OPPO Reno 13 Pro 5G',
    article6Desc: 'A sleek contender in the mid-range with a premium feel and strong photography focus.',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Let\'s Connect',
    contactDesc: 'Have a story idea, want to discuss tech trends, or interested in collaborating? I\'d love to hear from you. Technology moves fast, and the best stories come from meaningful conversations.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message',
    sendMessage: 'Send Message',
    messageSent: 'Message sent!',
    messageDesc: 'Thank you for your message. I\'ll get back to you soon.',
    
    // Footer
    footerText: '© 2024 Javier Marquez. All rights reserved. | Tech journalist covering innovation, AI, and cybersecurity.',
    
    // Publications
    xataka: 'Xataka',
    hipertextual: 'Hipertextual',
    la100: 'La 100',
    radioMitre: 'Radio Mitre',
    ctv: 'CTV',
    variousMedia: 'Various Media'
  },
  es: {
    // Navigation
    about: 'Acerca de',
    experience: 'Experiencia',
    articles: 'Artículos',
    contact: 'Contacto',
    
    // Hero Section
    name: 'Javier Marquez',
    title: 'Periodista Tecnológico',
    description: 'Soy periodista especializado en tecnología, con amplia experiencia en medios. Escribo en Xataka, la principal publicación tecnológica en español, y he cubierto temas que van desde inteligencia artificial y ciberseguridad hasta dispositivos móviles e innovación. Comencé mi carrera en Argentina, trabajando en radio, televisión y contenidos digitales, y más tarde me trasladé a España, donde continúo mi desarrollo profesional.',
    viewWork: 'Ver Mi Trabajo',
    getInTouch: 'Contactar',
    
    // About Section
    aboutTitle: 'Acerca de Mí',
    aboutP1: 'Informar sobre tecnología no es solo hablar de lo nuevo. Es explicar cómo nos afecta, qué hay detrás y hacia dónde vamos. Esa es la responsabilidad que asumo como periodista: con rigor, con fuentes fiables y con respeto por quien nos lee.',
    aboutP2: 'En Xataka encuentro el entorno perfecto para mantener ese compromiso. Trabajar allí es exigente, pero también es una forma de estar a la altura de un momento clave para entender el mundo que viene.',
    aboutP3: '',
    
    // Experience Section
    experienceTitle: 'Experiencia',
    editor: 'Editor',
    techWriter: 'Redactor de tecnología',
    techContentPresenter: 'Creador de contenidos digitales',
    journalist: 'Conductor y productor',
    host: 'Presentador de noticias y reportero',
    newsAnchor: 'Columnista de Tecnología',
    techColumnist: '',
    editorDesc: 'Webedia / Xataka · Dic 2021 – Actualidad',
    techWriterDesc: 'Hipertextual · Nov 2020 – Dic 2021. Escribí sobre tecnología de consumo, software y ciberseguridad, con una redacción clara y precisa. El objetivo era explicar temas complejos de forma comprensible y útil para el lector.',
    presenterDesc: 'Grupo Clarín (Radio Mitre y La 100) · Nov 2020 – Dic 2021. Formé parte del equipo digital del grupo de medios más importante de Argentina. Escribía artículos para sus portales web y también creaba vídeos sobre tecnología que se publicaban en una cuenta de Instagram con más de dos millones de seguidores.',
    journalistDesc: 'CTV · Oct 2018 – Abr 2019',
    hostDesc: 'CTV · 2014 – 2019. Durante casi cinco años estuve al frente de un noticiero nocturno y también cubrí noticias en exteriores, trabajando en directo desde el lugar de los hechos.',
    anchorDesc: 'Varios canales de televisión · 2012 – 2019',
    columnistDesc: '',
    
    // Articles Section
    articlesTitle: 'Artículos Destacados',
    article1Title: 'He terminado la PAU y quiero dedicarme a la IA: ¿qué tengo que estudiar?',
    article1Desc: 'Un análisis profundo con las voces líderes en tecnología española para guiar a la próxima generación de profesionales de IA.',
    article2Title: '¿Cada cuánto debemos cambiar todas nuestras contraseñas?',
    article2Desc: 'Un artículo de ciberseguridad que reúne opiniones de expertos sobre un hábito que todos cuestionamos pero rara vez actualizamos.',
    article3Title: '¿Sirve de algo apuntarse a la Lista Robinson?',
    article3Desc: 'Una investigación sobre la efectividad del principal registro de exclusión publicitaria de España.',
    article4Title: 'Toma de contacto: Xiaomi 15 Ultra',
    article4Desc: 'Primeras impresiones del buque insignia de Xiaomi: cámara, rendimiento y por qué importa en 2025.',
    article5Title: 'Toma de contacto: Samsung Galaxy Tab S10 FE+',
    article5Desc: 'Primeras impresiones de la nueva tablet de Samsung: productividad y asequibilidad.',
    article6Title: 'Toma de contacto: OPPO Reno 13 Pro 5G',
    article6Desc: 'Un competidor elegante en la gama media con sensación premium y fuerte enfoque fotográfico.',
    
    // Contact Section
    contactTitle: 'Ponte en Contacto',
    contactSubtitle: 'Conectemos',
    contactDesc: '¿Tienes una idea para una historia, quieres discutir tendencias tecnológicas, o estás interesado en colaborar? Me encantaría escucharte. La tecnología avanza rápido, y las mejores historias vienen de conversaciones significativas.',
    namePlaceholder: 'Tu Nombre',
    emailPlaceholder: 'Tu Email',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Tu Mensaje',
    sendMessage: 'Enviar Mensaje',
    messageSent: '¡Mensaje enviado!',
    messageDesc: 'Gracias por tu mensaje. Te responderé pronto.',
    
    // Footer
    footerText: '© 2024 Javier Marquez. Todos los derechos reservados. | Periodista tecnológico cubriendo innovación, IA y ciberseguridad.',
    
    // Publications
    xataka: 'Xataka',
    hipertextual: 'Hipertextual',
    la100: 'La 100',
    radioMitre: 'Radio Mitre',
    ctv: 'CTV',
    variousMedia: 'Varios canales de televisión'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
