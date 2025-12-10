import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Palette, Trees, Store, Utensils } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { categoryInfo } from '@/data/gems';
import { cn } from '@/lib/utils';

const iconMap = {
  landmark: Landmark,
  palette: Palette,
  trees: Trees,
  store: Store,
  utensils: Utensils,
};

const colorMap = {
  'mysore-burgundy': 'bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground',
  'mysore-gold': 'bg-mysore-gold/10 text-mysore-gold border-mysore-gold/20 hover:bg-mysore-gold hover:text-mysore-brown',
  'mysore-teal': 'bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground',
  'mysore-brown': 'bg-mysore-brown/10 text-mysore-brown border-mysore-brown/20 hover:bg-mysore-brown hover:text-background',
  'destructive': 'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive hover:text-destructive-foreground',
};

const CategorySection = () => {
  const { language, t } = useLanguage();

  const categories = Object.entries(categoryInfo).map(([key, value]) => ({
    id: key,
    name: value[language].name,
    icon: value.en.icon as keyof typeof iconMap,
    color: value.en.color as keyof typeof colorMap,
  }));

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {language === 'en' ? 'Explore by Category' : 'ವರ್ಗದ ಪ್ರಕಾರ ಅನ್ವೇಷಿಸಿ'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Find gems that match your interests'
              : 'ನಿಮ್ಮ ಆಸಕ್ತಿಗಳಿಗೆ ಹೊಂದುವ ರತ್ನಗಳನ್ನು ಹುಡುಕಿ'
            }
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link
                key={category.id}
                to={`/explore?category=${category.id}`}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-soft",
                  colorMap[category.color]
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
