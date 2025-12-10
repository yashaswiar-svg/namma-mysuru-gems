import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, MapPin, Clock, Ticket, Navigation, Star, 
  ChevronLeft, ChevronRight, Lightbulb, Share2 
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/chat/ChatWidget';
import ReviewSection from '@/components/reviews/ReviewSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { gems, categoryInfo } from '@/data/gems';
import { toast } from '@/hooks/use-toast';

const GemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFunFact, setShowFunFact] = useState(false);

  const gem = gems.find((g) => g.id === id);

  if (!gem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Gem not found' : 'ರತ್ನ ಕಂಡುಬಂದಿಲ್ಲ'}
          </h1>
          <Link to="/explore">
            <Button>{language === 'en' ? 'Back to Explore' : 'ಅನ್ವೇಷಣೆಗೆ ಹಿಂತಿರುಗಿ'}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [gem.image, ...gem.gallery];
  const category = categoryInfo[gem.category][language];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${gem.coordinates.lat},${gem.coordinates.lng}`;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  const handleShare = async () => {
    const shareData = {
      title: gem.name[language],
      text: gem.shortDescription[language],
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: language === 'en' ? 'Link copied!' : 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{gem.name[language]} | Namma Mysuru Unlocked</title>
        <meta name="description" content={gem.shortDescription[language]} />
        <meta property="og:title" content={`${gem.name[language]} | Hidden Gem in Mysuru`} />
        <meta property="og:description" content={gem.shortDescription[language]} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-16 md:pt-20">
          {/* Hero Image Gallery */}
          <section className="relative h-[50vh] md:h-[60vh] bg-foreground">
            {/* Images */}
            {allImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`${gem.name[language]} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
              </div>
            ))}

            {/* Navigation */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <Link to="/explore">
                <Button variant="hero" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {language === 'en' ? 'Back' : 'ಹಿಂದೆ'}
                </Button>
              </Link>
              <Button variant="hero" size="icon" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Image Controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-background" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-background" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'w-6 bg-mysore-gold'
                          : 'bg-background/50 hover:bg-background/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </section>

          {/* Content */}
          <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge variant="secondary" className="mb-3">
                  {category.name}
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {gem.name[language]}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-mysore-gold fill-mysore-gold" />
                    <span className="font-semibold">{gem.rating}</span>
                    <span>({gem.reviewCount} {language === 'en' ? 'reviews' : 'ವಿಮರ್ಶೆಗಳು'})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{gem.address[language]}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="royal" size="lg" className="gap-2">
                    <Navigation className="w-5 h-5" />
                    {t('gem.takeMe')}
                  </Button>
                </a>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="bg-card rounded-xl p-5 shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{t('gem.timings')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{gem.timings}</p>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-mysore-gold/10 flex items-center justify-center">
                      <Ticket className="w-5 h-5 text-mysore-gold" />
                    </div>
                    <span className="font-semibold">{t('gem.entry')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{gem.entryFee[language]}</p>
                </div>

                <div className="bg-card rounded-xl p-5 shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-semibold">{t('gem.address')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{gem.address[language]}</p>
                </div>
              </div>

              {/* The Story */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  {t('gem.theStory')}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {gem.fullDescription[language]}
                </p>
              </div>

              {/* Fun Fact */}
              <div className="mb-10">
                <button
                  onClick={() => setShowFunFact(!showFunFact)}
                  className="w-full bg-mysore-gold/10 hover:bg-mysore-gold/20 border-2 border-mysore-gold/30 rounded-xl p-5 text-left transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-mysore-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-6 h-6 text-mysore-gold" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground block">
                        {t('gem.funFact')}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {language === 'en' ? 'Tap to reveal!' : 'ಬಹಿರಂಗಪಡಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ!'}
                      </span>
                    </div>
                  </div>
                  {showFunFact && (
                    <p className="mt-4 text-foreground animate-fade-in pl-15">
                      {gem.funFact[language]}
                    </p>
                  )}
                </button>
              </div>

              {/* Reviews */}
              <ReviewSection
                gemId={gem.id}
                initialRating={gem.rating}
                reviewCount={gem.reviewCount}
              />
            </div>
          </section>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

export default GemDetail;
