
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('experienceTitle')}</h2>
        <div className="space-y-8">
          <Card className="border-l-4 border-l-slate-900">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('seniorReporter')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('washingtonHerald')} • 2020 - Present</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('seniorDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('staffReporter')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('metroDailyNews')} • 2018 - 2020</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('staffDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('juniorReporter')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('cityTribune')} • 2016 - 2018</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('juniorDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
