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
    name: 'Clark Kent',
    title: 'Investigative Reporter',
    description: 'Uncovering truth and justice through journalism. Specializing in investigative reporting, breaking news, and human interest stories with the Daily Planet in Metropolis.',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    
    // About Section
    aboutTitle: 'About Me',
    aboutP1: "I'm a dedicated investigative reporter with a passion for truth, justice, and protecting the innocent through journalism. My work focuses on exposing corruption, covering breaking news, and telling the stories of everyday heroes in Metropolis and beyond.",
    aboutP2: "Raised in Smallville, Kansas, I bring small-town values to big-city journalism. With a degree from the University of Kansas and years of experience at the Daily Planet, I've covered everything from city hall corruption to extraordinary events that shape our world.",
    aboutP3: "When I'm not chasing stories around Metropolis, I enjoy spending time with my colleagues at the Daily Planet, exploring the city, and always keeping an ear out for those who need someone to tell their story.",
    
    // Experience Section
    experienceTitle: 'Experience',
    seniorReporter: 'Senior Staff Reporter',
    staffReporter: 'Staff Reporter',
    juniorReporter: 'Junior Reporter',
    seniorDesc: 'Leading investigative pieces on major stories affecting Metropolis and beyond. Specialized coverage of extraordinary events, city government, and human interest stories that matter to our community.',
    staffDesc: 'Covered breaking news, city politics, and community events throughout Metropolis. Developed strong relationships with sources across all levels of city government and local organizations.',
    juniorDesc: 'Started my journalism career covering local news, sports, and community events. Built foundation in ethical reporting and developed the investigative instincts that drive my work today.',
    
    // Articles Section
    articlesTitle: 'Featured Articles',
    article1Title: 'Corruption in City Hall Exposed',
    article1Desc: 'Six-month investigation uncovering financial irregularities in Metropolis city contracts...',
    article2Title: 'The Heroes Among Us',
    article2Desc: 'A look at the everyday citizens of Metropolis who make extraordinary differences in their community...',
    article3Title: 'LexCorp Under Scrutiny',
    article3Desc: 'Investigating business practices and their impact on Metropolis workers and families...',
    article4Title: 'Metropolis After the Storm',
    article4Desc: 'How our city rebuilds and comes together after extraordinary challenges...',
    article5Title: 'Small Town Values, Big City Dreams',
    article5Desc: 'Exploring how rural transplants adapt to life in Metropolis while keeping their roots...',
    article6Title: 'The Power of Truth in Journalism',
    article6Desc: 'Why honest reporting matters more than ever in our complex world...',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: "Let's Connect",
    contactDesc: 'Have a news tip, story idea, or just want to discuss journalism? I would love to hear from you. Truth and transparency are the foundations of good reporting.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message',
    sendMessage: 'Send Message',
    messageSent: 'Message sent!',
    messageDesc: "Thank you for your message. I'll get back to you soon.",
    
    // Footer
    footerText: '© 2024 Clark Kent. All rights reserved. | Committed to truth, justice, and the power of honest journalism.',
    
    // Publications
    washingtonHerald: 'Daily Planet',
    metroDailyNews: 'Metropolis Tribune',
    cityTribune: 'Smallville Gazette'
  },
  es: {
    // Navigation
    about: 'Acerca de',
    experience: 'Experiencia',
    articles: 'Artículos',
    contact: 'Contacto',
    
    // Hero Section
    name: 'Clark Kent',
    title: 'Reportero de Investigación',
    description: 'Descubriendo la verdad y la justicia a través del periodismo. Especializado en reportajes de investigación, noticias de última hora e historias de interés humano con el Daily Planet en Metrópolis.',
    viewWork: 'Ver Mi Trabajo',
    getInTouch: 'Contactar',
    
    // About Section
    aboutTitle: 'Acerca de Mí',
    aboutP1: 'Soy un reportero de investigación dedicado con pasión por la verdad, la justicia y proteger a los inocentes a través del periodismo. Mi trabajo se centra en exponer la corrupción, cubrir noticias de última hora y contar las historias de héroes cotidianos en Metrópolis y más allá.',
    aboutP2: 'Criado en Smallville, Kansas, traigo valores de pueblo pequeño al periodismo de gran ciudad. Con un título de la Universidad de Kansas y años de experiencia en el Daily Planet, he cubierto desde corrupción en el ayuntamiento hasta eventos extraordinarios que moldean nuestro mundo.',
    aboutP3: 'Cuando no estoy persiguiendo historias por Metrópolis, disfruto pasar tiempo con mis colegas del Daily Planet, explorando la ciudad, y siempre manteniendo el oído atento a aquellos que necesitan a alguien que cuente su historia.',
    
    // Experience Section
    experienceTitle: 'Experiencia',
    seniorReporter: 'Reportero Senior de Planta',
    staffReporter: 'Reportero de Planta',
    juniorReporter: 'Reportero Junior',
    seniorDesc: 'Lidero piezas de investigación sobre historias importantes que afectan a Metrópolis y más allá. Cobertura especializada de eventos extraordinarios, gobierno de la ciudad e historias de interés humano que importan a nuestra comunidad.',
    staffDesc: 'Cubrí noticias de última hora, política de la ciudad y eventos comunitarios en toda Metrópolis. Desarrollé relaciones sólidas con fuentes en todos los niveles del gobierno de la ciudad y organizaciones locales.',
    juniorDesc: 'Comencé mi carrera periodística cubriendo noticias locales, deportes y eventos comunitarios. Construí una base en reportajes éticos y desarrollé los instintos de investigación que impulsan mi trabajo hoy.',
    
    // Articles Section
    articlesTitle: 'Artículos Destacados',
    article1Title: 'Corrupción en el Ayuntamiento Expuesta',
    article1Desc: 'Investigación de seis meses descubriendo irregularidades financieras en contratos de la ciudad de Metrópolis...',
    article2Title: 'Los Héroes Entre Nosotros',
    article2Desc: 'Una mirada a los ciudadanos cotidianos de Metrópolis que hacen diferencias extraordinarias en su comunidad...',
    article3Title: 'LexCorp Bajo Escrutinio',
    article3Desc: 'Investigando prácticas comerciales y su impacto en los trabajadores y familias de Metrópolis...',
    article4Title: 'Metrópolis Después de la Tormenta',
    article4Desc: 'Cómo nuestra ciudad se reconstruye y se une después de desafíos extraordinarios...',
    article5Title: 'Valores de Pueblo Pequeño, Sueños de Gran Ciudad',
    article5Desc: 'Explorando cómo los trasplantados rurales se adaptan a la vida en Metrópolis mientras mantienen sus raíces...',
    article6Title: 'El Poder de la Verdad en el Periodismo',
    article6Desc: 'Por qué los reportajes honestos importan más que nunca en nuestro mundo complejo...',
    
    // Contact Section
    contactTitle: 'Ponte en Contacto',
    contactSubtitle: 'Conectemos',
    contactDesc: '¿Tienes una pista de noticias, idea para una historia, o simplemente quieres discutir periodismo? Me encantaría escucharte. La verdad y la transparencia son los fundamentos de un buen reportaje.',
    namePlaceholder: 'Tu Nombre',
    emailPlaceholder: 'Tu Email',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Tu Mensaje',
    sendMessage: 'Enviar Mensaje',
    messageSent: '¡Mensaje enviado!',
    messageDesc: 'Gracias por tu mensaje. Te responderé pronto.',
    
    // Footer
    footerText: '© 2024 Clark Kent. Todos los derechos reservados. | Comprometido con la verdad, la justicia y el poder del periodismo honesto.',
    
    // Publications
    washingtonHerald: 'Daily Planet',
    metroDailyNews: 'Metropolis Tribune',
    cityTribune: 'Smallville Gazette'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
