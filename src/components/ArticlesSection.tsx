
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ArticlesSection = () => {
  const { t } = useLanguage();

  const articles = [
    {
      title: t('article1Title'),
      description: t('article1Desc'),
      publication: t('washingtonHerald'),
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop"
    },
    {
      title: t('article2Title'),
      description: t('article2Desc'),
      publication: t('washingtonHerald'),
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop"
    },
    {
      title: t('article3Title'),
      description: t('article3Desc'),
      publication: t('metroDailyNews'),
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop"
    },
    {
      title: t('article4Title'),
      description: t('article4Desc'),
      publication: t('washingtonHerald'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    },
    {
      title: t('article5Title'),
      description: t('article5Desc'),
      publication: t('metroDailyNews'),
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
    },
    {
      title: t('article6Title'),
      description: t('article6Desc'),
      publication: t('cityTribune'),
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section id="articles" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('articlesTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
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
