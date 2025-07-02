
import { useState } from 'react';
import { Mail, Briefcase, ExternalLink, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('messageSent'),
      description: t('messageDesc'),
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              {t('name')}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t('about')}
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t('experience')}
              </button>
              <button onClick={() => scrollToSection('articles')} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t('articles')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">
                {t('contact')}
              </button>
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  {t('about')}
                </button>
                <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  {t('experience')}
                </button>
                <button onClick={() => scrollToSection('articles')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  {t('articles')}
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                  {t('contact')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Experience Section */}
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

      {/* Featured Articles Section */}
      <section id="articles" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('articlesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop"
                  alt="Environmental Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {t('article1Title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {t('article1Desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('washingtonHerald')}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop"
                  alt="Political Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {t('article2Title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {t('article2Desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('washingtonHerald')}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop"
                  alt="Social Justice Story"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {t('article3Title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {t('article3Desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('metroDailyNews')}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
                  alt="Government Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {t('article4Title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {t('article4Desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('washingtonHerald')}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
                  alt="Healthcare Investigation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {t('article5Title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {t('article5Desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('metroDailyNews')}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop"
                  alt="Education Story"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="group-hover:text-slate-700 transition-colors">
                  {t('article6Title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  {t('article6Desc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{t('cityTribune')}</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t('contactTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contactSubtitle')}</h3>
              <p className="text-slate-600 mb-6">
                {t('contactDesc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-600 mr-3" />
                  <span className="text-slate-700">sarah.mitchell@email.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-3">📱</span>
                  <span className="text-slate-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-3">📍</span>
                  <span className="text-slate-700">Washington, D.C.</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('namePlaceholder')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('emailPlaceholder')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder={t('subjectPlaceholder')}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t('messagePlaceholder')}
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800">
                    {t('sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            {t('footerText')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
