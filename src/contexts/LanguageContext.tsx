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
    aboutP1: 'Soy un periodista tecnológico con una sólida formación en medios audiovisuales y digitales. Escribo para Xataka, una de las principales publicaciones tecnológicas en español, y he cubierto todo desde IA y ciberseguridad hasta dispositivos móviles e innovación.',
    aboutP2: 'Comencé mi carrera en radio y televisión en Argentina y luego me mudé a España, donde me enfoco en tecnología que impacta la vida cotidiana. Mi trabajo abarca desde desglosar desarrollos complejos de IA hasta reseñar los últimos productos electrónicos de consumo.',
    aboutP3: 'Cuando no estoy escribiendo sobre las últimas tendencias tecnológicas, disfruto explorando cómo las tecnologías emergentes pueden marcar una diferencia real en la vida diaria de las personas, siempre manteniendo la accesibilidad y el impacto práctico en el centro de mis reportajes.',
    
    // Experience Section
    experienceTitle: 'Experiencia',
    editor: 'Editor',
    techWriter: 'Redactor Tecnológico',
    techContentPresenter: 'Presentador de Contenido Tecnológico',
    journalist: 'Periodista',
    host: 'Conductor',
    newsAnchor: 'Presentador de Noticias',
    techColumnist: 'Columnista de Tecnología',
    editorDesc: 'Escribiendo sobre tecnología de consumo, IA, ciberseguridad e innovación para la principal publicación tecnológica en español.',
    techWriterDesc: 'Cubrí electrónicos de consumo, software y ciberseguridad con enfoque en el impacto práctico.',
    presenterDesc: 'Produje y presenté contenido relacionado con tecnología para una de las estaciones de radio más populares de Argentina.',
    journalistDesc: 'Creé contenido tecnológico digital y al aire; análisis de audiencia y reporte de métricas.',
    hostDesc: 'Produje y conduje un programa de TV regional enfocado en explicar tecnologías emergentes.',
    anchorDesc: 'Presenté y coproducí el noticiero de la noche. Reporté en vivo desde el campo en eventos importantes.',
    columnistDesc: 'Escribí y presenté segmentos tecnológicos semanales para audiencias de televisión y radio en San Luis, Argentina.',
    
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
    variousMedia: 'Medios Varios'
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
