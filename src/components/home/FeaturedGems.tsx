import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { gems } from '@/data/gems';
import GemCard from './GemCard';

const FeaturedGems = () => {
  const { language } = useLanguage();
  const featuredGems = gems.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === 'en' ? 'Handpicked for you' : 'ನಿಮಗಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ'}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {language === 'en' ? 'Featured Hidden Gems' : 'ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಿದ ಗುಪ್ತ ರತ್ನಗಳು'}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              {language === 'en' 
                ? 'Discover Mysuru beyond the palace. These lesser-known treasures await your exploration.'
                : 'ಅರಮನೆಯ ಆಚೆಗೆ ಮೈಸೂರನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ. ಈ ಕಡಿಮೆ ತಿಳಿದಿರುವ ನಿಧಿಗಳು ನಿಮ್ಮ ಅನ್ವೇಷಣೆಗಾಗಿ ಕಾಯುತ್ತಿವೆ.'
              }
            </p>
          </div>
          
          <Link to="/explore">
            <Button variant="outline" className="gap-2">
              {language === 'en' ? 'View All Gems' : 'ಎಲ್ಲಾ ರತ್ನಗಳನ್ನು ವೀಕ್ಷಿಸಿ'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Gems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGems.map((gem, index) => (
            <GemCard 
              key={gem.id} 
              gem={gem} 
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGems;
