
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-slate-800">
            {t('name')}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('about')} className="text-slate-600 hover:text-slate-900 transition-colors">
              {t('about')}
            </button>
            <button onClick={() => handleNavClick('experience')} className="text-slate-600 hover:text-slate-900 transition-colors">
              {t('experience')}
            </button>
            <button onClick={() => handleNavClick('articles')} className="text-slate-600 hover:text-slate-900 transition-colors">
              {t('articles')}
            </button>
            <button onClick={() => handleNavClick('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">
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
              <button onClick={() => handleNavClick('about')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                {t('about')}
              </button>
              <button onClick={() => handleNavClick('experience')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                {t('experience')}
              </button>
              <button onClick={() => handleNavClick('articles')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                {t('articles')}
              </button>
              <button onClick={() => handleNavClick('contact')} className="block px-3 py-2 text-slate-600 hover:text-slate-900">
                {t('contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
