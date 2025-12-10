import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { gems } from '@/data/gems';

const HeroSection = () => {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroGems = gems.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroGems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroGems.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroGems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroGems.length) % heroGems.length);

  const currentGem = heroGems[currentSlide];

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroGems.map((gem, index) => (
          <div
            key={gem.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={gem.image}
              alt={gem.name[language]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/20" />
          </div>
        ))}
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 bg-royal-pattern opacity-30 mix-blend-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mysore-gold/20 backdrop-blur-sm rounded-full border border-mysore-gold/30 mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-mysore-gold" />
            <span className="text-sm font-medium text-mysore-gold">
              {language === 'en' ? 'Discover 6+ Hidden Gems' : '6+ ಗುಪ್ತ ರತ್ನಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ'}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-4 animate-slide-up">
            {t('hero.title')}
          </h1>
          <p className="font-display text-lg md:text-xl text-mysore-gold italic mb-2 animate-slide-up delay-100">
            ನಮ್ಮ ಮೈಸೂರು ಅನ್ಲಾಕ್ಡ್
          </p>
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl animate-slide-up delay-200">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up delay-300">
            <Link to="/explore">
              <Button variant="gold" size="xl" className="gap-2">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="hero" size="xl" className="gap-2">
                <MapPin className="w-5 h-5" />
                {t('hero.mapCta')}
              </Button>
            </Link>
          </div>

          {/* Current Gem Indicator */}
          <div className="flex items-center gap-4 animate-fade-in delay-400">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-background" />
            </button>
            
            <div className="flex-1 max-w-md">
              <p className="text-xs text-mysore-gold uppercase tracking-wider mb-1">
                {language === 'en' ? 'Now Showing' : 'ಈಗ ತೋರಿಸಲಾಗುತ್ತಿದೆ'}
              </p>
              <p className="text-lg font-display font-semibold text-background truncate">
                {currentGem.name[language]}
              </p>
              <div className="flex gap-1.5 mt-2">
                {heroGems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-mysore-gold'
                        : 'w-2 bg-background/30 hover:bg-background/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-background" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
