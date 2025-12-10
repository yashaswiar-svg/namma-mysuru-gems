import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturedGems from '@/components/home/FeaturedGems';
import ChatWidget from '@/components/chat/ChatWidget';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Namma Mysuru Unlocked | Discover Hidden Gems of Mysore</title>
        <meta 
          name="description" 
          content="Explore Mysuru beyond the palace. Discover hidden gems, local treasures, and authentic experiences in the City of Palaces. Interactive maps, reviews, and bilingual content." 
        />
        <meta property="og:title" content="Namma Mysuru Unlocked | Hidden Gems of Mysore" />
        <meta property="og:description" content="Discover the secret treasures of Mysuru - from sand sculptures to sacred hills, vibrant markets to serene lakes." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <CategorySection />
          <FeaturedGems />
          
          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-royal text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {language === 'en' 
                  ? 'Know a Hidden Gem?'
                  : 'ಗುಪ್ತ ರತ್ನ ಗೊತ್ತಿದೆಯೇ?'
                }
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                {language === 'en'
                  ? 'Help us showcase the real Mysuru. Nominate your favorite local spot, artisan, or hidden treasure.'
                  : 'ನಿಜವಾದ ಮೈಸೂರನ್ನು ಪ್ರದರ್ಶಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ. ನಿಮ್ಮ ನೆಚ್ಚಿನ ಸ್ಥಳೀಯ ಸ್ಥಳವನ್ನು ನಾಮನಿರ್ದೇಶಿಸಿ.'
                }
              </p>
              <a 
                href="/nominate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-mysore-gold text-mysore-brown font-semibold rounded-xl shadow-gold hover:bg-mysore-gold-light transition-all duration-300 hover:-translate-y-1"
              >
                {language === 'en' ? 'Nominate a Gem' : 'ರತ್ನವನ್ನು ನಾಮನಿರ್ದೇಶಿಸಿ'}
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

export default Index;
