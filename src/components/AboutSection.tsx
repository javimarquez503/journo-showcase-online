
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('aboutTitle')}</h2>
        <div className="prose prose-lg mx-auto text-slate-600">
          <p className="mb-6">
            {t('aboutP1')}
          </p>
          <p className="mb-6">
            {t('aboutP2')}
          </p>
          <p>
            {t('aboutP3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
