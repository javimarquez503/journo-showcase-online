
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
            alt={t('name')}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          {t('title')}
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollToSection('articles')} size="lg" className="bg-slate-900 hover:bg-slate-800">
            {t('viewWork')}
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
            {t('getInTouch')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
