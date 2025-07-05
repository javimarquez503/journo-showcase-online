
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
      image: "https://i.blogs.es/f302e3/he-terminado-la-pau-y-quiero-dedicarme-a-la-ia-que-tengo-que-estudiar-cuatro-expertos-nos-responden-a-la-pregunta/840_560.jpeg",
      alt: "PAU and AI: what to study, say four experts",
      link: "https://www.xataka.com/robotica-e-ia/he-terminado-pau-quiero-dedicarme-a-ia-que-tengo-que-estudiar-cuatro-expertos-nos-responden-a-pregunta"
    },
    {
      title: t('article2Title'),
      description: t('article2Desc'),
      publication: t('xataka'),
      image: "https://i.blogs.es/c6d2d1/contrasena-portada1/840_560.jpeg",
      alt: "Secure passwords guide",
      link: "https://www.xataka.com/seguridad/cada-cuanto-debemos-cambiar-todas-nuestras-contrasenas-tres-expertos-ciberseguridad"
    },
    {
      title: t('article3Title'),
      description: t('article3Desc'),
      publication: t('xataka'),
      image: "https://i.blogs.es/19aebc/listas-publicidad-no-espana/840_560.jpeg",
      alt: "Advertising lists in Spain",
      link: "https://www.xataka.com/empresas-y-economia/resolviendo-uno-grandes-misterios-nuestro-tiempo-sirve-algo-apuntarse-a-lista-robinson"
    },
    {
      title: t('article4Title'),
      description: t('article4Desc'),
      publication: t('xataka'),
      image: "https://i.blogs.es/cbf992/xiaomi-portada/1200_800.jpeg",
      alt: "Xiaomi 15 Ultra review",
      link: "https://www.xataka.com/analisis/xiaomi-15-opiniones-toma-contacto-fotos-video"
    },
    {
      title: t('article5Title'),
      description: t('article5Desc'),
      publication: t('xataka'),
      image: "https://i.blogs.es/c8d7e3/galaxy-tab-s10-fe-portada/840_560.jpeg",
      alt: "Galaxy Tab S10 FE first impressions",
      link: "https://www.xataka.com/analisis/samsung-galaxy-tab-s10-fe-plus-opiniones-toma-contacto-fotos-video"
    },
    {
      title: t('article6Title'),
      description: t('article6Desc'),
      publication: t('xataka'),
      image: "https://i.blogs.es/c5ff71/oppo-portada-1/1200_800.jpeg",
      alt: "Oppo X innovation",
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
                  srcSet={`
                    ${article.image.replace(/\/(\d+)_(\d+)\./, '/480_320.')} 480w,
                    ${article.image.replace(/\/(\d+)_(\d+)\./, '/768_512.')} 768w,
                    ${article.image} 1200w
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={article.alt}
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
