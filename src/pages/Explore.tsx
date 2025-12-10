import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, SlidersHorizontal } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GemCard from '@/components/home/GemCard';
import ChatWidget from '@/components/chat/ChatWidget';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { gems, categoryInfo } from '@/data/gems';
import { cn } from '@/lib/utils';

const Explore = () => {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'all';

  const categories = [
    { id: 'all', name: t('category.all') },
    ...Object.entries(categoryInfo).map(([key, value]) => ({
      id: key,
      name: value[language].name,
    })),
  ];

  const filteredGems = useMemo(() => {
    return gems.filter((gem) => {
      const matchesCategory = activeCategory === 'all' || gem.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        gem.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        gem.shortDescription[language].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, language]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Explore Hidden Gems | Namma Mysuru Unlocked</title>
        <meta 
          name="description" 
          content="Browse all hidden gems in Mysuru. Filter by category - heritage, art, nature, markets, and food. Find your next adventure." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-24 md:pt-28">
          {/* Hero */}
          <section className="bg-muted/50 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Explore All Gems' : 'ಎಲ್ಲಾ ರತ್ನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {language === 'en'
                  ? 'Discover the hidden treasures of Mysuru. From ancient heritage sites to vibrant local markets.'
                  : 'ಮೈಸೂರಿನ ಗುಪ್ತ ನಿಧಿಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ. ಪ್ರಾಚೀನ ಪರಂಪರೆ ಸ್ಥಳಗಳಿಂದ ರೋಮಾಂಚಕ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಗಳವರೆಗೆ.'
                }
              </p>
            </div>
          </section>

          {/* Filters */}
          <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={language === 'en' ? 'Search gems...' : 'ರತ್ನಗಳನ್ನು ಹುಡುಕಿ...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? 'royal' : 'outline'}
                      size="sm"
                      onClick={() => handleCategoryChange(category.id)}
                      className="whitespace-nowrap"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              {/* Results Count */}
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? `Showing ${filteredGems.length} hidden gems`
                  : `${filteredGems.length} ಗುಪ್ತ ರತ್ನಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ`
                }
              </p>

              {/* Grid */}
              {filteredGems.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGems.map((gem) => (
                    <GemCard key={gem.id} gem={gem} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    {language === 'en'
                      ? 'No gems found. Try adjusting your filters.'
                      : 'ಯಾವುದೇ ರತ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಹೊಂದಿಸಲು ಪ್ರಯತ್ನಿಸಿ.'
                    }
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

export default Explore;
