import { Review as ReviewType } from '../../types/review';
import Review from '../review/review';

type ReviewProps = {
  reviews: ReviewType[];
};

function Reviews({ reviews }: ReviewProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
