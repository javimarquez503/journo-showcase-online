
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
                <CardTitle className="text-xl">{t('editor')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('xataka')} (Webedia) · Dic 2021 – Actualidad</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('editorDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('techWriter')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('hipertextual')} · Nov 2020 – Dic 2021</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('techWriterDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('digitalContentCreator')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('radioMitre')} y {t('la100')} (Grupo Clarín) · Nov 2020 – Dic 2021</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('digitalContentCreatorDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-400">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('hostProducer')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('ctv')} · Oct 2018 – Abr 2019</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('hostProducerDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('newsAnchor')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">{t('ctv')} · 2014 – 2019</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('newsAnchorDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{t('techColumnist')}</CardTitle>
                <Briefcase className="h-5 w-5 text-slate-600" />
              </div>
              <p className="text-slate-600">Varios canales de televisión · 2012 – 2019</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                {t('techColumnistDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
