
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
    name: 'Sarah Mitchell',
    title: 'Investigative Journalist',
    description: 'Uncovering stories that matter. Specializing in political investigations, social justice, and environmental reporting with over 8 years of experience in digital and print media.',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    
    // About Section
    aboutTitle: 'About Me',
    aboutP1: "I'm a dedicated investigative journalist with a passion for uncovering the truth and telling stories that make a difference. My work focuses on holding power accountable, amplifying underrepresented voices, and exploring the intersection of politics, environment, and social justice.",
    aboutP2: "With a Master's degree in Journalism from Columbia University and eight years of experience working with leading publications, I've developed expertise in data-driven reporting, long-form investigations, and multimedia storytelling.",
    aboutP3: "When I'm not chasing stories, you can find me mentoring young journalists, speaking at conferences about press freedom, or exploring new hiking trails with my camera.",
    
    // Experience Section
    experienceTitle: 'Experience',
    seniorReporter: 'Senior Investigative Reporter',
    staffReporter: 'Staff Reporter',
    juniorReporter: 'Junior Reporter',
    seniorDesc: 'Lead investigative projects focusing on government accountability and environmental issues. Published over 50 in-depth articles resulting in policy changes and public awareness campaigns.',
    staffDesc: 'Covered local politics, city council meetings, and community issues. Developed sources and built relationships within the political landscape.',
    juniorDesc: 'Started career covering breaking news, court proceedings, and human interest stories. Established foundation in journalistic ethics and reporting standards.',
    
    // Articles Section
    articlesTitle: 'Featured Articles',
    article1Title: 'The Hidden Cost of Industrial Pollution',
    article1Desc: 'A six-month investigation into illegal dumping practices affecting local communities...',
    article2Title: 'Campaign Finance Irregularities Exposed',
    article2Desc: 'Uncovering questionable financial ties in the mayoral race that led to reforms...',
    article3Title: 'Housing Crisis: Voices from the Street',
    article3Desc: 'Personal stories from those affected by the affordable housing shortage...',
    article4Title: 'Public Records Reveal Spending Waste',
    article4Desc: 'Data analysis exposes millions in wasteful government spending...',
    article5Title: 'Healthcare Access in Rural Communities',
    article5Desc: 'Exploring the challenges faced by rural residents seeking medical care...',
    article6Title: 'The Digital Divide in Education',
    article6Desc: 'How the pandemic highlighted inequalities in educational technology access...',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: "Let's Connect",
    contactDesc: 'Have a story tip, collaboration opportunity, or just want to chat about journalism? I would love to hear from you.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message',
    sendMessage: 'Send Message',
    messageSent: 'Message sent!',
    messageDesc: "Thank you for your message. I'll get back to you soon.",
    
    // Footer
    footerText: '© 2024 Sarah Mitchell. All rights reserved. | Dedicated to truth, transparency, and public service journalism.',
    
    // Publications
    washingtonHerald: 'The Washington Herald',
    metroDailyNews: 'Metro Daily News',
    cityTribune: 'City Tribune'
  },
  es: {
    // Navigation
    about: 'Acerca de',
    experience: 'Experiencia',
    articles: 'Artículos',
    contact: 'Contacto',
    
    // Hero Section
    name: 'Sarah Mitchell',
    title: 'Periodista de Investigación',
    description: 'Descubriendo historias que importan. Especializada en investigaciones políticas, justicia social y reportajes ambientales con más de 8 años de experiencia en medios digitales e impresos.',
    viewWork: 'Ver Mi Trabajo',
    getInTouch: 'Contactar',
    
    // About Section
    aboutTitle: 'Acerca de Mí',
    aboutP1: 'Soy una periodista de investigación dedicada con pasión por descubrir la verdad y contar historias que marcan la diferencia. Mi trabajo se centra en responsabilizar al poder, amplificar voces subrepresentadas y explorar la intersección de política, medio ambiente y justicia social.',
    aboutP2: 'Con una Maestría en Periodismo de la Universidad de Columbia y ocho años de experiencia trabajando con publicaciones líderes, he desarrollado experiencia en reportajes basados en datos, investigaciones de formato largo y narrativa multimedia.',
    aboutP3: 'Cuando no estoy persiguiendo historias, puedes encontrarme mentoreando jóvenes periodistas, hablando en conferencias sobre libertad de prensa, o explorando nuevos senderos de montaña con mi cámara.',
    
    // Experience Section
    experienceTitle: 'Experiencia',
    seniorReporter: 'Reportera de Investigación Senior',
    staffReporter: 'Reportera de Planta',
    juniorReporter: 'Reportera Junior',
    seniorDesc: 'Lidero proyectos de investigación enfocados en responsabilidad gubernamental y temas ambientales. Publiqué más de 50 artículos en profundidad que resultaron en cambios de políticas y campañas de conciencia pública.',
    staffDesc: 'Cubrí política local, reuniones del consejo municipal y temas comunitarios. Desarrollé fuentes y construí relaciones dentro del panorama político.',
    juniorDesc: 'Comencé mi carrera cubriendo noticias de última hora, procedimientos judiciales e historias de interés humano. Establecí una base en ética periodística y estándares de reportaje.',
    
    // Articles Section
    articlesTitle: 'Artículos Destacados',
    article1Title: 'El Costo Oculto de la Contaminación Industrial',
    article1Desc: 'Una investigación de seis meses sobre prácticas ilegales de vertidos que afectan a comunidades locales...',
    article2Title: 'Irregularidades en Financiamiento de Campaña Expuestas',
    article2Desc: 'Descubriendo vínculos financieros cuestionables en la carrera a la alcaldía que llevaron a reformas...',
    article3Title: 'Crisis de Vivienda: Voces desde la Calle',
    article3Desc: 'Historias personales de aquellos afectados por la escasez de vivienda asequible...',
    article4Title: 'Registros Públicos Revelan Desperdicio de Gastos',
    article4Desc: 'El análisis de datos expone millones en gastos gubernamentales desperdiciados...',
    article5Title: 'Acceso a Atención Médica en Comunidades Rurales',
    article5Desc: 'Explorando los desafíos que enfrentan los residentes rurales al buscar atención médica...',
    article6Title: 'La Brecha Digital en la Educación',
    article6Desc: 'Cómo la pandemia destacó las desigualdades en el acceso a tecnología educativa...',
    
    // Contact Section
    contactTitle: 'Ponte en Contacto',
    contactSubtitle: 'Conectemos',
    contactDesc: '¿Tienes una pista para una historia, oportunidad de colaboración, o simplemente quieres charlar sobre periodismo? Me encantaría escucharte.',
    namePlaceholder: 'Tu Nombre',
    emailPlaceholder: 'Tu Email',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Tu Mensaje',
    sendMessage: 'Enviar Mensaje',
    messageSent: '¡Mensaje enviado!',
    messageDesc: 'Gracias por tu mensaje. Te responderé pronto.',
    
    // Footer
    footerText: '© 2024 Sarah Mitchell. Todos los derechos reservados. | Dedicada a la verdad, transparencia y periodismo de servicio público.',
    
    // Publications
    washingtonHerald: 'The Washington Herald',
    metroDailyNews: 'Metro Daily News',
    cityTribune: 'City Tribune'
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
