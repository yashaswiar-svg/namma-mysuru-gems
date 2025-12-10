import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/chat/ChatWidget';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const Nominate = () => {
  const { language, t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    gemName: '',
    location: '',
    description: '',
    yourName: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: t('nominate.success'),
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Nomination Submitted | Namma Mysuru Unlocked</title>
        </Helmet>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 pt-24 md:pt-28 flex items-center justify-center">
            <div className="text-center px-4 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Thank You!' : 'ಧನ್ಯವಾದಗಳು!'}
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                {language === 'en'
                  ? 'Your nomination has been submitted. Our team will review it and may reach out for more details.'
                  : 'ನಿಮ್ಮ ನಾಮನಿರ್ದೇಶನವನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ. ನಮ್ಮ ತಂಡವು ಅದನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.'
                }
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                {language === 'en' ? 'Nominate Another' : 'ಮತ್ತೊಂದನ್ನು ನಾಮನಿರ್ದೇಶಿಸಿ'}
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Nominate a Hidden Gem | Namma Mysuru Unlocked</title>
        <meta 
          name="description" 
          content="Know a secret spot in Mysuru? Help us showcase the real treasures of the city by nominating your favorite local gem." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-24 md:pt-28">
          {/* Hero */}
          <section className="bg-gradient-royal text-primary-foreground py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-mysore-gold/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-mysore-gold" />
                  <span className="text-sm font-medium text-mysore-gold">
                    {language === 'en' ? 'Community Powered' : 'ಸಮುದಾಯ ಆಧಾರಿತ'}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  {t('nominate.title')}
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  {t('nominate.subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Form */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Gem Name */}
                  <div className="space-y-2">
                    <Label htmlFor="gemName">{t('nominate.name')} *</Label>
                    <Input
                      id="gemName"
                      value={formData.gemName}
                      onChange={(e) => handleChange('gemName', e.target.value)}
                      placeholder={language === 'en' ? 'e.g., Ancient Banyan Tree of Srirangapatna' : 'ಉದಾ: ಶ್ರೀರಂಗಪಟ್ಟಣದ ಪ್ರಾಚೀನ ಆಲದ ಮರ'}
                      required
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">{t('nominate.location')} *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        placeholder={language === 'en' ? 'Full address or Google Maps link' : 'ಪೂರ್ಣ ವಿಳಾಸ ಅಥವಾ Google ನಕ್ಷೆ ಲಿಂಕ್'}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">{t('nominate.description')} *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder={language === 'en' 
                        ? 'Tell us what makes this place unique. History, personal experiences, what visitors should know...'
                        : 'ಈ ಸ್ಥಳವನ್ನು ವಿಶಿಷ್ಟವಾಗಿಸುವದು ಏನು ಎಂದು ನಮಗೆ ತಿಳಿಸಿ...'
                      }
                      rows={5}
                      required
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'en' 
                        ? 'Your details (optional, helps us follow up)'
                        : 'ನಿಮ್ಮ ವಿವರಗಳು (ಐಚ್ಛಿಕ)'
                      }
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="yourName">{t('nominate.yourName')}</Label>
                        <Input
                          id="yourName"
                          value={formData.yourName}
                          onChange={(e) => handleChange('yourName', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('nominate.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="royal" size="lg" className="w-full gap-2">
                    <Send className="w-5 h-5" />
                    {t('nominate.submit')}
                  </Button>
                </form>

                {/* Note */}
                <p className="text-center text-sm text-muted-foreground mt-6">
                  {language === 'en'
                    ? 'By submitting, you agree that your nomination may be featured on Namma Mysuru Unlocked.'
                    : 'ಸಲ್ಲಿಸುವ ಮೂಲಕ, ನಿಮ್ಮ ನಾಮನಿರ್ದೇಶನವನ್ನು ನಮ್ಮ ಮೈಸೂರು ಅನ್ಲಾಕ್ಡ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಬಹುದು ಎಂದು ನೀವು ಒಪ್ಪುತ್ತೀರಿ.'
                  }
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

export default Nominate;
