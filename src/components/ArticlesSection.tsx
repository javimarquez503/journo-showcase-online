
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ArticlesSection = () => {
  const { t } = useLanguage();

  const articles = [
    {
      title: t('article1Title'),
      description: t('article1Desc'),
      publication: t('xataka'),
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
      link: "https://www.xataka.com/robotica-e-ia/he-terminado-pau-quiero-dedicarme-a-ia-que-tengo-que-estudiar-cuatro-expertos-nos-responden-a-pregunta"
    },
    {
      title: t('article2Title'),
      description: t('article2Desc'),
      publication: t('xataka'),
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      link: "https://www.xataka.com/seguridad/cada-cuanto-debemos-cambiar-todas-nuestras-contrasenas-tres-expertos-ciberseguridad"
    },
    {
      title: t('article3Title'),
      description: t('article3Desc'),
      publication: t('xataka'),
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&h=200&fit=crop",
      link: "https://www.xataka.com/empresas-y-economia/resolviendo-uno-grandes-misterios-nuestro-tiempo-sirve-algo-apuntarse-a-lista-robinson"
    },
    {
      title: t('article4Title'),
      description: t('article4Desc'),
      publication: t('xataka'),
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=200&fit=crop",
      link: "https://www.xataka.com/analisis/xiaomi-15-opiniones-toma-contacto-fotos-video"
    },
    {
      title: t('article5Title'),
      description: t('article5Desc'),
      publication: t('xataka'),
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=200&fit=crop",
      link: "https://www.xataka.com/analisis/samsung-galaxy-tab-s10-fe-plus-opiniones-toma-contacto-fotos-video"
    },
    {
      title: t('article6Title'),
      description: t('article6Desc'),
      publication: t('xataka'),
      image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=200&fit=crop",
      link: "https://www.xataka.com/analisis/oppo-reno-13-pro-5g-opiniones-toma-contacto-fotos-video"
    }
  ];

  const handleArticleClick = (link: string) => {
    // Secure external link opening
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="articles" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('articlesTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleArticleClick(article.link)}
            >
              <CardHeader>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{article.publication}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
