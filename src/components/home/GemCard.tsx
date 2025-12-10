import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gem, categoryInfo } from '@/data/gems';
import { cn } from '@/lib/utils';

interface GemCardProps {
  gem: Gem;
  featured?: boolean;
}

const GemCard: React.FC<GemCardProps> = ({ gem, featured = false }) => {
  const { language, t } = useLanguage();
  const category = categoryInfo[gem.category][language];

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${gem.coordinates.lat},${gem.coordinates.lng}`;

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover-lift",
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "h-64 md:h-80" : "h-48"
      )}>
        <img
          src={gem.image}
          alt={gem.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        
        {/* Category Badge */}
        <Badge
          variant="secondary"
          className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground font-medium"
        >
          {category.name}
        </Badge>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-full">
          <Star className="w-3.5 h-3.5 text-mysore-gold fill-mysore-gold" />
          <span className="text-sm font-semibold">{gem.rating}</span>
        </div>

        {/* Quick Action - Take me there */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="gemCard" size="sm" className="gap-2">
            <MapPin className="w-4 h-4" />
            {t('gem.takeMe')}
          </Button>
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className={cn(
          "font-display font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors",
          featured ? "text-xl md:text-2xl" : "text-lg"
        )}>
          {gem.name[language]}
        </h3>
        
        <p className={cn(
          "text-muted-foreground mb-4 line-clamp-2",
          featured ? "text-base" : "text-sm"
        )}>
          {gem.shortDescription[language]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="truncate max-w-[150px]">{gem.address[language].split(',')[0]}</span>
          </div>
          
          <Link to={`/gem/${gem.id}`}>
            <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
              {t('gem.viewDetails')}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GemCard;
