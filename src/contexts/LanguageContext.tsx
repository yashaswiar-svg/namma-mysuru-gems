import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.map': 'Map',
    'nav.about': 'About',
    'nav.nominate': 'Nominate a Gem',
    
    // Hero
    'hero.title': 'Namma Mysuru Unlocked',
    'hero.subtitle': 'Discover the Hidden Gems of the City of Palaces',
    'hero.cta': 'Start Exploring',
    'hero.mapCta': 'Open Map',
    
    // Categories
    'category.all': 'All Gems',
    'category.heritage': 'Heritage',
    'category.art': 'Art & Museums',
    'category.nature': 'Nature',
    'category.commerce': 'Markets & Artisans',
    'category.food': 'Food & Culture',
    
    // Gems
    'gem.viewDetails': 'View Details',
    'gem.takeMe': 'Take me there',
    'gem.timings': 'Timings',
    'gem.entry': 'Entry Fee',
    'gem.address': 'Address',
    'gem.reviews': 'Reviews',
    'gem.writeReview': 'Write a Review',
    'gem.funFact': 'Fun Fact',
    'gem.theStory': 'The Story',
    
    // Reviews
    'review.rating': 'Your Rating',
    'review.comment': 'Your Experience',
    'review.submit': 'Submit Review',
    'review.placeholder': 'Share your experience at this hidden gem...',
    
    // Nominate
    'nominate.title': 'Nominate a Hidden Gem',
    'nominate.subtitle': 'Know a secret spot? Help us spread the magic!',
    'nominate.name': 'Gem Name',
    'nominate.location': 'Location',
    'nominate.description': 'Why is it special?',
    'nominate.yourName': 'Your Name',
    'nominate.email': 'Your Email',
    'nominate.submit': 'Submit Nomination',
    'nominate.success': 'Thank you! Your nomination has been submitted.',
    
    // Footer
    'footer.tagline': 'Unlocking the secrets of the City of Palaces',
    'footer.tourism': 'In partnership with Karnataka Tourism',
    'footer.rights': 'All rights reserved',
    
    // Chatbot
    'chat.title': 'Nandi Guide',
    'chat.placeholder': 'Ask me about Mysuru...',
    'chat.welcome': 'Namaskara! 🙏 I\'m your guide to Mysuru\'s hidden treasures. Ask me about any gem, local phrases, or travel tips!',
  },
  kn: {
    // Navigation
    'nav.home': 'ಮುಖಪುಟ',
    'nav.explore': 'ಅನ್ವೇಷಿಸಿ',
    'nav.map': 'ನಕ್ಷೆ',
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.nominate': 'ರತ್ನವನ್ನು ನಾಮನಿರ್ದೇಶಿಸಿ',
    
    // Hero
    'hero.title': 'ನಮ್ಮ ಮೈಸೂರು ಅನ್ಲಾಕ್ಡ್',
    'hero.subtitle': 'ಅರಮನೆಗಳ ನಗರದ ಗುಪ್ತ ರತ್ನಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
    'hero.cta': 'ಅನ್ವೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ',
    'hero.mapCta': 'ನಕ್ಷೆ ತೆರೆಯಿರಿ',
    
    // Categories
    'category.all': 'ಎಲ್ಲಾ ರತ್ನಗಳು',
    'category.heritage': 'ಪರಂಪರೆ',
    'category.art': 'ಕಲೆ ಮತ್ತು ವಸ್ತುಸಂಗ್ರಹಾಲಯಗಳು',
    'category.nature': 'ಪ್ರಕೃತಿ',
    'category.commerce': 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳು',
    'category.food': 'ಆಹಾರ ಮತ್ತು ಸಂಸ್ಕೃತಿ',
    
    // Gems
    'gem.viewDetails': 'ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    'gem.takeMe': 'ಅಲ್ಲಿಗೆ ಕರೆದುಕೊಂಡು ಹೋಗಿ',
    'gem.timings': 'ಸಮಯ',
    'gem.entry': 'ಪ್ರವೇಶ ಶುಲ್ಕ',
    'gem.address': 'ವಿಳಾಸ',
    'gem.reviews': 'ವಿಮರ್ಶೆಗಳು',
    'gem.writeReview': 'ವಿಮರ್ಶೆ ಬರೆಯಿರಿ',
    'gem.funFact': 'ಕುತೂಹಲಕಾರಿ ಸಂಗತಿ',
    'gem.theStory': 'ಕಥೆ',
    
    // Reviews
    'review.rating': 'ನಿಮ್ಮ ರೇಟಿಂಗ್',
    'review.comment': 'ನಿಮ್ಮ ಅನುಭವ',
    'review.submit': 'ವಿಮರ್ಶೆ ಸಲ್ಲಿಸಿ',
    'review.placeholder': 'ಈ ಗುಪ್ತ ರತ್ನದಲ್ಲಿ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ...',
    
    // Nominate
    'nominate.title': 'ಗುಪ್ತ ರತ್ನವನ್ನು ನಾಮನಿರ್ದೇಶಿಸಿ',
    'nominate.subtitle': 'ರಹಸ್ಯ ಸ್ಥಳ ತಿಳಿದಿದೆಯೇ? ಮ್ಯಾಜಿಕ್ ಹರಡಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ!',
    'nominate.name': 'ರತ್ನದ ಹೆಸರು',
    'nominate.location': 'ಸ್ಥಳ',
    'nominate.description': 'ಇದು ಏಕೆ ವಿಶೇಷ?',
    'nominate.yourName': 'ನಿಮ್ಮ ಹೆಸರು',
    'nominate.email': 'ನಿಮ್ಮ ಇಮೇಲ್',
    'nominate.submit': 'ನಾಮನಿರ್ದೇಶನ ಸಲ್ಲಿಸಿ',
    'nominate.success': 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ನಾಮನಿರ್ದೇಶನವನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ.',
    
    // Footer
    'footer.tagline': 'ಅರಮನೆಗಳ ನಗರದ ರಹಸ್ಯಗಳನ್ನು ಅನ್ಲಾಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ',
    'footer.tourism': 'ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮದೊಂದಿಗೆ ಸಹಭಾಗಿತ್ವದಲ್ಲಿ',
    'footer.rights': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ',
    
    // Chatbot
    'chat.title': 'ನಂದಿ ಗೈಡ್',
    'chat.placeholder': 'ಮೈಸೂರಿನ ಬಗ್ಗೆ ಕೇಳಿ...',
    'chat.welcome': 'ನಮಸ್ಕಾರ! 🙏 ನಾನು ಮೈಸೂರಿನ ಗುಪ್ತ ನಿಧಿಗಳಿಗೆ ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ. ಯಾವುದೇ ರತ್ನ, ಸ್ಥಳೀಯ ನುಡಿಗಟ್ಟುಗಳು ಅಥವಾ ಪ್ರಯಾಣ ಸಲಹೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ!',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
