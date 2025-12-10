import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Star, Clock, ExternalLink, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/chat/ChatWidget';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { gems, categoryInfo, Gem } from '@/data/gems';
import { cn } from '@/lib/utils';

const MapPage = () => {
  const { language, t } = useLanguage();
  const [selectedGem, setSelectedGem] = useState<Gem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: t('category.all'), color: 'bg-foreground' },
    ...Object.entries(categoryInfo).map(([key, value]) => ({
      id: key,
      name: value[language].name,
      color: key === 'heritage' ? 'bg-primary' 
        : key === 'art' ? 'bg-mysore-gold' 
        : key === 'nature' ? 'bg-accent' 
        : key === 'commerce' ? 'bg-mysore-brown'
        : 'bg-destructive',
    })),
  ];

  const filteredGems = activeCategory === 'all' 
    ? gems 
    : gems.filter(gem => gem.category === activeCategory);

  const getGoogleMapsUrl = (gem: Gem) => 
    `https://www.google.com/maps/dir/?api=1&destination=${gem.coordinates.lat},${gem.coordinates.lng}`;

  // Pin positions (simplified for demo - in production, use actual map)
  const pinPositions: Record<string, { top: string; left: string }> = {
    'sand-sculpture-museum': { top: '65%', left: '55%' },
    'karighatta-hills': { top: '25%', left: '60%' },
    'melody-world-wax-museum': { top: '40%', left: '35%' },
    'jayalakshmi-vilas-mansion': { top: '45%', left: '40%' },
    'devaraja-market': { top: '48%', left: '45%' },
    'karanji-lake': { top: '55%', left: '50%' },
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'heritage': return 'bg-primary';
      case 'art': return 'bg-mysore-gold';
      case 'nature': return 'bg-accent';
      case 'commerce': return 'bg-mysore-brown';
      case 'food': return 'bg-destructive';
      default: return 'bg-foreground';
    }
  };

  return (
    <>
      <Helmet>
        <title>Interactive Map | Namma Mysuru Unlocked</title>
        <meta 
          name="description" 
          content="Find hidden gems on our interactive map. Get directions to Mysuru's secret treasures with one tap." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-16 md:pt-20">
          {/* Map Container */}
          <div className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
            {/* Category Filters - Floating */}
            <div className="absolute top-4 left-4 right-4 z-20">
              <div className="bg-background/95 backdrop-blur-lg rounded-xl shadow-elevated p-3 md:p-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                        activeCategory === category.id
                          ? "bg-foreground text-background"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      )}
                    >
                      <span className={cn("w-2 h-2 rounded-full", category.color)} />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Area (Simplified visual representation) */}
            <div className="absolute inset-0 bg-muted">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
              <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Map Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none opacity-20">
                <MapPin className="w-16 h-16 mx-auto mb-2 text-primary" />
                <p className="font-display text-2xl font-bold text-foreground">Mysuru District</p>
              </div>

              {/* Gem Pins */}
              {filteredGems.map((gem) => {
                const position = pinPositions[gem.id];
                if (!position) return null;

                return (
                  <button
                    key={gem.id}
                    onClick={() => setSelectedGem(gem)}
                    style={{ top: position.top, left: position.left }}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-full z-10 group",
                      selectedGem?.id === gem.id && "z-30"
                    )}
                  >
                    {/* Pin */}
                    <div className={cn(
                      "relative transition-transform duration-300 group-hover:scale-110",
                      selectedGem?.id === gem.id && "scale-125"
                    )}>
                      <div className={cn(
                        "w-10 h-10 rounded-full shadow-elevated flex items-center justify-center",
                        getCategoryColor(gem.category)
                      )}>
                        <MapPin className="w-5 h-5 text-background" />
                      </div>
                      {/* Pin tail */}
                      <div className={cn(
                        "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent",
                        gem.category === 'heritage' ? 'border-t-primary'
                        : gem.category === 'art' ? 'border-t-mysore-gold'
                        : gem.category === 'nature' ? 'border-t-accent'
                        : gem.category === 'commerce' ? 'border-t-mysore-brown'
                        : 'border-t-destructive'
                      )} />
                    </div>

                    {/* Hover Label */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-foreground text-background text-xs font-medium px-2 py-1 rounded whitespace-nowrap shadow-lg">
                        {gem.name[language]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Gem Card */}
            {selectedGem && (
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-20 animate-slide-up">
                <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
                  {/* Image */}
                  <div className="relative h-40">
                    <img 
                      src={selectedGem.image} 
                      alt={selectedGem.name[language]}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedGem(null)}
                      className="absolute top-3 right-3 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <Badge className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm">
                      {categoryInfo[selectedGem.category][language].name}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {selectedGem.name[language]}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-mysore-gold fill-mysore-gold" />
                        <span>{selectedGem.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{selectedGem.timings.split('(')[0]}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a 
                        href={getGoogleMapsUrl(selectedGem)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="royal" className="w-full gap-2">
                          <Navigation className="w-4 h-4" />
                          {t('gem.takeMe')}
                        </Button>
                      </a>
                      <Link to={`/gem/${selectedGem.id}`}>
                        <Button variant="outline" size="icon">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-soft hidden md:block">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                {language === 'en' ? 'Tap a pin for details' : 'ವಿವರಗಳಿಗೆ ಪಿನ್ ಟ್ಯಾಪ್ ಮಾಡಿ'}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{filteredGems.length} {language === 'en' ? 'gems' : 'ರತ್ನಗಳು'}</span>
              </div>
            </div>
          </div>
        </main>

        <ChatWidget />
      </div>
    </>
  );
};

export default MapPage;
