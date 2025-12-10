import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-mysore-gold flex items-center justify-center">
                <span className="text-lg font-display font-bold text-mysore-brown">ನ</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Namma Mysuru Unlocked</h3>
                <p className="text-xs text-background/60">ನಮ್ಮ ಮೈಸೂರು ಅನ್ಲಾಕ್ಡ್</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-mysore-gold">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/explore" className="text-sm text-background/70 hover:text-mysore-gold transition-colors">
                All Hidden Gems
              </Link>
              <Link to="/map" className="text-sm text-background/70 hover:text-mysore-gold transition-colors">
                Interactive Map
              </Link>
              <Link to="/nominate" className="text-sm text-background/70 hover:text-mysore-gold transition-colors">
                Nominate a Gem
              </Link>
            </div>
          </div>

          {/* Partnership */}
          <div>
            <h4 className="font-semibold mb-4 text-mysore-gold">Partnership</h4>
            <p className="text-sm text-background/70 mb-3">
              {t('footer.tourism')}
            </p>
            <a 
              href="https://www.karnatakatourism.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-mysore-gold hover:text-mysore-gold-light transition-colors"
            >
              Karnataka Tourism
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2024 Namma Mysuru Unlocked. {t('footer.rights')}.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-mysore-burgundy fill-mysore-burgundy" /> for Mysuru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
