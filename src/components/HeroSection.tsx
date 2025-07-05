
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
            src="https://i.blogs.es/e0e69c/blob/original.jpeg"
            srcSet="
              https://i.blogs.es/e0e69c/blob/original.jpeg 480w,
              https://i.blogs.es/e0e69c/blob/original.jpeg 768w,
              https://i.blogs.es/e0e69c/blob/original.jpeg 1200w
            "
            sizes="(max-width: 768px) 200px, 200px"
            alt="Portrait of Javier Marquez"
            className="w-50 h-50 rounded-full mx-auto mb-6 object-cover shadow-lg"
            style={{ width: '200px', height: '200px' }}
            loading="lazy"
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
