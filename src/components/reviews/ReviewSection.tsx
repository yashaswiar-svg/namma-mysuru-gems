import React, { useState } from 'react';
import { Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSectionProps {
  gemId: string;
  initialRating: number;
  reviewCount: number;
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: 'Rahul M.',
    rating: 5,
    comment: 'Absolutely magical place! The sculptures are breathtaking and the peaceful ambiance is perfect for a morning visit.',
    date: '2024-01-15',
  },
  {
    id: 2,
    author: 'Priya K.',
    rating: 4,
    comment: 'A hidden gem indeed! Not crowded like the main attractions. The intricate details in each sculpture show incredible craftsmanship.',
    date: '2024-01-10',
  },
];

const ReviewSection: React.FC<ReviewSectionProps> = ({ gemId, initialRating, reviewCount }) => {
  const { language, t } = useLanguage();
  const [reviews] = useState<Review[]>(mockReviews);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = () => {
    if (userRating === 0) {
      toast({
        title: language === 'en' ? 'Please select a rating' : 'ದಯವಿಟ್ಟು ರೇಟಿಂಗ್ ಆಯ್ಕೆಮಾಡಿ',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: language === 'en' ? 'Review submitted!' : 'ವಿಮರ್ಶೆ ಸಲ್ಲಿಸಲಾಗಿದೆ!',
      description: language === 'en' 
        ? 'Thank you for sharing your experience.'
        : 'ನಿಮ್ಮ ಅನುಭವವನ್ನು ಹಂಚಿಕೊಂಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು.',
    });

    setUserRating(0);
    setComment('');
  };

  const StarRating = ({ rating, interactive = false }: { rating: number; interactive?: boolean }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() => interactive && setUserRating(star)}
          className={cn(
            "transition-colors",
            interactive && "cursor-pointer hover:scale-110 transition-transform"
          )}
        >
          <Star
            className={cn(
              "w-5 h-5 transition-colors",
              (interactive ? (hoverRating || userRating) >= star : rating >= star)
                ? "text-mysore-gold fill-mysore-gold"
                : "text-muted-foreground/30"
            )}
          />
        </button>
      ))}
    </div>
  );

  return (
    <section className="mt-12 pt-12 border-t border-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-1">
            {t('gem.reviews')}
          </h3>
          <div className="flex items-center gap-3">
            <StarRating rating={initialRating} />
            <span className="text-muted-foreground">
              {initialRating} ({reviewCount} {language === 'en' ? 'reviews' : 'ವಿಮರ್ಶೆಗಳು'})
            </span>
          </div>
        </div>
      </div>

      {/* Write Review */}
      <div className="bg-muted/50 rounded-xl p-6 mb-8">
        <h4 className="font-semibold mb-4">{t('gem.writeReview')}</h4>
        
        <div className="mb-4">
          <label className="text-sm text-muted-foreground mb-2 block">{t('review.rating')}</label>
          <StarRating rating={userRating} interactive />
        </div>

        <div className="mb-4">
          <label className="text-sm text-muted-foreground mb-2 block">{t('review.comment')}</label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t('review.placeholder')}
            className="resize-none"
            rows={3}
          />
        </div>

        <Button onClick={handleSubmitReview} variant="royal">
          {t('review.submit')}
        </Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-card rounded-xl p-5 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-muted-foreground mt-3">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
